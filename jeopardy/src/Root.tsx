import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="max-w-screen-lg min-h-screen justify-between flex flex-col mx-auto py-6">
      <nav className="flex gap-8 self-center">
        <Link className="underline" to="/game">
          Game
        </Link>
        <Link className="underline" to="/stats">
          Stats
        </Link>
      </nav>
      <Outlet />
      <footer className="text-center pt-4">Some footer</footer>
    </div>
  );
}
