import useCursorCoordinates from "../../utils/useCursorCoordinates";
import { useRef } from "react";

export default function BlurPage() {
  const blobRef = useRef(null);
  const mouseCoordinates = useCursorCoordinates();

  const { clientX, clientY } = mouseCoordinates;
  if (blobRef.current) {
    if (clientX !== undefined && clientY !== undefined) {
      let blob = blobRef.current;
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 750, fill: "forwards" }
      );
    }
  }

  return (
    <div className="relative bg-transparent h-screen overflow-hidden ">
      <div
        ref={blobRef}
        className="translate-middle absolute aspect-square h-36 animate-custom-rotate rounded-full bg-gradient-to-r  from-green-400  to-purple-600 ease-in-out"
      ></div>
      <div id="blur" className="absolute z-10 h-full w-full backdrop-blur-[75px]"></div>
    </div>
  );
}
