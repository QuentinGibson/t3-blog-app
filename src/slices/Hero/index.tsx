import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Button } from "~/components/ui/button";

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
      <PrismicRichText
        components={{
          heading1: ({ children }) => {
            return <h2 className="text-3xl font-bold mb-4">{children}</h2>;
          },
        }}
        field={slice.primary.header}
      />
      <PrismicRichText components={{
        paragraph: ({children}) => {
          return <p className="text-muted-foreground mb-6 mt-0">{children}</p>
        }
      }} field={slice.primary.sub_header} />
      {/* TODO: Use shacdn Link/Button component here*/}
      <div className="flex gap-4">
        <PrismicNextLink className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" field={slice.primary.cta_link}>
            {slice.primary.cta_label}
        </PrismicNextLink>
        <PrismicNextLink className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" field={slice.primary.sub_button_link}>
            {slice.primary.sub_button_label}
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default Hero;
