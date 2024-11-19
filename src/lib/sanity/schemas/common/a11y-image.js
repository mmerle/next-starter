export default {
  title: 'Image',
  name: 'a11y-image',
  type: 'image',
  options: { hotspot: true },
  fields: [
    {
      title: 'Alternative text',
      name: 'alt',
      type: 'string',
      description: 'Short description of image used for screen readers and search engines.',
      validation: (Rule) => Rule.required().error('Alt text is required'),
    },
  ],
  preview: {
    select: {
      title: 'alt',
      originalFilename: 'asset.originalFilename',
      media: 'asset',
    },
    prepare(selection) {
      const { title, originalFilename, media } = selection;
      return {
        title: title || originalFilename,
        media: media,
      };
    },
  },
};
