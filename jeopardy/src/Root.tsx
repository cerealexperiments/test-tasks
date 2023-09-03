import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="max-w-md mx-auto py-6">
      <nav className="flex gap-8">
        <Link className="underline" to="/game">
          Game
        </Link>
        <Link className="underline" to="/stats">
          Stats
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
