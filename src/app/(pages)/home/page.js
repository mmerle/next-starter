import s from './home.module.css';
import { sanityFetch } from '~/lib/sanity/live';
import { homeQuery } from '~/lib/sanity/queries';

export default async function Home() {
  const { data: home } = await sanityFetch({ query: homeQuery });

  return (
    <div className={s.page}>
      <h1 className="sr-only">Home</h1>

      <div>{home.title}</div>
      <div>{home.description}</div>
    </div>
  );
}
