import App from './_app';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <App>
          {children}
        </App>
      </body>
    </html>
  );
}