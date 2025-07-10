import React, { useState, useEffect } from "react";
import "./globals.css"
import Home from "./Home"
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsLoaded(true);
    };

    // If page is already loaded (from cache)
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  if (!isLoaded) {
    return (
      <div className="preloader">
        {/* You can style this with CSS or Tailwind */}
        <h2>Loading...</h2>
        
      </div>
    );
  }

  return (
    <>
    <Home/>
    </>
  );
};

export default App;
