import {defineField, defineType} from 'sanity'

export const LocationsMap = defineType({
  name: 'locationsMap',
  type: 'document',
  title: '[Locations;3] Map',
  fields: [
    defineField({
        name: 'mapURL',
        type: 'ImageGallery',
        title: 'Add the map URL',
        validation: Rule => Rule.required()    
    }),
  ],
})