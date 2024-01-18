"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { useEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

/**
 * Props for `FieldsList`.
 */
export type FieldsListProps = SliceComponentProps<Content.FieldsListSlice>;

/**
 * Component for "FieldsList" Slices.
 */
const FieldsList = ({ slice }: FieldsListProps): JSX.Element => {

  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 3,

        },
      });

      tl.fromTo(
        ".tech-row", {
        x: (index) => {
          return index % 2 == 0 ? gsap.utils.random(600, 400) : gsap.utils.random(-600, -400);
        }
      },
        {
          x: (index) => {
            return index % 2 == 0 ? gsap.utils.random(-600, -400) : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut"
        }
      )


    }, component)
    return () => ctx.revert()
  })



  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-hidden"
      ref={component}
    >
      <Bounded as="div">
        <Heading size="xl" className="mb-8" as="h2">{slice.primary.heading}</Heading></Bounded>
      {slice.items.map(({ fieldname, fieldcolor }, index) => (
        <div key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-600"
          aria-label={fieldname || undefined}>
          {Array.from({ length: 15 }, (_, index) => (
            <React.Fragment key={index}>
              <span className="tech-item text-7xl font-extrabold uppercase tracking-tighter"
                style={{
                  color: index == 7 && fieldcolor ? fieldcolor : "inherit",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                }}
              >
                {fieldname}
              </span>
              <span className="text-3xl">
                <MdCircle />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default FieldsList;
