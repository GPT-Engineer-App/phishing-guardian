import { Home, BarChart, Users, Mail, FileText, Settings as SettingsIcon, LogIn } from "lucide-react";
import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";
import CampaignEditor from "./pages/CampaignEditor";
import Clients from "./pages/Clients";
import ClientDetails from "./pages/ClientDetails";
import Templates from "./pages/Templates";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

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
    icon: <SettingsIcon className="h-4 w-4" />,
    page: <Settings />,
  },
  {
    title: "Login",
    to: "/login",
    icon: <LogIn className="h-4 w-4" />,
    page: <Login />,
  },
];

export const hiddenRoutes = [
  {
    to: "/clients/:id",
    page: <ClientDetails />,
  },
  {
    to: "/campaign-editor",
    page: <CampaignEditor />,
  },
  {
    to: "/campaign-editor/:id",
    page: <CampaignEditor />,
  },
];
