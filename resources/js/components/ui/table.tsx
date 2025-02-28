interface TableProps {
    children: React.ReactNode;
}

export default function Table({ children }: TableProps) {
    return (
        <div className="w-full overflow-x-auto bg-transparent p-4 rounded-xl container-x">
            <div className="min-w-max">
                <table className="w-full border-collapse text-white text-md">
                    {children}
                </table>
            </div>
        </div>
    );
}
