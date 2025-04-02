
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Typewriter({ text }) {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: text,
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      cursorChar: " _"
    });

    return () => typed.destroy();
  }, []);

  return <span ref={typedRef} className="text-2xl typewriter"></span>;
}
