import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Local Storage Keys
const CAMPAIGNS_KEY = 'phishingSim_campaigns';
const TEMPLATES_KEY = 'phishingSim_templates';
const CLIENTS_KEY = 'phishingSim_clients';

// Helper function to get data from localStorage
export function getFromStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

// Helper function to set data in localStorage
export function setToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Specific functions for each data type
export function getCampaigns() {
  return getFromStorage(CAMPAIGNS_KEY) || [];
}

export function setCampaigns(campaigns) {
  setToStorage(CAMPAIGNS_KEY, campaigns);
}

export function getTemplates() {
  return getFromStorage(TEMPLATES_KEY) || [];
}

export function setTemplates(templates) {
  setToStorage(TEMPLATES_KEY, templates);
}

export function getClients() {
  return getFromStorage(CLIENTS_KEY) || [];
}

export function setClients(clients) {
  setToStorage(CLIENTS_KEY, clients);
}
