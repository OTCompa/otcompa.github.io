function ScrollSection({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <section
      id={id}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] snap-start"
    >
      {children}
    </section>
  );
}

export default ScrollSection;
