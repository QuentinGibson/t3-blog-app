import { type Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText, type SliceComponentProps } from "@prismicio/react";

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
      <div className="rounded-lg bg-muted p-4">
        <h3 className="mb-4 text-lg font-bold">
          <PrismicText field={slice.primary.join_our_community} />
        </h3>
        <p className="mb-4 text-muted-foreground">
          <PrismicText field={slice.primary.description} />
        </p>
        <div className="flex gap-4">
          <PrismicNextLink
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            field={slice.primary.cta_link}
            prefetch={false}
          >
            {slice.primary.cta_label}
          </PrismicNextLink>
          <PrismicNextLink
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            field={slice.primary.sub_button_link}
            prefetch={false}
          >
            {slice.primary.sub_button_label}
          </PrismicNextLink>
        </div>
      </div>
    </section>
  );
};

export default Community;
