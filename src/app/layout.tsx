import './globals.css'; // Your global styles

export const metadata = {
  title: 'SEO Content Analyzer',
  description: 'Analyze and optimize your content for better SEO performance.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* You can add custom meta tags or scripts here */}
      </head>
      <body className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white py-4">
          <h1 className="text-center text-3xl">SEO Content Analyzer</h1>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-200 text-center py-4">
          <p>© 2024 Your Company. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
