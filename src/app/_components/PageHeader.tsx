import React from "react";

interface PageHeaderProps {
  children: React.ReactNode;
}

export default function PageHeader({ children }: PageHeaderProps) {
  return (
    <div className="rounded-lg shadow-md p-6 mx-4 my-6 primary">
      <h1 className="text-4xl font-bold mb-4">{children}</h1>
    </div>
  );
}
