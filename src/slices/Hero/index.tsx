import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h1 className="text-black">{slice.primary.firstname}</h1>
      <h1>{slice.primary.lastname}</h1>
      <h1>{slice.primary.tagline1}</h1>

    </section>
  );
};

export default Hero;
