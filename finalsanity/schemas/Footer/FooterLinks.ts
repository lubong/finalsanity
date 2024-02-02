// textGallery.js
import {defineField, defineType} from 'sanity'

export const FooterLinks = defineType({
  name: 'footerLinks',
  type: 'document',
  title: '[Footer; 1] Footer Links',
  fields: [
    defineField({
        name: 'header',
        type: 'string',
        title: 'Section Header',
        validation: Rule => Rule.required()    
      }),  
      defineField({
        name: 'lineItems',
        type: 'array',
        title: 'Add Line Items',
        description: 'Internal Links for reference: /About, /Locations, /Promotions, /News, /Career, /JoinUs',
        of: [
          {type: "object",
          name: "inline",
          fields: [
            { type: "string", name: "title" },
            { type: "string", name: "lineURL", description: "Internal links: i.e. /About, External links: full link address"}
          ]}
        ]
      }),    
  ]
})