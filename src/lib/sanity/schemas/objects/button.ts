import { defineField, defineType } from 'sanity';
import { LinkIcon } from '@sanity/icons';

export default defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Button Label',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Button Link',
      type: 'link',
    }),
  ],
});
