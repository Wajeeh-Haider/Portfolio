import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const token = import.meta.env.VITE_SANITY_TOKEN;
export const client = sanityClient({
  projectId,
  dataset: "production",
  apiVersion: "2022-10-16",
  useCdn: true,
  token
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
