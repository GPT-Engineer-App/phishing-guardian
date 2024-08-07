import React from 'react';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const campaignsData = [
  { id: 1, name: 'Spring Phishing Test', status: 'Active', sent: 1000, opened: 750, clicked: 500 },
  { id: 2, name: 'New Employee Training', status: 'Scheduled', sent: 0, opened: 0, clicked: 0 },
  { id: 3, name: 'Q4 Security Awareness', status: 'Completed', sent: 5000, opened: 4000, clicked: 2000 },
];

const Campaigns = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Campaigns</h1>
        <Button>Create Campaign</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Sent</TableHead>
            <TableHead>Opened</TableHead>
            <TableHead>Clicked</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaignsData.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell>{campaign.name}</TableCell>
              <TableCell>{campaign.status}</TableCell>
              <TableCell>{campaign.sent}</TableCell>
              <TableCell>{campaign.opened}</TableCell>
              <TableCell>{campaign.clicked}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Campaigns;
