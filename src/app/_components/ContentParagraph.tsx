interface ContentParagraphProps {
  children: React.ReactNode;
}

export default function ContentParagraph({ children }: ContentParagraphProps) {
  return <p className="text-lg leading-relaxed mb-4">{children}</p>;
}
