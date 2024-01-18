import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Educationn`.
 */
export type EducationnProps = SliceComponentProps<Content.EducationnSlice>;

/**
 * Component for "Educationn" Slices.
 */
const Educationn = ({ slice }: EducationnProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading as="h2" size="lg">
        {slice.primary.heading}
      </Heading>
      <div>
          {slice.primary.degree}
        </div>
        <div>
          {slice.primary.time}
        </div>
        <div>
          {slice.primary.comment}
        </div>
    </Bounded>
  );
};

export default Educationn;


