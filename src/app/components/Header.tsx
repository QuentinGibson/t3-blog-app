import { createClient } from "~/prismicio";
import { isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export default async function Header() {
  const client = createClient();
  const header = await client.getSingle("settings");
  return (
    <header className="bg-black text-white">
      <nav>
        {isFilled.image(header.data.logo) ? (
          <PrismicNextImage field={header.data.logo} />
        ) : (
          <h1>{header.data.logo_fallback}</h1>
        )}

        <ul>
          {isFilled.group(header.data.nav_items) &&
            header.data.nav_items.map((item, index) => {
              return (
                <li key={index}>
                  <PrismicNextLink field={item.link}>
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
