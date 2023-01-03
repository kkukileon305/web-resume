import Footer from '../components/Footer';
import Providers from '../components/Providers';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body className='min-h-screen bg-white dark:bg-gray-700'>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
