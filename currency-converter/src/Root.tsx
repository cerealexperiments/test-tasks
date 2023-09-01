import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="max-w-md mx-auto py-6">
      <nav className="flex gap-8">
        <Link className="underline" to="/currencies">
          Currencies
        </Link>
        <Link className="underline" to="/converter">
          Converter
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
