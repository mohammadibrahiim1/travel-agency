import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading){
    return (
      <div>
        <div
          class="spinner-grow"
          style={{"width": "3rem", "height": "3rem"}}
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
}
if(!user){
    return children;
}
};

export default PrivateRoutes;
