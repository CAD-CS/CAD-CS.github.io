interface ContentBoxProps {
  children: React.ReactNode;
}

export default function ContentBox({ children }: ContentBoxProps) {
  return (
    <div className="flex flex-col min-h-screen mb-4 mx-6 mt-6">
      <div className="flex-grow px-8 py-6 rounded-lg shadow-md primary">
        {children}
      </div>
    </div>
  );
}
