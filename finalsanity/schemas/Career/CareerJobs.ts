// textGallery.js
import {defineField, defineType} from 'sanity'

export const CareerJobs = defineType({
  name: 'careerJobs',
  type: 'document',
  title: '[Career;2] Jobs',
  fields: [
    defineField({
        name: 'jobtitle',
        type: 'string',
        title: 'Job Title',
      }),  
      defineField({
        name: 'jobsubtitle',
        type: 'string',
        title: 'Job Subtitle',
      }),    
      defineField({
        name: 'jobdesc',
        type: 'text',
        title: 'Job Description',
      }),    
      defineField({
        name: 'fulltime',
        type: 'boolean',
        title: 'Full-Time',
        description: 'Select if Full-Time job is available',
      }),     
      defineField({
        name: 'parttime',
        type: 'boolean',
        title: 'Part-Time',
        description: 'Select if Part-Time job is available',
      }),
  ],
  preview: {
  select: {
      title: 'jobtitle',
    },
  prepare(selection) {
      const {title} = selection
    return {
      title: title,
    }
  },
  },   
})