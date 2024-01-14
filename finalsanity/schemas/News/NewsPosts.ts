// ./schemas/Home.ts

import {defineField, defineType} from 'sanity'

export const NewsPosts = defineType({
  name: 'newsPosts',
  type: 'document',
  title: '[News] Articles/Posts',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Name this Article/Post',
      description: '[Hidden] This is for administrative convenience and will be hidden on the site',
  }),
    defineField({
        name: 'TextImageBlock',
        type: 'TextImageBlock',
        title: 'Create the Article/Post',
        description: 'Content here will appear on the site'
    }),
  ],
})