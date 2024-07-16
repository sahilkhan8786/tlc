import React, { lazy, Suspense, useState, useEffect } from "react";
import Loader from "./components/Loaders/Loader";
import { contentInfo, initialPositions, smallScreenPositions } from "./components/constants";
const Details = lazy(() => import("./components/Details"));
const Buttons = lazy(() => import("./components/Buttons"));
const CanvasContainer = lazy(() => import("./components/CanvasContainer"));


const App = () => {
  const [positions, setPositions] = useState(initialPositions);
  const [activeModel, setActiveModel] = useState("Interview");

  useEffect(() => {
    const handleResize = () => {
      const newPositions = window.innerWidth < 768 ? smallScreenPositions : initialPositions;
      setPositions(newPositions);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);





  return (
    <>
      <section className="w-full h-screen">
        <Suspense fallback={null}>
          <Buttons positions={positions} setActiveModel={setActiveModel} setPositions={setPositions} />
        </Suspense>

        <Suspense fallback={<Loader />}>

          <CanvasContainer positions={positions} />
        </Suspense>
      </section >
      <Suspense fallback={null}>
        <Details contentInfo={contentInfo} activeModel={activeModel} />
      </Suspense>
    </>

  );
};

export default App;
