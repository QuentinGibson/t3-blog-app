import { type Content } from "@prismicio/client";
import {
  PrismicLink,
  PrismicRichText,
  type SliceComponentProps,
} from "@prismicio/react";

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
      <PrismicRichText
        components={{
          heading2: ({ children }) => {
            return <h2 className="mb-4 text-3xl font-bold">{children}</h2>;
          },
        }}
        field={slice.primary.header}
      />
      <PrismicRichText
        components={{
          paragraph: ({ children }) => {
            return <p className="mb-6 text-muted-foreground">{children}</p>;
          },
        }}
        field={slice.primary.description}
      />
      <div className="grid grid-cols-2 gap-4">
        {slice.primary.cards.map((item, index) => (
          // Render the item
          <PrismicLink
            className="rounded-lg bg-muted p-4 transition-colors hover:bg-muted/80"
            key={index}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            field={item.link}
          >
            <PrismicRichText
              components={{
                heading3: ({ children }) => {
                  return <h3 className="mb-2 text-xl font-bold">{children}</h3>;
                },
              }}
              field={item.header}
            />
            <PrismicRichText
              components={{
                paragraph: ({ children }) => {
                  return <p className="text-muted-foreground">{children}</p>;
                },
              }}
              field={item.description}
            />
          </PrismicLink>
        ))}
      </div>
    </section>
  );
};

export default TalkingPoints;
