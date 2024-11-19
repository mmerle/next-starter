import { HomeIcon } from '@sanity/icons';

export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  icon: HomeIcon,
  __experimental_formPreviewTitle: false,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule) => [
        rule.required().min(10).error('A title of at least 10 characters is required'),
        rule.max(50).warning('Shorter titles are usually better'),
      ],
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 2,
    },
    {
      title: 'About',
      name: 'about',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Image',
      name: 'image',
      type: 'a11y-image',
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
    },
  ],
};
