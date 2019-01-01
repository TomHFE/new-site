import { CircleLoader } from "react-spinners";
import { useState, useEffect } from "react";

const Loading = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleLoad();
    }, 8000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleLoad = () => {
    setLoad(true);
    console.log(load);
  };

  return (
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
          display: load ? "none" : "flex",
        }}
      >
        <CircleLoader color="#868686" size={70} />
      </div>
    </div>
  );
};
export default Loading;
