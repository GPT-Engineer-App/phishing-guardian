import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ClientDetails = () => {
  const { id } = useParams();
  const [client, setClient] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch client details, campaigns, and users
    // This is a mock implementation. In a real app, you'd fetch from an API
    setClient({
      id: parseInt(id),
      name: 'Acme Corp',
      employees: 500,
      activeCampaigns: 2,
    });
    setCampaigns([
      { id: 1, name: 'Spring Campaign', status: 'Active' },
      { id: 2, name: 'Summer Campaign', status: 'Planned' },
    ]);
    setUsers([
      { id: 1, name: 'John Doe', email: 'john@acme.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@acme.com' },
    ]);
  }, [id]);

  const handleSaveChanges = () => {
    // Save changes to the client
    console.log('Saving changes:', client);
  };

  if (!client) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Client Details</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Edit Client Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={client.name}
                onChange={(e) => setClient({ ...client, name: e.target.value })}
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
                value={client.employees}
                onChange={(e) => setClient({ ...client, employees: parseInt(e.target.value) })}
                className="col-span-3"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <Button onClick={handleSaveChanges} className="mb-6">Save Changes</Button>

      <h2 className="text-2xl font-bold mb-4">Campaigns</h2>
      <Table className="mb-6">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell>{campaign.name}</TableCell>
              <TableCell>{campaign.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ClientDetails;
