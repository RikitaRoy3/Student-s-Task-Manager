import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";

function ProtectedRoute({ children }) {

  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    authCheck();
  }, []);

  const authCheck = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/auth/checkauth", {
        method: "GET",
        credentials: "include",
      });

      if (res.ok) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }

    } catch (error) {
      setIsAuth(false);
    }
  };

  if (isAuth === null) return <p>Loading...</p>;

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;