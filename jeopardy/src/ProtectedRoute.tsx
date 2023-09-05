import { useStore } from "./store";
import { Navigate } from "react-router-dom";
import React from "react";

export default function ProtectedRoute({ children }: React.ReactNode) {
  const { playerName } = useStore((state) => state);
  if (!playerName) {
    return <Navigate replace={true} to="/" />;
  }
  return children;
}
