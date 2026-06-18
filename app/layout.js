import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Creative Prompt Generator',
  description: 'Generate unique writing and art prompts based on customizable parameters.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <Link href="/" className="header-logo">
            Creative Prompter
          </Link>
          <nav className="nav-links">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/generate" className="nav-link">
              Generate Prompt
            </Link>
            <Link href="/saved" className="nav-link">
              Saved Prompts
            </Link>
          </nav>
        </header>
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
