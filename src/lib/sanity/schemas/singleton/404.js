import { WarningOutlineIcon } from '@sanity/icons';

export default {
  title: '404',
  name: 'error-404',
  type: 'document',
  icon: WarningOutlineIcon,
  __experimental_formPreviewTitle: false,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (rule) => [
        rule.required(),
        rule.max(50).warning('Shorter titles are usually better'),
      ],
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Button Text',
      name: 'buttonText',
      type: 'string',
    },
  ],
};
