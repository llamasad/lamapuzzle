'use client'
import { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Line, Text } from 'react-konva';

export default function Page() {
  const [tool, setTool] = useState<any>('pen');
  const [lines, setLines] = useState<Array<any>>([]);
  const isDrawing = useRef(false);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Create WebSocket connection.
    ws.current = new WebSocket('ws://localhost:8080/event-emitter/test');
    console.log('WebSocket created');

    // Connection opened
    ws.current.onopen = () => {
      console.log('WebSocket connected');
    };

    // Listen for messages
    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('Received message: ', message);
      if (message.type === 'DRAW') {
        setLines((prevLines) => [...prevLines, message.data]);
      }
    };

    // Connection closed
    ws.current.onclose = (event) => {
      console.log('WebSocket closed: ', event);
    };

    // Connection error
    ws.current.onerror = (error) => {
      console.error('WebSocket error: ', error);
    };

    // Clean up WebSocket connection on component unmount
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  const handleMouseDown = (e: any) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    const newLine = { tool, points: [pos.x, pos.y] };
    setLines([...lines, newLine]);

    // Send new line to server
    if (ws.current) {
      ws.current.send(JSON.stringify({ type: 'DRAW', data: newLine }));
      console.log('Sent new line: ', newLine);
    }
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([point.x, point.y]);
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());

    // Send updated line to server
    if (ws.current) {
      ws.current.send(JSON.stringify({ type: 'DRAW', data: lastLine }));
      console.log('Sent updated line: ', lastLine);
    }
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <div>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          <Text text="Just start drawing" x={5} y={30} />
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#df4b26"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>
      <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
        }}
      >
        <option value="pen">Pen</option>
        <option value="eraser">Eraser</option>
      </select>
    </div>
  );
}