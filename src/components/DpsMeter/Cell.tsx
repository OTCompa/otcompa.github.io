export function Cell({ children, type = "table" }: { children: React.ReactNode; type?: string; }) {
    return (
        type === "table" ? (<div className="group/cell p-2 flex items-center justify-center">{children}</div>) :
            (<div className="px-3 py-0.5 flex items-center justify-center">{children}</div>)
    );
}
