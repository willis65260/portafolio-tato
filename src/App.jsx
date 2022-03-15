import { useEffect } from "react";

import MainView from "./components/MainView";
import "./resources/styles/style.css";
import KUTE, { Tween } from "kute.js";
function App() {
  //

  

  useEffect(() => {
    const tween1 = KUTE.fromTo(
      "#layer1-first",
      { path: "#layer1-first" },
      { path: "#layer1-second" },
      { repeat: 999, duration: 2000, yoyo: true }
    );

    const tween2 = KUTE.fromTo(
      "#layer2-first",
      { path: "#layer2-first" },
      { path: "#layer2-second" },
      { repeat: 999, duration: 2000, yoyo: true }
    );

    const tween3 = KUTE.fromTo(
      "#layer3-first",
      { path: "#layer3-first" },
      { path: "#layer3-second" },
      { repeat: 999, duration: 2000, yoyo: true }
    );

    const tween4 = KUTE.fromTo(
      "#layer4-first",
      { path: "#layer4-first" },
      { path: "#layer4-second" },
      { repeat: 999, duration: 2000, yoyo: true }
    );

    const tween5 = KUTE.fromTo(
      "#layer5-first",
      { path: "#layer5-first" },
      { path: "#layer5-second" },
      { repeat: 999, duration: 2000, yoyo: true }
    );
    
    tween1.start()
    tween2.start()
    tween3.start()
    tween4.start()
    tween5.start()
    console.log("inicio")
    return () => {
      
    };
  }, []);


  return (
    <div className="App">
      <div className="main-container d-flex">
        <MainView />
      </div>
      <div className="animation">
        <svg
          version="1.1"
          viewBox="0 0 900 600"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-animation"
        >
          <path id="layer1-first"
            d="m0 419 129-22 128 25 129-29 128-13 129 66 128-12 129-43v210h-129-128-129-128-129-128-129z"
            fill="#212121"
          />
          <path id="layer2-first"
            d="m0 477 129-48 128 5 129-31 128 61 129-3 128-39 129-1v180h-129-128-129-128-129-128-129z"
            fill="#253827"
          />
          <path id="layer3-first"
            d="m0 459 129 9 128 43 129-43 128 41 129-2 128-10 129-60v164h-129-128-129-128-129-128-129z"
            fill="#244f2d"
          />
          <path id="layer4-first"
            d="m0 524 129 12 128-39 129 20 128-19 129 21 128 20 129-3v65h-129-128-129-128-129-128-129z"
            fill="#1d6732"
          />
          <path id="layer5-first"
            d="m0 524 129 49h128l129-16 128-16 129-8 128-3 129 31v40h-129-128-129-128-129-128-129z"
            fill="#008037"
          />





          <path id="layer1-second" style={{visibility:"hidden"}}
            d="m0 381 129 52 128-6 129-40 128 23 129 34 128-33 129-10v200h-129-128-129-128-129-128-129z"
            fill="#212121"
          />
          <path id="layer2-second" style={{visibility:"hidden"}}
            d="m0 405 129 49 128 8 129-53 128 63 129-62 128 57 129-66v200h-129-128-129-128-129-128-129z"
            fill="#253827"
          />
          <path id="layer3-second" style={{visibility:"hidden"}}
            d="m0 458 129 19 128-15 129-8 128-8 129 44 128-41 129 37v115h-129-128-129-128-129-128-129z"
            fill="#244f2d"
          />
          <path id="layer4-second" style={{visibility:"hidden"}}
            d="m0 508 129-14 128-10 129 50 128-43 129 19 128-21 129 29v83h-129-128-129-128-129-128-129z"
            fill="#1d6732"
          />
          <path id="layer5-second" style={{visibility:"hidden"}}
            d="m0 551h129l128-11 129 32 128-1 129-19 128-7 129 27v29h-129-128-129-128-129-128-129z"
            fill="#008037"
          />
        </svg>



      </div>
    </div>
  );
}

export default App;
