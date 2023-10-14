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
    <div className="relative h-screen overflow-hidden bg-transparent ">
      <div
        ref={blobRef}
        className="translate-middle animate-custom-rotate absolute aspect-square h-36 rounded-full bg-gradient-to-r  from-green-400  to-purple-600 ease-in-out"
      ></div>
      <div
        id="blur"
        className="absolute z-10 h-full w-full backdrop-blur-[75px]"
      ></div>
    </div>
  );
}
