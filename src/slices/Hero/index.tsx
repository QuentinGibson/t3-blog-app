import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

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
            return <h1 className="text-2xl font-bold">{children}</h1>;
          },
        }}
        field={slice.primary.header}
      />
      <PrismicRichText field={slice.primary.sub_header} />
      {/* TODO: Use shacdn Link/Button component here*/}
      <div className="flex">
        <PrismicNextLink field={slice.primary.cta_link}>
          {slice.primary.cta_label}
        </PrismicNextLink>
        <PrismicNextLink field={slice.primary.sub_button_link}>
          {slice.primary.sub_button_label}
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default Hero;
