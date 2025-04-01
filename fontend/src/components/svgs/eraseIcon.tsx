export default function EraseIcon({
    color,
    width,
    height,
  }: {
    color: string;
    width: number;
    height: number;
  }) {
    return (
      <svg
        width={width} // Dynamically set width
        height={height} // Dynamically set height
        viewBox="0 -0.5 17 17"
        version="1.1"
        className="scale-90"
        fill="none"
        stroke="none"
      >
        <g id="SVGRepo_iconCarrier">
          <title>Erase Icon</title>
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(1.000000, 0.000000)" fill={"#333"}>
              <path d="M8.932,13.014 L2.958,7.039 L9.84,0.158 C10.162,-0.167 10.696,-0.156 11.031,0.18 L15.793,4.939 C16.127,5.275 16.138,5.808 15.814,6.13 L8.932,13.014 L8.932,13.014 Z"></path>
              <path d="M7.963,14.11 C6.381,15.693 2.529,14.41 0.861,12.742 C-0.805,11.075 0.341,9.655 1.924,8.072 L7.963,14.11 L7.963,14.11 Z"></path>
            </g>
          </g>
        </g>
      </svg>
    );
  }