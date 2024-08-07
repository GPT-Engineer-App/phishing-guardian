import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { navItems } from "./nav-items";

const queryClient = new QueryClient();

const Sidebar = () => (
  <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
    <h1 className="text-2xl font-bold mb-6">Phishing Sim</h1>
    <nav>
      <ul>
        {navItems.map(({ title, to, icon }) => (
          <li key={to} className="mb-2">
            <Link to={to} className="flex items-center p-2 rounded hover:bg-gray-700">
              {icon}
              <span className="ml-2">{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

const Layout = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <main className="flex-1 p-4">{children}</main>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Layout>
          <Routes>
            {navItems.map(({ to, page }) => (
              <Route key={to} path={to} element={page} />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
