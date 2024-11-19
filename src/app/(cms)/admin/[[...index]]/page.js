import { NextStudio } from 'next-sanity/studio';
import config from '~/lib/sanity/config';

export const dynamic = 'force-static';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
