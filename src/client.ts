import { createClient } from "@sanity/client";
import imageURLBuilder from "@sanity/image-url"; 
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
    projectId: '79gm6w2j',
    dataset: 'production',
    apiVersion: '2024-01-14',
    useCdn: true,
})

const builder = imageURLBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);