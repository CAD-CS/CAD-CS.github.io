interface ContentHeaderProps {
  children: React.ReactNode;
}

export default function ContentHeader({ children }: ContentHeaderProps) {
  return (
    <h1 className="text-3xl font-bold underline mb-6">
      {children}
    </h1>
  );
}