import {defineField, defineType} from 'sanity'

export const AboutTestimonials = defineType({
  name: 'aboutTestimonials',
  type: 'document',
  title: '[About;2] Testimonials',
  fieldsets: [{name: 'text', title: 'Gallery Text'}],
  fields: [  
      defineField({
          name: 'heading',
          type: 'string',
          fieldset: 'text',
          initialValue: 'WHAT OUR CUSTOMERS LOVE',
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
      name: 'testimonials',
      type: 'array',
      of: [
        defineField({
          name: 'profilePicture',
          type: 'image',
          title: 'Profile Picture',
          options: {hotspot: true},
          fields: [
            {
              name: 'name',
              type: 'string',
            },
            {
              name: 'caption',
              type: 'string',
              description: '(Optional)',
            },
            {
                name: 'testimonialBody',
                type: 'text',
                title: 'Testimonial',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'This text will appear if the profile picture fails to load.',
            },            
          ],
        }),
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
})