import useMobileDetect from "use-mobile-detect-hook";
import { useEffect, useState } from "react";

import cursor from "../cursor.png";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);
  return mousePosition;
};

const Cursor = () => {
  const detectMobile = useMobileDetect();
  const { x, y } = useMousePosition();

  return (
    <img
      alt="cursor"
      style={{
        left: `${detectMobile.isMobile() ? 0 : x}px`,
        top: `${detectMobile.isMobile() ? 0 : y}px`,
      }}
      src={cursor}
    ></img>
  );
};

export default Cursor;
