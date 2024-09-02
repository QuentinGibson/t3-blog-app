import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Community`.
 */
export type CommunityProps = SliceComponentProps<Content.CommunitySlice>;

/**
 * Component for "Community" Slices.
 */
const Community = ({ slice }: CommunityProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for community (variation: {slice.variation}) Slices
    </section>
  );
};

export default Community;
