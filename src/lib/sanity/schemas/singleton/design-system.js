import { ColorWheelIcon, TextIcon } from '@sanity/icons';

export default {
  title: 'Design system',
  name: 'design-system',
  type: 'document',
  icon: ColorWheelIcon,
  __experimental_formPreviewTitle: false,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Colors',
      name: 'colors',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Label',
              name: 'label',
              type: 'string',
              validation: (Rule) => [
                Rule.required(),
                Rule.max(20).warning('Try to keep this name short'),
              ],
            },
            {
              title: 'Variable name',
              name: 'variable',
              type: 'string',
              validation: (Rule) => [
                Rule.required(),
                Rule.max(20).warning('Try to keep this name short'),
              ],
            },
            {
              title: 'Color',
              name: 'color',
              type: 'color',
              options: {
                disableAlpha: true,
                documentInternationalization: {
                  exclude: true,
                },
              },
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Invert label',
              name: 'inverted',
              type: 'boolean',
              initialValue: false,
              options: {
                documentInternationalization: {
                  exclude: true,
                },
              },
            },
          ],
          preview: {
            select: {
              title: 'label',
              color: 'color',
            },
            prepare({ title, color }) {
              return {
                title: title,
                subtitle: color?.hex,
                media: () => (
                  <div
                    style={{
                      backgroundColor: color?.hex ?? '#000',
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      inset: '0',
                    }}
                  />
                ),
              };
            },
          },
        },
      ],
    },
    {
      title: 'Fonts',
      name: 'fonts',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: TextIcon,
          fields: [
            {
              title: 'Name',
              name: 'name',
              type: 'string',
            },
            {
              title: 'Role',
              name: 'role',
              type: 'string',
            },
            {
              title: 'Specimen',
              name: 'specimen',
              type: 'array',
              of: [{ type: 'block' }],
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'role',
            },
          },
        },
      ],
    },
  ],
};
