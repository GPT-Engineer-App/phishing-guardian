import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const initialClientsData = [
  { id: 1, name: 'Acme Corp', employees: 500, activeCampaigns: 2 },
  { id: 2, name: 'TechStart Inc', employees: 100, activeCampaigns: 1 },
  { id: 3, name: 'Global Industries', employees: 1000, activeCampaigns: 3 },
];

const Clients = () => {
  const [clients, setClients] = useState(initialClientsData);
  const [isAddClientDialogOpen, setIsAddClientDialogOpen] = useState(false);
  const [newClient, setNewClient] = useState({ name: '', employees: 0 });
  const navigate = useNavigate();

  const handleAddClient = () => {
    setClients([...clients, { ...newClient, id: clients.length + 1, activeCampaigns: 0 }]);
    setIsAddClientDialogOpen(false);
    setNewClient({ name: '', employees: 0 });
  };

  const handleEditClient = (clientId) => {
    navigate(`/clients/${clientId}`);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Clients</h1>
        <Button onClick={() => setIsAddClientDialogOpen(true)}>Add Client</Button>
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
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.employees}</TableCell>
              <TableCell>{client.activeCampaigns}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" onClick={() => handleEditClient(client.id)}>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isAddClientDialogOpen} onOpenChange={setIsAddClientDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Client</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={newClient.name}
                onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="employees" className="text-right">
                Employees
              </Label>
              <Input
                id="employees"
                type="number"
                value={newClient.employees}
                onChange={(e) => setNewClient({ ...newClient, employees: parseInt(e.target.value) })}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleAddClient}>Add Client</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Clients;
