import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle } from 'lucide-react';

const initialCampaignsData = [
  { id: 1, name: 'Spring Phishing Test', status: 'Active', sent: 1000, opened: 750, clicked: 500 },
  { id: 2, name: 'New Employee Training', status: 'Scheduled', sent: 0, opened: 0, clicked: 0 },
  { id: 3, name: 'Q4 Security Awareness', status: 'Completed', sent: 5000, opened: 4000, clicked: 2000 },
];

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState(initialCampaignsData);
  const navigate = useNavigate();

  const handleCreateCampaign = () => {
    navigate('/campaign-editor');
  };

  const handleEditCampaign = (campaignId) => {
    navigate(`/campaign-editor/${campaignId}`);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Campaigns</h1>
        <Button onClick={handleCreateCampaign}>
          <PlusCircle className="mr-2 h-4 w-4" /> Create Campaign
        </Button>
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
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell>{campaign.name}</TableCell>
              <TableCell>{campaign.status}</TableCell>
              <TableCell>{campaign.sent}</TableCell>
              <TableCell>{campaign.opened}</TableCell>
              <TableCell>{campaign.clicked}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" onClick={() => handleEditCampaign(campaign.id)}>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Campaigns;
