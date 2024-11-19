import AppData from '../../package.json';

export const APP_NAME = AppData.name;
export const APP_DEFAULT_TITLE = 'Next Starter';
export const APP_TITLE_TEMPLATE = '%s – Next Starter';
export const APP_DESCRIPTION = AppData.description;
export const APP_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getMetadata({ data }) {
  const seo = data?.seo;
  // todo: look into falling back to file based og image
  const images =
    seo?.shareGraphic && seo?.shareGraphic?.asset
      ? [
          {
            url: seo?.shareGraphic?.asset.url,
            width: seo?.shareGraphic?.asset.metadata.dimensions.width,
            height: seo?.shareGraphic?.asset.metadata.dimensions.height,
          },
        ]
      : []; // default image here if needed

  return {
    title: seo?.metaTitle || data.title,
    description: seo?.metaDescription || APP_DESCRIPTION,
    openGraph: {
      title: seo?.metaTitle || data.title,
      description: seo?.metaDescription || APP_DESCRIPTION,
      url: APP_BASE_URL,
      siteName: APP_NAME,
      images,
      locale: 'en',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.metaTitle || data.title,
      description: seo?.metaDescription || APP_DESCRIPTION,
      images: images.map((image) => image.url),
    },
  };
}
