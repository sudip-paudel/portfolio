import { defineField, defineType } from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'React icon name, e.g. FaReact, FaAngular',
      options: {
        list: [
          { title: 'React', value: 'FaReact' },
          { title: 'Angular', value: 'FaAngular' },
          { title: 'Vue', value: 'FaVuejs' },
          { title: 'Node.js', value: 'FaNodeJs' },
          { title: 'Python', value: 'FaPython' },
        ],
      },
    }),
    defineField({
      name: 'date',
      title: 'Date Range',
      type: 'string',
      description: 'e.g. Mar 2025 - Present',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower number = shown first (most recent)',
    }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})