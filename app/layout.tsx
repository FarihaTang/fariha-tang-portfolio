import type { Metadata } from 'next';
import './globals.css';
import '@farihatang/react-ui/styles';

export const metadata: Metadata = {
  title: 'FarihaTang — Frontend Engineer',
  description:
    'Frontend Engineer with 5 years of experience in React & TypeScript, specialising in fintech.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
