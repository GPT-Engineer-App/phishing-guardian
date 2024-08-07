import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, Edit, Trash2, Play, Pause, BarChart } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const initialCampaignsData = [
  { id: 1, name: 'Spring Phishing Test', template: 'Password Reset', startDate: '2023-06-01', startTime: '09:00', status: 'Active', sentEmails: 1000, clickRate: '15%' },
  { id: 2, name: 'New Employee Training', template: 'Onboarding', startDate: '2023-07-15', startTime: '14:00', status: 'Scheduled', sentEmails: 0, clickRate: '0%' },
  { id: 3, name: 'Q4 Security Awareness', template: 'Security Update', startDate: '2023-10-01', startTime: '10:00', status: 'Completed', sentEmails: 5000, clickRate: '22%' },
];

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState(initialCampaignsData);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newCampaign, setNewCampaign] = useState({ name: '', template: '', startDate: '', startTime: '' });
  const [templates, setTemplates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTemplates(['Password Reset', 'Onboarding', 'Security Update', 'Phishing Awareness']);
  }, []);

  const handleCreateCampaign = () => {
    setIsCreateDialogOpen(true);
  };

  const handleSaveCampaign = () => {
    const campaignToAdd = {
      ...newCampaign,
      id: campaigns.length + 1,
      status: 'Scheduled',
      sentEmails: 0,
      clickRate: '0%'
    };
    setCampaigns([...campaigns, campaignToAdd]);
    setIsCreateDialogOpen(false);
    setNewCampaign({ name: '', template: '', startDate: '', startTime: '' });
  };

  const handleEditCampaign = (campaignId) => {
    navigate(`/campaign-editor/${campaignId}`);
  };

  const handleDeleteCampaign = (campaignId) => {
    setCampaigns(campaigns.filter(campaign => campaign.id !== campaignId));
  };

  const handleToggleCampaignStatus = (campaignId) => {
    setCampaigns(campaigns.map(campaign => 
      campaign.id === campaignId 
        ? { ...campaign, status: campaign.status === 'Active' ? 'Paused' : 'Active' }
        : campaign
    ));
  };

  const handleViewReport = (campaignId) => {
    navigate(`/reports/${campaignId}`);
  };

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState(initialCampaignsData);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newCampaign, setNewCampaign] = useState({ name: '', template: '', startDate: '', startTime: '' });
  const [templates, setTemplates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch templates from the server
    // This is a mock implementation. In a real app, you'd fetch from an API
    setTemplates(['Password Reset', 'Onboarding', 'Security Update', 'Phishing Awareness']);
  }, []);

  const handleCreateCampaign = () => {
    setIsCreateDialogOpen(true);
  };

  const handleSaveCampaign = () => {
    const campaignToAdd = {
      ...newCampaign,
      id: campaigns.length + 1,
      status: 'Scheduled'
    };
    setCampaigns([...campaigns, campaignToAdd]);
    setIsCreateDialogOpen(false);
    setNewCampaign({ name: '', template: '', startDate: '', startTime: '' });
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
            <TableHead>Template</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Sent Emails</TableHead>
            <TableHead>Click Rate</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.map((campaign) => (
            <TableRow key={campaign.id}>
              <TableCell>{campaign.name}</TableCell>
              <TableCell>{campaign.template}</TableCell>
              <TableCell>{campaign.startDate}</TableCell>
              <TableCell>{campaign.startTime}</TableCell>
              <TableCell>{campaign.status}</TableCell>
              <TableCell>{campaign.sentEmails}</TableCell>
              <TableCell>{campaign.clickRate}</TableCell>
              <TableCell>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" onClick={() => handleEditCampaign(campaign.id)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Edit Campaign</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" onClick={() => handleDeleteCampaign(campaign.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete Campaign</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" onClick={() => handleToggleCampaignStatus(campaign.id)}>
                        {campaign.status === 'Active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{campaign.status === 'Active' ? 'Pause Campaign' : 'Activate Campaign'}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" onClick={() => handleViewReport(campaign.id)}>
                        <BarChart className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Report</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Campaign</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Campaign Name
              </Label>
              <Input
                id="name"
                value={newCampaign.name}
                onChange={(e) => setNewCampaign({ ...newCampaign, name: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="template" className="text-right">
                Template
              </Label>
              <Select
                value={newCampaign.template}
                onValueChange={(value) => setNewCampaign({ ...newCampaign, template: value })}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a template" />
                </SelectTrigger>
                <SelectContent>
                  {templates.map((template) => (
                    <SelectItem key={template} value={template}>
                      {template}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="startDate" className="text-right">
                Start Date
              </Label>
              <Input
                id="startDate"
                type="date"
                value={newCampaign.startDate}
                onChange={(e) => setNewCampaign({ ...newCampaign, startDate: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="startTime" className="text-right">
                Start Time
              </Label>
              <Input
                id="startTime"
                type="time"
                value={newCampaign.startTime}
                onChange={(e) => setNewCampaign({ ...newCampaign, startTime: e.target.value })}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSaveCampaign}>Create Campaign</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Campaigns;
