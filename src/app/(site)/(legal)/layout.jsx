export default function LegalLayout({ children }) {
  return (
    <div className="bg-canvas px-4 pt-36 pb-16 sm:px-8 lg:pt-48 lg:pb-section">
      <article className="mx-auto flex max-w-3xl flex-col gap-10">{children}</article>
    </div>
  );
}
