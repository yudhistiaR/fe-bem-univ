"use client";

import { useState, useEffect } from "react";

const useMobileView = () => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
      };

      setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowSizeChange);

      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, [width]);

  return width !== null ? width <= 768 : false;
};

export default useMobileView;
