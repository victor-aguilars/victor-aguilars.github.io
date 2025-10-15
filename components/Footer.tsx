export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text text-white py-8 px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {currentYear} Víctor Aguilar. All rights reserved.
          </p>

          <p className="text-sm text-white/70">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
