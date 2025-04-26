interface ContentBoxProps {
  children: React.ReactNode;
}

export default function ContentBox({ children }: ContentBoxProps) {
  return (
    <div className="flex flex-col min-h-screen mb-4 mx-6 mt-6">
      <div className="bg-primary text-text-color flex-grow px-8 py-6 rounded-lg shadow-md border border-secondary">
        {children}
      </div>
    </div>
  );
}