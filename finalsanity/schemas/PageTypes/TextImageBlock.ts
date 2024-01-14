import {defineField, defineType} from 'sanity'

export const TextImageBlock = defineType({
  name: 'TextImageBlock',
  type: 'object',
  title: 'Paragraph Text with Image',
  fieldsets: [
    {name: 'text', title: 'Paragraph Text'},
    {name: 'url', title: 'Add a URL', description: 'This URL may be embedded in a button or image'},
    ],
  fields: [
    defineField({
        name: 'heading',
        type: 'string',
        fieldset: 'text'
    }),
      defineField({
        name: 'tagline',
        type: 'string',
        fieldset: 'text'
    }),
      defineField({
        name: 'body',
        type: 'text',
        fieldset: 'text'
    }),
        defineField({
        name: 'linkName',
        type: 'string',
        title: 'Link Name',
        fieldset: 'url'
    }),
        defineField({
        name: 'linkUrl',
        type: 'string',
        title: 'Link Url',
        fieldset: 'url'
    }),
        defineField({
        name: 'imageurl',
        type: 'image',
        title: 'Attach an Image to your Text Block',
        options: {hotspot: true},
        fields: [
            {
            name: 'title',
            type: 'string',
            },
            {
            name: 'caption',
            type: 'string',
            },
            {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            description: 'This text will only appear if the image fails to load.',
            },
            {
            name: 'imagePos',
            type: 'string',
            title: 'Position of Image',
            options: {
              list: [
                  {title: 'Left', value: 'left'},
                  {title: 'Right', value: 'right'}
                ],
                layout: 'radio'
              }
            }
        ],

    }),
  ],
  preview: {
    select: {
      image: 'imageurl'
    },
    prepare(selection) {
      const {image} = selection
      return {
        media: image,
      }
    }
  }
})
