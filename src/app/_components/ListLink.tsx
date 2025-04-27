import Link from "next/link";

interface ListLinkProps {
  basePath: string;
  targetFolder: string;
  text: string;
}

export default function ListLink({
  basePath,
  targetFolder,
  text
}: ListLinkProps) {
  return (
    <li>
      <Link href={"/" + basePath + "/" + targetFolder} className="hover:text-purple-700 hover:italic">{text}</Link>
    </li>
  );
}