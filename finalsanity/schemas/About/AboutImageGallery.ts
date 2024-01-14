// ./schemas/About.ts

import {defineField, defineType} from 'sanity'

export const AboutImageGallery = defineType({
  name: 'aboutImageGallery',
  type: 'document',
  title: '[About;3] Image Gallery',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Name this Image Gallery',
      description: '[Hidden] This is for administrative convenience and will be hidden on the site',
  }),
    defineField({
        name: 'ImageGallery',
        type: 'ImageGallery',
        title: 'Create an Image Gallery',
        description: 'Content here will appear on the site'
    }),
  ],
})