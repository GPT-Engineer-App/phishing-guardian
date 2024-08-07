import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generateUniqueLink } from '../utils/campaignUtils';
import { toPng } from 'html-to-image';
import { toast } from 'sonner';

const CampaignEditor = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [isGeneratingPreview, setIsGeneratingPreview] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [campaignName, setCampaignName] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [landingPageLink, setLandingPageLink] = useState('');

  useEffect(() => {
    if (id) {
      // Fetch campaign data if editing an existing campaign
      // This is a mock implementation. In a real app, you'd fetch from an API
      setCampaignName(`Campaign ${id}`);
      setEmailSubject(`Subject for Campaign ${id}`);
      setEmailBody(`<p>This is the body for Campaign ${id}</p>`);
      setLandingPageLink(generateUniqueLink(id));
    } else {
      // Generate a new link for a new campaign
      setLandingPageLink(generateUniqueLink());
    }
  }, [id]);

  const handleSave = () => {
    // Here you would save the campaign data
    console.log('Saving campaign:', { id, campaignName, emailSubject, emailBody, landingPageLink });
    // Navigate back to the campaigns list after saving
    navigate('/campaigns');
  };

  const generatePreview = () => {
    setIsGeneratingPreview(true);
    const node = document.getElementById('email-preview');
    if (node) {
      toPng(node, { cacheBust: true })
        .then((dataUrl) => {
          setPreviewImage(dataUrl);
          toast.success('Preview generated successfully');
        })
        .catch((error) => {
          console.error('Error generating preview:', error);
          toast.error('Failed to generate preview. Please try again.');
        })
        .finally(() => {
          setIsGeneratingPreview(false);
        });
    } else {
      toast.error('Preview element not found');
      setIsGeneratingPreview(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        {id ? `Edit Campaign ${id}` : 'Create New Campaign'}
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
            <div>
              <Label htmlFor="landingPageLink">Landing Page Link</Label>
              <Input
                id="landingPageLink"
                value={landingPageLink}
                readOnly
                className="bg-gray-100"
              />
              <p className="text-sm text-gray-500 mt-2">
                Include this link in your email body to direct recipients to the landing page.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Email Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div id="email-preview" className="border p-4 mb-4">
            <h2>{emailSubject}</h2>
            <div dangerouslySetInnerHTML={{ __html: emailBody }} />
          </div>
          <Button onClick={generatePreview} disabled={isGeneratingPreview}>
            {isGeneratingPreview ? 'Generating...' : 'Generate Preview Image'}
          </Button>
          {previewImage && (
            <div className="mt-4">
              <img src={previewImage} alt="Email Preview" className="max-w-full h-auto" />
            </div>
          )}
        </CardContent>
      </Card>
      <Button onClick={handleSave}>Save Campaign</Button>
    </div>
  );
};

export default CampaignEditor;
