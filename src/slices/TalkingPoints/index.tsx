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
      <PrismicRichText components={{
        heading2: ({children}) => {
          return <h2 className="text-3xl font-bold mb-4">{children}</h2>
        }
      }} field={slice.primary.header} />
      <PrismicRichText components={{
        paragraph: ({children}) => {
          return <p className="text-muted-foreground mb-6">{children}</p>
        }
      }}  field={slice.primary.description} />
      <div className="grid grid-cols-2 gap-4">
        {slice.primary.cards.map((item, index) => (
          // Render the item
          <div className="bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors" key={index}>
            <PrismicRichText components={{
              heading3: ({children}) => {
                return <h3 className="text-xl font-bold mb-2">{children}</h3>
              }
            }} field={item.header} />
            <PrismicRichText components={{
              paragraph: ({children}) => {
                return <p className="text-muted-foreground">{children}</p>
              }
            }} field={item.description} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TalkingPoints;
