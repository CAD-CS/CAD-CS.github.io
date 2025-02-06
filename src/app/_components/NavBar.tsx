import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="rounded-lg bg-amber-700 justify-center flex">
      <ul className="flex space-x-4">
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/projects"}>Projects</Link></li>
        <li><Link href={"/articles"}>Articles</Link></li>
      </ul>
    </nav>
  ); 
}