import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "i843ff01",
  dataset: "production",
  apiVersion: "2022-10-16",
  useCdn: true,
  token:
    "skNYfTtMD4Yahrm2ctEu4shcBV5iK0iBPNtfhpdANz7F2BEKhQ08B4JofqLv27RUy4LgMYCnsVTWKQTBYsHj4TyWbdtYwIpiroT6SxopPQkZ6hBzetPTeG5NcEVqzzCQCDRcbmAhcLUxQ8yt8b39WffO8vY4138waOPw1tsk7AJoBqM0yVCr",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
