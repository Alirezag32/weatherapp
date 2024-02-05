import { Navigate } from "react-router-dom";

function isAuthenticated() {
  const username = localStorage.getItem("username");

  return !!username;
}

function PrivetRoute(props) {
  if (isAuthenticated()) {
    return props.children;
  } else {
    return <Navigate to="/register" />;
  }
}

export { PrivetRoute };
