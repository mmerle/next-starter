import '~/styles/reset.css';

export default async function CMSLayout({ children }) {
  return (
    <html lang="en-CA">
      <body>
        <main className="cms">{children}</main>
      </body>
    </html>
  );
}
