import React from 'react';

interface PageHeaderProps {
  text: string;
  content: string;
}

export default function PageHeader({ text, content }: PageHeaderProps) {
  return (
    <div className="bg-primary text-text-color rounded-lg shadow-md p-6 mx-4 my-6 border border-secondary">
      <h1 className="text-4xl font-bold mb-4">{text}</h1>
      <p className="text-lg leading-relaxed">{content}</p>
    </div>
  );
}