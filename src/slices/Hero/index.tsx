'use client'
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {useEffect, useRef} from "react";
import { gsap } from "gsap";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {

  const component = useRef(null)

    useEffect(() => {
      let ctx = gsap.context(() => {
        const tl = gsap.timeline();
        tl.fromTo(".name-animation",{
          x: -100, opacity: 0, rotate: -10
        },
        {
          x:0,
          opacity:1,
          rotate: 0,
          ease: "elastic.out(1,0.3)",
          duration:3,
          transformOrigin: "left top",
          stagger: {
            each:0.1,
            from: "random",
          }
        }
        );
        tl.from(".job-title1", {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power3.out",
        }); // Start the job-title1 animation 2 seconds after the previous animation
    
        tl.from(".job-title2", {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power3.out",
        });
        tl.from(".job-title3", {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power3.out",
        }); // Start the job-title2 animation 2 seconds after the previous animation
        
      }, component);
      return () => ctx.revert();
    }, [])



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
      ref={component}
    >
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
        <div className="col-start-1 md:row-start-1">
          <h1 className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter" aria-label={slice.primary.firstname + " " + slice.primary.lastname}>
            <span className="block text-slate-300">{renderLetters(slice.primary.firstname, "first")}</span>
            <span className="-mt[.2em] block text-slate-200">{renderLetters(slice.primary.lastname, "last")}</span>
            

          </h1>
            <span className="job-title1 block text-white bg-clip-text text-2xl font-light  tracking-[.2em] text-transparent opacity-100 md:text-4xl">{slice.primary.tagline1}</span>
            <span className="job-title2 block text-white bg-clip-text text-2xl font-light  tracking-[.2em] text-transparent opacity-100 md:text-4xl">{slice.primary.tagline2}</span>
            <span className="job-title3 block text-white bg-clip-text text-2xl font-light  tracking-[.2em] text-transparent opacity-100 md:text-4xl">{slice.primary.tagline3}</span>

        </div>
      </div>
    </section>
  );
};

export default Hero;
