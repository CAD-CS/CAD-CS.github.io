interface ListProps {
  children: React.ReactNode;
}

export default function List({ children }: ListProps) {
  return (
  <ul className="list-disc list-inside mb-4 text-lg leading-relaxed">
    {children}
  </ul>
  );
}