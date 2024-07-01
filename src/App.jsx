import { lazy, Suspense, useState } from "react";
const Loader = lazy(() => import("./components/loaders/Loader"));
const Sky = lazy(() => import("./Models/Sky"));
const Interview = lazy(() => import("./Models/Interview"));
const QNA = lazy(() => import("./Models/QNA"));
const Network = lazy(() => import("./Models/Network"));

export default function App() {
  const [showModel, setShowModel] = useState(0);
  function clickHandler(e) {

    if (e.target.innerHTML === '+') {
      if (showModel === 2) {
        return setShowModel(0);
      }
      setShowModel(prev => prev + 1);
    }

    if (e.target.innerHTML === '-') {
      if (showModel === 0) {
        return setShowModel(2);
      }
      setShowModel(prev => prev - 1);
    }
  }

  return (
    <div className="w-full h-screen">
      <Suspense fallback={<Loader />}>
        <section className="w-full h-full absolute top-0 left-0 z-10">
          <Sky />
        </section>

        {
          showModel === 0 &&
          <section className="w-full h-full absolute top-0 left-0 z-20">
            <Interview />
          </section>
        }
        {
          showModel === 1 &&
          <section className="w-full h-full absolute top-0 left-0 z-20">
            <QNA />
          </section>
        }
        {
          showModel === 2 &&
          <section className="w-full h-full absolute top-0 left-0 z-20">
            <Network />
          </section>
        }

      </Suspense>
      <Suspense fallback={<div>Controls...</div>}>
        <div className="absolute bottom-5 right-0 z-30 w-52 bg-red-400 flex items-center justify-between text-5xl">
          <span onClick={clickHandler}>+</span>
          <span onClick={clickHandler}>-</span>
        </div>
      </Suspense>

    </div >
  )
}