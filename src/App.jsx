import React, { lazy, Suspense, useState, useEffect, useCallback } from "react";
const CanvasContainer = lazy(() => import("./components/CanvasContainer"));

const initialPositions = {
  Interview: {
    position: [0, -1, 0.2],
    scale: [2.5, 2.5, 2.5],
  },
  QNA: {
    position: [5, 1.5, 0.2],
    scale: [0.5, 0.5, 0.5],
  },
  Network: {
    position: [3.5, 3.5, -3.8],
    scale: [0.5, 0.5, 0.5],
  },
  Chronological: {
    position: [-0.5, 3.5, -5],
    scale: [0.5, 0.5, 0.5],
  },
  LearningLeap: {
    position: [-3, 3, -3],
    scale: [0.5, 0.5, 0.5],
  },
  WeeklyFeature: {
    position: [-5, 2, -2],
    scale: [0.5, 0.5, 0.5],
  },
  LearningModule: {
    position: [-4, 0.5, 1],
    scale: [0.5, 0.5, 0.5],
  },
};

const smallScreenPositions = {
  Interview: {
    position: [0, -1, 0.2],
    scale: [1.5, 1.5, 1.5],
  },
  QNA: {
    position: [3, 1, 0.2],
    scale: [0.3, 0.3, 0.3],
  },
  Network: {
    position: [2.5, 2.5, -2.8],
    scale: [0.3, 0.3, 0.3],
  },
  Chronological: {
    position: [-0.5, 2.5, -3.5],
    scale: [0.3, 0.3, 0.3],
  },
  LearningLeap: {
    position: [-2, 2, -2],
    scale: [0.3, 0.3, 0.3],
  },
  WeeklyFeature: {
    position: [-3, 1, -1],
    scale: [0.3, 0.3, 0.3],
  },
  LearningModule: {
    position: [-2.5, 0.5, 0.5],
    scale: [0.3, 0.3, 0.3],
  },
};

const contentInfo = {
  Interview: {
    title: "Interview",
    description: "Watch our exclusive interviews",
  },
  QNA: {
    title: "QNA",
    description: "Get answers to your questions",
  },
  Network: {
    title: "Network",
    description: "Connect with professionals",
  },
  Chronological: {
    title: "Chronological",
    description: "Track events chronologically",
  },
  LearningLeap: {
    title: "Learning Leap",
    description: "Take a leap in learning",
  },
  WeeklyFeature: {
    title: "Weekly Feature",
    description: "Check out our weekly features",
  },
  LearningModule: {
    title: "Learning Module",
    description: "Explore learning modules",
  },
};

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

  const moveLeft = useCallback(() => {
    setPositions((prevPositions) => {
      const keys = Object.keys(prevPositions);
      const newPositions = {};
      const firstPosition = prevPositions[keys[0]];

      for (let i = 0; i < keys.length - 1; i++) {
        newPositions[keys[i]] = {
          ...prevPositions[keys[i + 1]],
          scale: prevPositions[keys[i + 1]].scale,
        };
      }
      newPositions[keys[keys.length - 1]] = {
        ...firstPosition,
        scale: prevPositions[keys[0]].scale,
      };

      return newPositions;
    });

    setActiveModel((prevModel) => {
      const keys = Object.keys(positions);
      const currentIndex = keys.indexOf(prevModel);
      const nextIndex = (currentIndex - 1 + keys.length) % keys.length;
      return keys[nextIndex];
    });
  }, [positions]);

  const moveRight = useCallback(() => {
    setPositions((prevPositions) => {
      const keys = Object.keys(prevPositions);
      const newPositions = {};

      const lastPosition = {
        position: prevPositions[keys[keys.length - 1]].position.slice(),
        scale: prevPositions[keys[keys.length - 1]].scale.slice(),
      };

      for (let i = 0; i < keys.length; i++) {
        const currentKey = keys[i];
        const nextKey = keys[(i + 1) % keys.length];

        newPositions[nextKey] = {
          position: prevPositions[currentKey].position.slice(),
          scale: prevPositions[currentKey].scale.slice(),
        };
      }

      newPositions[keys[0]] = lastPosition;

      return newPositions;
    });

    setActiveModel((prevModel) => {
      const keys = Object.keys(positions);
      const currentIndex = keys.indexOf(prevModel);
      const nextIndex = (currentIndex + 1) % keys.length;
      return keys[nextIndex];
    });
  }, [positions]);



  return (
    <Suspense fallback={<p>Getting all data</p>}>

      <section className="w-full h-screen">
        <Suspense fallback={<p>Laoding data...</p>}>

          <div className="z-20 w-full absolute bottom-0 left-0 bg-red-50 p-4 flex items-center justify-around">
            <h1 className="cursor-pointer hover:bg-red-600 p-3" onClick={moveLeft}>LEFT</h1>
            <h1 className="cursor-pointer hover:bg-red-600 p-3" onClick={moveRight}>RIGHT</h1>
          </div>
        </Suspense>
        <Suspense fallback={<p>Loading model...</p>}>
          <CanvasContainer positions={positions} />
        </Suspense>
        <Suspense fallback={<p>Laoding buttons...</p>}>
          <div className="absolute top-24 left-1/2 -translate-x-1/2 p-4 bg-white/45 rounded-lg text-center">
            <h1 className="text-4xl">{contentInfo[activeModel].title}</h1>
            <p>{contentInfo[activeModel].description}</p>
          </div>
        </Suspense>
      </section >
    </Suspense>
  );
};

export default App;
