import { createClient } from "~/prismicio";
import { isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export default async function Header() {
  const client = createClient();
  const header = await client.getSingle("settings");
  return (
    <header className="bg-black text-primary-foreground py-4 px-6 pr-16">
      <nav className="flex justify-between item-center w-full">
        {isFilled.image(header.data.logo) ? (
          <PrismicNextImage height={80} field={header.data.logo}/>
        ) : (
          <h1 className="text-2xl font-bold">{header.data.logo_fallback}</h1>
        )}

        <ul className="flex gap-4 items-center justify-center">
          {isFilled.group(header.data.nav_items) &&
            header.data.nav_items.map((item, index) => {
              return (
                <li className="text-lg font-bold" key={index}>
                  <PrismicNextLink className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" field={item.link} prefetch={false}>
                    {item.label}
                  </PrismicNextLink>
                </li>
              );
            })}
        </ul>
      </nav>
    </header>
  );
}
