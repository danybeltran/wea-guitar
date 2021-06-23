import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useFiltersContext } from "src/context";
import styled from "styled-components";

const Slider = styled.input`
  appearance: none;
  &::-webkit-slider-runnable-track {
    cursor: pointer;
    background: transparent;
    border-top: 1px solid black;
  }
  &::-moz-range-track {
    cursor: pointer;
    background: transparent;
    border-top: 1px solid black;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    border: 1px solid #000000;
    height: 24px;
    width: 24px;
    border-radius: 12px;
    background: black;
    cursor: pointer;
    margin-top: -14px;
  }
  &::-moz-range-thumb {
    appearance: none;
    border: 1px solid #000000;
    height: 24px;
    width: 24px;
    border-radius: 12px;
    background: black;
    cursor: pointer;
    margin-top: -14px;
  }
`;

export default function Filters() {
  const { filters, updateFilter, opened } = useFiltersContext();
  useEffect(() => {
    console.log(filters);
  }, []);

  function handleFilterUpdate(e) {
    updateFilter(e.target.name, e.target.value);
  }

  return (
    <div
      className={`
      border-b bg-white
      h-24 w-full
      z-0
      flex-centered
      ${opened ? "bg-white" : "-mt-24 pointer-events-none select-none"}
    `}
    >
      <div
        className={`px-4 w-full flex-centered flex-wrap md:space-x-8 ${
          !opened && "opacity-0"
        }`}
      >
        <section className="flex-centered w-full md:w-1/2 space-x-4">
          <span className="-mt-3 text-lg uppercase">Price</span>
          <Slider
            step="1"
            max="999"
            name="price"
            value={filters?.price}
            onChange={handleFilterUpdate}
            type="range"
            className="w-full focus:outline-none"
          />
          <span className="-mt-6 text-sm uppercase">
            <span>${filters?.price}</span>
            <span className="font-bold">/$999</span>
          </span>
        </section>
        <section className="mt-2 w-full md:w-1/3 md:-mt-8 relative">
          <input
            type="text"
            name="name"
            value={filters?.name}
            onChange={handleFilterUpdate}
            placeholder="FILTER BY NAME"
            className="border-b w-full font-semibold border-black focus:outline-none"
          />
          <button className="absolute right-0 top-0 text-2xl px-2">
            <BsArrowRight />
          </button>
        </section>
      </div>
    </div>
  );
}
