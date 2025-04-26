import NavLink from "./NavLink";

export default function NavBar() {
  return (
    <nav className="primary rounded-lg flex justify-center py-2 shadow-md">
      <ul className="flex space-x-8">
        <NavLink path="/projects" text="Projects" />
        <NavLink path="/" text="Home" />
        <NavLink path="/articles" text="Articles" />
      </ul>
    </nav>
  ); 
}