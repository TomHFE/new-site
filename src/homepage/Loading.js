import { CircleLoader } from "react-spinners";
import { useState, useEffect } from "react";

const Loading = () => {
  // loading hook
  const [load, setLoad] = useState(false);
  // timer for switching loading hook
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleLoad();
    }, 8000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  // load hook function
  const handleLoad = () => {
    setLoad(true);
  };

  return (
    // styling for load hook
    <div style={{ height: "100%", margin: "0", padding: "0" }}>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          color: "white",
          zIndex: "1000000",
          backgroundColor: "#141922",
          width: "100vw",
          position: "absolute",
          top: "0",
          left: "0",
          // display dependent on load hook
          display: load ? "none" : "flex",
        }}
      >
        {/* circle loader */}
        <CircleLoader color="#868686" size={70} />
      </div>
    </div>
  );
};
export default Loading;
