import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import mediumZoom from "medium-zoom";
import ImageZoom from "../ImageZoom";

const ImageContainer = styled.div`
.arrow {
  transition: 0.2s;
}
&:hover {
    .arrow {
      opacity: 100%;
    }
  }
}
`;
interface IImageCarousel {
  images: Array<string>;
}
export default function ImageCarousel(props: IImageCarousel) {
  const { images = [] } = props;
  const [currentImage, setCurrentImage] = useState(0);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    if (transition) {
      const timeout = setTimeout(() => {
        setTransition(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [transition]);

  const carousel = {
    forward() {
      if (images[currentImage + 1]) {
        setTransition(true);
        setTimeout(() => {
          setCurrentImage((c) => c + 1);
        }, 400);
      }
    },
    backward() {
      if (images[currentImage - 1]) {
        setTransition(true);
        setTimeout(() => {
          setCurrentImage((c) => c - 1);
        }, 400);
      }
    },
  };

  return (
    <div className="flex items-center bg-white py-20">
      <ImageContainer className="relative px-2 md:px-20 bg-white w-full">
        <div className="arrow opacity-0 flex-centered absolute top-0 left-5 h-full">
          {images[currentImage - 1] && (
            <button
              onClick={carousel.backward}
              className="w-10 h-10 text-xl md:w-20 md:h-20 md:text-4xl bg-black text-white rounded-full flex-centered justify-center"
            >
              <HiArrowLeft />
            </button>
          )}
        </div>
        <ImageZoom
          alt={"Guitar picture"}
          className={`w-full h-64 object-contain ${transition && "opacity-0"}`}
          src={images[currentImage]}
        />
        <div className="arrow opacity-0 flex-centered absolute top-0 right-5 h-full">
          {images[currentImage + 1] && (
            <button
              onClick={carousel.forward}
              className="w-10 h-10 text-xl md:w-20 md:h-20 md:text-4xl bg-black text-white rounded-full flex-centered justify-center"
            >
              <HiArrowRight />
            </button>
          )}
        </div>
      </ImageContainer>
    </div>
  );
}
