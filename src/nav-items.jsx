import { Home, BarChart, Users, Mail, FileText, Settings } from "lucide-react";
import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";
import Clients from "./pages/Clients";
import Templates from "./pages/Templates";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Dashboard />,
  },
  {
    title: "Campaigns",
    to: "/campaigns",
    icon: <Mail className="h-4 w-4" />,
    page: <Campaigns />,
  },
  {
    title: "Clients",
    to: "/clients",
    icon: <Users className="h-4 w-4" />,
    page: <Clients />,
  },
  {
    title: "Templates",
    to: "/templates",
    icon: <FileText className="h-4 w-4" />,
    page: <Templates />,
  },
  {
    title: "Reports",
    to: "/reports",
    icon: <BarChart className="h-4 w-4" />,
    page: <Reports />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <Settings />,
  },
];
