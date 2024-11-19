import { groq } from 'next-sanity';

export const settingsQuery = groq`
  *[_type == "settings"][0] {
    title,
    "availability": {
      "status": availability.status,
      "label": select(
        availability.status == "available" => availability.availableLabel,
        availability.status == "unavailable" => availability.unavailableLabel,
      )
    },
    openHours {
      start,
      end,
    },
   }
`;

export const homeQuery = groq`
  *[_type == "home" && language == $locale][0] {
    _id,
    title,
    about,
    description,
  }
`;
