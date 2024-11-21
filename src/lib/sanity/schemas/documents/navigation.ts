import { defineField, defineType } from 'sanity';
import { MenuIcon } from '@sanity/icons';

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'navId',
      title: 'Navigation ID',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'items',
      title: 'Navigation Items',
      type: 'array',
      of: [{ type: 'link' }],
    }),
  ],
});
