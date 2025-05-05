import Link from "next/link";

interface ListLinkProps {
  basePath: string;
  targetFolder: string;
  primaryText: string;
  secondaryText: string;
}

export default function ListLink({
  basePath,
  targetFolder,
  primaryText,
  secondaryText
}: ListLinkProps) {
  return (
    <li>
      <Link
        href={"/" + basePath + "/" + targetFolder}
        className="hover:text-red-600 hover:italic"
      >
        <span className="font-bold">{primaryText}</span> {" | " + secondaryText}
      </Link>
    </li>
  );
}
