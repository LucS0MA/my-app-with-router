import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Home() {
  const weather = useLoaderData();

  return (
    <div>
      <h1 className="PresTitle">Hello from Home</h1>
      <p>Today is a {weather} day</p>
    </div>
  );
}

export default Home;
