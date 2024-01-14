// ./schemas/Home.ts

import {defineField, defineType} from 'sanity'

export const HomeBanner = defineType({
  name: 'homeBanner',
  type: 'document',
  title: '[Home;1] Banner',
  fields: [
    defineField({
        name: 'titleBannerSlide',
        type: 'string',
        title: 'Title of Banner Slide',
   
    }),
    defineField({
            name: 'imageurl',
            type: 'image',
            title: 'Create a Banner Slide',
            description: 'Images MUST be prepared in a 12(width) x 5(height) ratio',
            options: {hotspot: true},
            fields: [
                {
                name: 'title',
                type: 'string',
                title: 'Title (Displayed)',
                },
                {
                name: 'caption',
                type: 'string',
                title: 'Caption (Displayed)',
                },
                {
                name: 'alt',
                type: 'string',
                title: 'Alternative text (Hidden)',
                description: 'This text will appear only if the image fails to load.',
                },
            ],
        }),
  ]
})