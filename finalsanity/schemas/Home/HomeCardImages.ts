// ./schemas/Home.ts

import {defineField, defineType} from 'sanity'

export const HomeCardImages = defineType({
  name: 'homeCardImages',
  type: 'document',
  title: '[Home;2] Card Images',
  fieldsets: [
    {name: 'text', title: 'Card Text'},
    ],
  fields: [
    defineField({
        name: 'instructionsCardImagesSet',
        type: 'string',
        title: 'Instructions for Card Images Set',
        description: 'Fill Only 1 of 2 below: "Card Image" or "Card Text"',
        readOnly: true,
    }),
    defineField({
        name: 'imageurl',
        type: 'image',
        title: 'Create a Card Image',
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
            description: 'This text will appear if the image fails to load.',
            },
            {
            name: 'linkUrl',
            type: 'string',
            title: 'Link Url [Hidden]',
            },
        ]
    }),
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Card Text Heading [Displayed]',
      fieldset: 'text'
    }),
    defineField({
      name: 'tagline',
      type: 'string',
      title: 'Card Text Tagline [Displayed]',
      description: '(Optional)',
      fieldset: 'text'
    }),
    defineField({
      name: 'desc',
      type: 'text',
      title: 'Card Post Content [Displayed]',
      description: '(Optional)',
      fieldset: 'text'
    }),
    ],
    preview: {
      select: {
        title: 'heading',
        image: 'imageurl'
      },
      prepare(selection) {
        const {title, image} = selection
        return {
          title: title ? title : image.title,
          subtitle: title ? "Text Card" : "Image Card",
          media: image,
        }
      }
    }
  })