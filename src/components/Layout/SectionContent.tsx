function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="container p-10 rounded-sm xl:p-20 min-h-[calc(75vh-3.5rem)] bg-[#27272a]">
      {children}
    </div>
  );
}

export default SectionContent;
