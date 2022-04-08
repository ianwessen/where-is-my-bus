import React, { useState } from "react";
import { worker } from "./mocks/browser";
import { QueryClient, QueryClientProvider } from "react-query";
import { Display } from "./components/Display";

import "./App.css";

const queryClient = new QueryClient();

if (process.env.NODE_ENV === "development") {
  console.log("mock service worker starting...");
  worker.start({ onUnhandledRequest: "bypass" });
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Display />
      </div>
    </QueryClientProvider>
  );
}

export default App;
