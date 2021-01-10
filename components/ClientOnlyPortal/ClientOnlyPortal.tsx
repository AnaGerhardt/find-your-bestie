import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function ClientOnlyPortal({ children, selector, active, wrapperRef }) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current.classList.contains(active) &&
        !wrapperRef.current.contains(e.target)
      ) {
        wrapperRef.current.classList.remove(active);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return mounted ? createPortal(children, ref.current) : null;
}
