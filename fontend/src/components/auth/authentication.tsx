import { EventHandler } from "react";
import Login from "./login";
import Logout from "./logout";
import { useUserContext } from "@/contexts/userContext"; 

export default function Authentication() {
  const user = useUserContext();
  return (
    <div className="absolute top-0 left-0 p-4">
      {!user.isAuthenticated ? (
        <Login ></Login>
      ) : (
        <Logout></Logout>
      )}
    </div>
  );
}