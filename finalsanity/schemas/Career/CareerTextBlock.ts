// ./schemas/About.ts

import {defineField, defineType} from 'sanity'

export const CareerTextBlock = defineType({
  name: 'careerTextBlock',
  type: 'document',
  title: '[Career;1] Text Blocks (with Image)',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Name this Text Block',
      description: '[Hidden] This is for administrative convenience and will be hidden on the site',
  }),
    defineField({
        name: 'TextImageBlock',
        type: 'TextImageBlock',
        title: 'Create the Text Block (with Image)',
        description: 'Content here will appear on the site'
    }),
  ],
})