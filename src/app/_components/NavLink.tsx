import Link from "next/link";

interface NavLinkProps {
  path: string;
  text: string;
}

export default function NavLink({ path, text }: NavLinkProps) {
  return (
    <li className="accent rounded-lg px-4 py-2 hover:bg-yellow-600">
      <Link className="font-medium" href={path}>
        {text}
      </Link>
    </li>
  );
}
