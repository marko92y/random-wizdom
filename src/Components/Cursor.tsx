import { useEffect, useState } from "react";
import cursor from "../cursor.png";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  useEffect(() => {
    const mouseMoveHandler = (event: { clientX: any; clientY: any }) => {
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
  const { x, y } = useMousePosition();
  return (
    <img
      alt="cursor"
      style={{ left: `${x}px`, top: `${y}px` }}
      src={cursor}
    ></img>
  );
};

export default Cursor;
