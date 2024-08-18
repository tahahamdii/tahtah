import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageBlock`.
 */
export type ImageBlockProps = SliceComponentProps<Content.ImageBlockSlice>;

/**
 * Component for "ImageBlock" Slices.
 */
const ImageBlock = ({ slice }: ImageBlockProps): JSX.Element => {
  return (
    <div className="rounded-3xl		">
    <PrismicImage field={slice.primary.image} imgixParams={{w: 600}} className="rounded-3xl	" />
    </div>
  );
};

export default ImageBlock;
