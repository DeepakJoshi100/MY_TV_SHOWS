import { useState } from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import ShowCards from "./Components/ShowCards";
import ShowDetail_Page from "./Pages/ShowDetail_Page";
import ShowsList_Page from "./Pages/ShowsList_Page";

function App() {
  return (
    <div className="max-w-5xl mx-auto bg-gray-300 p-4 m-2 rounded-sm font-mono font-bold">
      <Routes>
        <Route path="/" element={<ShowsList_Page />} />
        <Route path="show/:showId" element={<ShowDetail_Page />} />
      </Routes>
    </div>
  );
}

export default App;
