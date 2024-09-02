import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TalkingPoints`.
 */
export type TalkingPointsProps =
  SliceComponentProps<Content.TalkingPointsSlice>;

/**
 * Component for "TalkingPoints" Slices.
 */
const TalkingPoints = ({ slice }: TalkingPointsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.header} />
      <PrismicRichText field={slice.primary.description} />
      {slice.primary.cards.map((item, index) => (
        // Render the item
        <div key={index}>
          <PrismicRichText field={item.header} />
          <PrismicRichText field={item.description} />
        </div>
      ))}
    </section>
  );
};

export default TalkingPoints;
