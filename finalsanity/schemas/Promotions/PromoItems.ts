// ./schemas/About.ts

import {defineField, defineType} from 'sanity'

export const PromoItems = defineType({
  name: 'promoItems',
  type: 'document',
  title: '[Promo;2] Item Deals',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Name this Item Deal',
      description: '[Hidden] This is for administrative convenience and will be hidden on the site',
  }),
    defineField({
        name: 'ImageGallery',
        type: 'ImageGallery',
        title: 'Create Item Deals',
        description: 'Content here will appear on the site'
    }),
  ],
})