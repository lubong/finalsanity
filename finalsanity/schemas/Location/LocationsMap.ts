import {defineField, defineType} from 'sanity'

export const LocationsMap = defineType({
  name: 'locationsMap',
  type: 'document',
  title: '[Locations;3] Map',
  fields: [
    defineField({
        name: 'mapTitle',
        type: 'string',
        title: 'Name your Map',
        description: '(Optional)'
    }),
    defineField({
        name: 'mapURL',
        type: 'string',
        title: 'Add the map URL',
        validation: Rule => Rule.required()    
    }),
  ],
})