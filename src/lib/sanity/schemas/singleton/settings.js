import { CogIcon } from '@sanity/icons';

export default {
  title: 'Site Settings',
  name: 'settings',
  type: 'document',
  icon: CogIcon,
  __experimental_formPreviewTitle: false,
  fields: [
    {
      title: 'Site Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Site Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Availability',
      name: 'availability',
      type: 'object',
      fields: [
        {
          title: 'Status',
          name: 'status',
          type: 'string',
          options: {
            list: [
              { title: 'Available', value: 'available' },
              { title: 'Unavailable', value: 'unavailable' },
            ],
            layout: 'radio',
          },
        },
        {
          title: 'Available Label',
          name: 'availableLabel',
          type: 'string',
          hidden: ({ parent }) => parent?.status !== 'available',
          validation: (Rule) => Rule.max(100),
        },
        {
          title: 'Unavailable Label',
          name: 'unavailableLabel',
          type: 'string',
          hidden: ({ parent }) => parent?.status !== 'unavailable',
        },
      ],
    },
  ],
};
