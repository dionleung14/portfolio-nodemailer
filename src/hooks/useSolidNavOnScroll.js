import { useEffect, useState } from "react";

export default function useSolidNavOnScroll(threshold = 40) {
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsSolid(window.scrollY > threshold);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [threshold]);

  return isSolid;
}
