import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Dashboard from './pages/Dashboard';
import Campaigns from './pages/Campaigns';
import Clients from './pages/Clients';
import Templates from './pages/Templates';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Login from './pages/Login';
import ClientDetails from './pages/ClientDetails';
import CampaignEditor from './pages/CampaignEditor';
import LandingPage from './pages/LandingPage';
import Layout from './components/Layout';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/clients/:id" element={<ClientDetails />} />
            <Route path="/campaign-editor" element={<CampaignEditor />} />
            <Route path="/campaign-editor/:id" element={<CampaignEditor />} />
            <Route path="/landing/:id" element={<LandingPage />} />
          </Routes>
        </Layout>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
