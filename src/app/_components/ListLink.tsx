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
      <Link href={"/" + basePath + "/" + targetFolder}>{text}</Link>
    </li>
  );
}