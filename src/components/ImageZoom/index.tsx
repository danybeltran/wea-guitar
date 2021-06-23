import mediumZoom from "medium-zoom";
import { useRef } from "react";

export default function ImageZoom({ src, alt, className }) {
  const zoomRef = useRef(mediumZoom({ background: "white" }));

  function attachZoom(image) {
    zoomRef.current.attach(image);
  }

  return (
    <img
      style={{
        transition: "0.2s",
      }}
      src={src}
      alt={alt}
      ref={attachZoom}
      className={className}
    />
  );
}
