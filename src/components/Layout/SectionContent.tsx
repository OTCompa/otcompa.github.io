function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl container p-6 min-h-[calc(100vh-3.5rem)] m-auto">
      {children}
    </div>
  );
}

export default SectionContent;
