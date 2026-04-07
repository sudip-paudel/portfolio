import { defineField, defineType } from 'sanity'

// Singleton document — only one entry ever exists
export const siteConfig = defineType({
  name: 'siteConfig',
  title: 'Site Config',
  type: 'document',
  fields: [
    defineField({
      name: 'profileImage',
      title: 'Profile Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'cv',
      title: 'CV / Resume (PDF)',
      type: 'file',
      options: { accept: '.pdf' },
    }),
    defineField({
      name: 'intro',
      title: 'Intro Text',
      description: 'The headline text shown in the hero section. Use bold/italic/underline toolbar buttons to style text.',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Underline', value: 'underline' },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'aboutMe',
      title: 'About Me',
      type: 'text',
      description: 'The paragraph shown in the About Me section',
    }),
  ],
})