import { Status } from "@/app/page";
import { useEffect } from "react";
import { useWebSocket } from "./provider/websocketProvider";

export default function Invite({ lobbyId ,setGameStatus,setIsLoading}: { lobbyId: string,setGameStatus:(status: Status) => void, setIsLoading:(loading: boolean) => void }) {
    const {connect,ws} = useWebSocket();

    useEffect(() => {
        connect((ws:WebSocket) => {
            setIsLoading(true);
            setGameStatus("playing");
            ws.send(
                JSON.stringify({
                    action: "JOIN_PRIVATE_LOBBY",
                    data: {
                        isAuthorized: false,
                        username: "Guest",
                    },
                })
            );
        });
    }
    , [lobbyId,ws]);

  return "";
}
