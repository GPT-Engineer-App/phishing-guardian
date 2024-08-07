import React from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const clientsData = [
  { id: 1, name: 'Acme Corp', employees: 500, activeCampaigns: 2 },
  { id: 2, name: 'TechStart Inc', employees: 100, activeCampaigns: 1 },
  { id: 3, name: 'Global Industries', employees: 1000, activeCampaigns: 3 },
];

const Clients = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Clients</h1>
        <Button>Add Client</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Employees</TableHead>
            <TableHead>Active Campaigns</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clientsData.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.employees}</TableCell>
              <TableCell>{client.activeCampaigns}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">Manage</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Clients;
