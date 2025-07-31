
import '../styles/globals.css';
import '../styles/theme.css';
import '../styles/navbar.css';

import Navbar from '../components/Navbar';
import ThemeProvider from '../components/ThemeProvider';

export const metadata = {
  title: 'NextJS Assignment',
  description: 'Assignment for Full Stack Development with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
