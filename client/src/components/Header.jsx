import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const links = [
  { name: "Movies", path: "/movies" },
  { name: "Series", path: "/series" },
  { name: "Anime", path: "/anime" },
  { name: "Trending", path: "/trending" },
];

export default function Header() {
  return (
    <header className="py-3 border-b border-neutral-700">
      <div className="w-[1100px] mx-auto flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <Link href="/">
            <h1 className="uppercase font-medium text-xl text-sky-500">
              Inside<span className="text-white">In</span>
            </h1>
          </Link>
          <form>
            <div className="flex gap-2 items-center py-1 px-2 bg-neutral-700 border border-neutral-600 rounded">
              <input
                className="bg-transparent w-full focus:outline-none"
                type="text"
                name="search"
                placeholder="Search.."
                autoComplete="off"
              />
              <CiSearch />
            </div>
          </form>
        </div>
        <nav>
          <ul className="flex gap-5">
            {links.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>
                  <p className="text-neutral-300 hover:text-white">
                    {link.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
