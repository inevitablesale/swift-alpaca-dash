import { NavLink, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Kanban } from "lucide-react";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="hidden w-64 flex-col border-r bg-gray-50/95 p-4 sm:flex">
        <div className="mb-8 flex items-center gap-2">
          <span className="font-bold text-xl">Juicebox</span>
          <span className="rounded-md bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
            Admin
          </span>
        </div>
        <nav className="flex flex-col gap-1">
          <AdminNavLink to="/admin/project-plan">
            <Kanban className="h-4 w-4" />
            Project Plan
          </AdminNavLink>
        </nav>
      </aside>
      <main className="flex-1 flex flex-col overflow-hidden bg-white">
        <Outlet />
      </main>
    </div>
  );
};

const AdminNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:bg-gray-200 hover:text-primary",
        isActive && "bg-gray-200 text-primary"
      )
    }
  >
    {children}
  </NavLink>
);

export default AdminLayout;