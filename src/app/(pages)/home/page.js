import s from './home.module.css';

export default function Home() {
  return (
    <div className={s.page}>
      <h1 className="sr-only">Home</h1>

      <section className={s.inner}>Next Starter</section>
    </div>
  );
}
