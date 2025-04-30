function ScrollArea({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[calc(100vh-3.5rem)] overflow-y-scroll snap-mandatory snap-y">
      {children}
    </div>
  );
}

export default ScrollArea;
