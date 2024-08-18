'use client'
import { Content, KeyTextField, LinkField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {useEffect, useRef} from "react";
import { gsap } from "gsap";
import './Hero.css'
import Bounded from "@/components/Bounded";
import img from '../../assets/tahtah.png';
import Image from 'next/image'; // Import the next/image component
import BoxReveal from "./BoxReveal";
import Button from "@/components/Button";



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


const linkField: LinkField = {
  link_type: "Web",
  url: "https://www.linkedin.com/in/hamditaha/",
  // Additional properties if needed
};

const label: KeyTextField = "Contact Me";




  return (
    <Bounded
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
  ref={component}
>
  <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center justify-center relative z-10">
    
  <div className="col-start-1 md:row-start-1 flex flex-col items-center justify-center overflow-hidden pt-8 relative z-20 text-center space-y-4 md:space-y-6">
          <BoxReveal boxColor={"#9CB1B4"} duration={0.8}>
            <p className="text-[3rem] md:text-[9.5rem] font-bold">
              Taha Hamdi<span className="text-[#ca865e]">.</span>
            </p>
          </BoxReveal>
    
          <BoxReveal boxColor={"#9CB1B4"} duration={1}>
            <h2 className="text-[1rem] md:text-[1.5rem] mt-2">
              Software Engineer{" // "}
              <span className="text-[#ca865e]">Junior Entrepreneur</span><span className="text-[#684925]">.</span>
            </h2>
          </BoxReveal>
    
          {/* <BoxReveal boxColor={"#9CB1B4"} duration={1.2}>
            <div className="mt-4 text-[0.875rem] md:text-[1rem]">
              <p>
                -&gt; 20+ free and open-source animated components built with
                <span className="font-semibold text-[#5046e6]"> React</span>,
                <span className="font-semibold text-[#5046e6]"> Typescript</span>,
                <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
                and
                <span className="font-semibold text-[#5046e6]"> Framer Motion</span>.
                <br />
                -&gt; 100% open-source, and customizable. <br />
              </p>
            </div>
          </BoxReveal> */}
    
          <BoxReveal boxColor={"#9CB1B4"} duration={1}>
            <Button linkField={linkField}
        label={label}
        showIcon={true}
        className="mt-6 md:mt-8 bg-[#5046e6]"></Button>
          </BoxReveal>
        </div>
        
        <div className="md:col-start-2 absolute inset-0 z-0 hidden md:flex items-center justify-center">
          <Image
            className="object-cover"
            src={img}
            alt="Background Image"
            layout="fill"
            quality={100}
          />
        </div>
  </div>
</Bounded>

  );
};

export default Hero;
