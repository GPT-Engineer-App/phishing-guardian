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
const API_URL = 'http://localhost:5000/api';

const Campaigns = () => {
  const [campaigns, setCampaignsState] = useState([]);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newCampaign, setNewCampaign] = useState({ name: '', template: '', startDate: '', startTime: '' });
  const [templates, setTemplates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch(`${API_URL}/campaigns`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCampaignsState(data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      }
    };

    fetchCampaigns();
    setTemplates(['Password Reset', 'Onboarding', 'Security Update', 'Phishing Awareness']);
  }, []);

  const handleCreateCampaign = () => {
    setIsCreateDialogOpen(true);
  };

  const handleSaveCampaign = async () => {
    try {
      const response = await fetch(`${API_URL}/campaigns`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCampaign),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCampaignsState(prevCampaigns => [...prevCampaigns, data]);
      setIsCreateDialogOpen(false);
      setNewCampaign({ name: '', template: '', startDate: '', startTime: '' });
    } catch (error) {
      console.error('Error creating campaign:', error);
      // You might want to show an error message to the user here
    }
  };

  const handleEditCampaign = (campaignId) => {
    navigate(`/campaign-editor/${campaignId}`);
  };

  const handleDeleteCampaign = async (campaignId) => {
    try {
      const response = await fetch(`${API_URL}/campaigns/${campaignId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const updatedCampaigns = campaigns.filter(campaign => campaign._id !== campaignId);
      setCampaignsState(updatedCampaigns);
    } catch (error) {
      console.error('Error deleting campaign:', error);
    }
  };

  const handleToggleCampaignStatus = async (campaignId) => {
    try {
      const campaign = campaigns.find(c => c._id === campaignId);
      const newStatus = campaign.status === 'Active' ? 'Paused' : 'Active';
      const response = await fetch(`${API_URL}/campaigns/${campaignId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const updatedCampaigns = campaigns.map(c => 
        c._id === campaignId ? { ...c, status: newStatus } : c
      );
      setCampaignsState(updatedCampaigns);
    } catch (error) {
      console.error('Error toggling campaign status:', error);
    }
  };

  const handleViewReport = (campaignId) => {
    navigate(`/reports/${campaignId}`);
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
              <TableCell className="font-medium">{campaign.name}</TableCell>
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
