import { SliceZone } from "@prismicio/react";
import { createClient } from "~/prismicio";
import { components } from "~/slices";

export default async function Aside() {
  const client = createClient();
  const aside = await client.getSingle("aside");
  return <SliceZone slices={aside.data.slices} components={components} />;
}
