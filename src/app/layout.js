import './globals.css';

export const metadata = {
  title: 'Greeting App',
  description: 'A simple Next.js frontend that fetches a greeting from a backend API.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
