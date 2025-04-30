function ScrollArea({ children }: { children: React.ReactNode }) {
  // note to self: if i have content longer than a viewport i probably want to change to snap-proximity
  return (
    <div className="h-[calc(100vh-3.5rem)] overflow-y-scroll snap-mandatory snap-y">
      {children}
    </div>
  );
}

export default ScrollArea;
