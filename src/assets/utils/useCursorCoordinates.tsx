import { useState, useEffect } from "react";

export default function useCursorCoordinates() {
  const [cursorCoordinates, setCursorCoordinates] = useState<{ clientX: string; clientY: string } | {}>({});

  useEffect(() => {
    function getMouseCoordinates(event: MouseEvent) {
      const { clientX, clientY } = event;
      setCursorCoordinates({ clientX, clientY });
    }

    document.addEventListener("pointermove", getMouseCoordinates);

    // * Cleanup
    return () => {
      document.removeEventListener("pointermove", getMouseCoordinates);
    };
  }, []);

  return cursorCoordinates;
}
