import { groq } from 'next-sanity';

const linkFields = groq`
  link {
    ...,
    _type == "link" => {
      "page": page->slug.current,
      "post": post->slug.current
      }
    }
`;

const seoFields = groq`
  seo {
    metaTitle,
    metaDescription,
    shareGraphic {
      asset->
    }
  }
`;

export const homeQuery = groq`
  *[_type == "home"][0] {
    _id,
    title,
    description,
   }
`;

export const settingsQuery = groq`
  *[_type == "settings"][0] {
    title,
    studioUi {
      externalLinks[] {
        ...,
        label,
        ${linkFields},
      },
    }
  }
`;

export const navigationQuery = groq`
  *[_type == "navigation" && navId.current == $navId][0] {
    _id,
    title,
    items[] {
      ...,
      _key,
      label,
      href,
      openInNewTab,
      "page": page->slug.current,
    }
  }
`;

export const getPageQuery = groq`
  *[_type == 'page' && slug.current == $slug][0] {
    _id,
    title,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[] {
      ...,
    },
    ${seoFields},
  }
`;

export const pagesSlugs = `
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`;
