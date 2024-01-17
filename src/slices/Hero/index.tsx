import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Key } from "react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {



const renderLetters  = (name:KeyTextField, key: string) => {
  if(!name) return;
  return name.split("").map((letter,index)=>(
    <span
    key={index}
    className={`name-animation name-animation-${key} inline-block opacity-0`}>
      {letter}
    </span>
  ))
}







  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
        <div className="col-start-1 md:row-start-1">
          <h1 className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter" aria-label={slice.primary.firstname + " " + slice.primary.lastname}>
            <span className="block text-slate-300">{renderLetters(slice.primary.firstname, "first")}</span>
            <span className="-mt[.2em] block text-slate-200">{renderLetters(slice.primary.lastname, "last")}</span>
            <span className="block text-white bg-clip-text text-2xl font-light  tracking-[.2em] text-transparent opacity-100 md:text-4xl">{slice.primary.tagline1}</span>
            <span className="block text-white bg-clip-text text-2xl font-light  tracking-[.2em] text-transparent opacity-100 md:text-4xl">{slice.primary.tagline2}</span>
            <span className="block text-white bg-clip-text text-2xl font-light  tracking-[.2em] text-transparent opacity-100 md:text-4xl">{slice.primary.tagline3}</span>


          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
