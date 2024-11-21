import { groq } from 'next-sanity';

export const homeQuery = groq`
  *[_type == "home"][0] {
    _id,
    title,
    description,
   }
`;

const linkFields = groq`
  link {
    ...,
    _type == "link" => {
      "page": page->slug.current,
      "post": post->slug.current
      }
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
    title,
    _id,
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
