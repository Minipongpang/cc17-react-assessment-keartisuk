import React from "react";
import Router from "./routes/Router";
import AuthContextProvider from "./context/AuthenContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </>
  );
}

export default App;
