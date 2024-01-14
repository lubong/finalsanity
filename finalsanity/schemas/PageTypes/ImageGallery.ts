// imageGallery.js
import {defineField, defineType} from 'sanity'

export const ImageGallery = defineType({
  name: 'ImageGallery',
  type: 'object',
  title: 'Create an Image Gallery',
  fieldsets: [{name: 'text', title: 'Gallery Text'}],
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
    {
      name: 'ImageGallery',
      type: 'array',
      title: 'Image Gallery',
      of: [
        defineField({
          name: 'imageurl',
          type: 'image',
          title: 'Image',
          options: {hotspot: true},
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              description: '(Optional)',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: '(Optional)',
            },
            {
              name: 'desc',
              type: 'string',
              title: 'Description',
              description: '(Optional)',
            },

            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'This text will appear if the image fails to load.',
            },
            {
              name: 'linkURL',
              type: 'string',
              title: 'Image Link',
              description: '(Optional)',
            },
            
          ],
        }),
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Images",
        subtitle: "Image Gallery",
      }
    },
  },

})