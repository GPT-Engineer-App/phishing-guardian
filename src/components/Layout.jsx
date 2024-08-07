import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart, Users, Mail, FileText, Settings as SettingsIcon } from 'lucide-react';

const navItems = [
  { title: "Dashboard", to: "/", icon: <Home className="h-4 w-4" /> },
  { title: "Campaigns", to: "/campaigns", icon: <Mail className="h-4 w-4" /> },
  { title: "Clients", to: "/clients", icon: <Users className="h-4 w-4" /> },
  { title: "Templates", to: "/templates", icon: <FileText className="h-4 w-4" /> },
  { title: "Reports", to: "/reports", icon: <BarChart className="h-4 w-4" /> },
  { title: "Settings", to: "/settings", icon: <SettingsIcon className="h-4 w-4" /> },
];

const Sidebar = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return null;
  }

  return (
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
};

const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className={`flex ${isLoginPage ? '' : 'h-screen'}`}>
      <Sidebar />
      <main className={`flex-1 ${isLoginPage ? '' : 'p-4 overflow-auto'}`}>{children}</main>
    </div>
  );
};

export default Layout;
