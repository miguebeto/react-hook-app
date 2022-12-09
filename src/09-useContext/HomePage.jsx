import React, { useContext } from "react"; 
import { UserContext } from "./UserContext";

export const HomePage = () => {

  const { user } = useContext(UserContext); 

  return (
    <>
      <div>HomePage {user?.name}</div>
      <hr />

      <pre aria-label="pre">{ JSON.stringify(user, null, 3) }</pre>
    </>
  );
};
