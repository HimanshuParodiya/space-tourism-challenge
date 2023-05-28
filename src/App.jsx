import "./App.css";
import Destination from "./components/Destination";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import myData from "./Data/data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import { Fragment, useEffect, useState } from "react";

function App() {
  const [isPortrait, setIsPortrait] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 680) {
        setIsPortrait(false);
      } else {
        setIsPortrait(true);
      }
    };
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {myData.destinations.map((data) => {
            return (
              <Fragment key={Math.random()}>
                <Route key={Math.random()}
                  exact
                  path={`/destination`}
                  element={
                    <Destination
                      key={Math.random()}
                      name={data.name}
                      distance={data.distance}
                      time={data.travel}
                      image={data.images.png}
                      description={data.description}
                    />
                  }
                />
                <Route
                  exact
                  path={`/destination/${data.name}`}
                  key={Math.random()}
                  element={
                    <Destination
                      key={Math.random()}
                      name={data.name}
                      distance={data.distance}
                      time={data.travel}
                      image={data.images.png}
                      description={data.description}
                    />
                  }
                />
              </Fragment>
            );
          })}


          {myData.crew.map((data) => {
            // console.log("hello");
            return (
              <Fragment key={Math.random()}>
                <Route key={Math.random()}
                  exact
                  path={`/crew`}
                  element={
                    <Crew
                      key={Math.random()}
                      name={data.name}
                      image={data.images.png}
                      role={data.role}
                      bio={data.bio}
                    />
                  }
                />
                <Route
                  key={Math.random()}
                  exact
                  path={`/crew/${data.role}`}
                  element={
                    <Crew
                      key={Math.random()}
                      name={data.name}
                      image={data.images.png}
                      role={data.role}
                      bio={data.bio}
                    />
                  }
                />
              </Fragment>
            );
          })}




          {myData.technology.map((data) => {
            // console.log(data.images.portrait);
            return (

              <Fragment key={Math.random()}>
                <Route exact  path={`/technology`} element={<Technology key={Math.random()} name={data.name} image={isPortrait ? data.images.portrait : data.images.landscape} description={data.description}/>} />
                <Route
                  exact
                  path={`/technology/${data.name}`}
                  element={
                    <Technology
                    key={Math.random()}
                      name={data.name}
                      image={ isPortrait ? data.images.portrait : data.images.landscape}
                      description={data.description}
                    />
                  }
                />
              </Fragment>
            );
          })}

          {/* <Route exact path="/technology" element={<Technology />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

// adding key help me to add transition on every destination of myData otherwise it was happening only onece
