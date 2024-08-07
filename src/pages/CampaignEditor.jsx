import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CampaignEditor = () => {
  const { id } = useParams();
  const [campaignName, setCampaignName] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const handleSave = () => {
    // Here you would save the campaign data
    console.log('Saving campaign:', { campaignName, emailSubject, emailBody });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        {id ? 'Edit Campaign' : 'Create New Campaign'}
      </h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Campaign Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="campaignName">Campaign Name</Label>
              <Input
                id="campaignName"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                placeholder="Enter campaign name"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Email Editor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="emailSubject">Email Subject</Label>
              <Input
                id="emailSubject"
                value={emailSubject}
                onChange={(e) => setEmailSubject(e.target.value)}
                placeholder="Enter email subject"
              />
            </div>
            <div>
              <Label htmlFor="emailBody">Email Body (HTML)</Label>
              <Textarea
                id="emailBody"
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                placeholder="Enter email body in HTML format"
                rows={10}
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <Button onClick={handleSave}>Save Campaign</Button>
    </div>
  );
};

export default CampaignEditor;
