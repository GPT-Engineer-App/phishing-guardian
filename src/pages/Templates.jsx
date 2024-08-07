import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const initialTemplatesData = [
  { 
    id: 1, 
    name: 'Password Reset Campaign', 
    description: 'Complete campaign for password reset scenario',
    lastModified: '2023-05-15',
    status: 'active',
    email: { subject: 'Reset Your Password', body: 'Click here to reset your password...' },
    landingPage: '<form>...</form>',
    awarenessPage: '<h1>Security Awareness</h1><p>...</p>'
  },
  { 
    id: 2, 
    name: 'New Employee Onboarding', 
    description: 'Draft template for new employee security training',
    lastModified: '2023-06-01',
    status: 'draft',
    email: { subject: 'Welcome to Our Security Program', body: 'As a new employee...' },
    landingPage: '<h1>Welcome!</h1><p>...</p>',
    awarenessPage: '<h1>Security Best Practices</h1><p>...</p>'
  },
  // ... more templates
];

const Templates = () => {
  const [templates, setTemplates] = useState(initialTemplatesData);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState(null);

  const handleCreateTemplate = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    setTemplates([...templates, { ...currentTemplate, id: templates.length + 1, lastModified: currentDate, status: 'draft' }]);
    setIsCreateDialogOpen(false);
    resetCurrentTemplate();
  };

  const handleEditTemplate = () => {
    const updatedTemplates = templates.map(template => 
      template.id === currentTemplate.id ? { ...currentTemplate, lastModified: new Date().toISOString().split('T')[0] } : template
    );
    setTemplates(updatedTemplates);
    setIsEditDialogOpen(false);
    resetCurrentTemplate();
  };

  const resetCurrentTemplate = () => {
    setCurrentTemplate({ 
      name: '', 
      description: '', 
      email: { subject: '', body: '' },
      landingPage: '',
      awarenessPage: '',
      status: 'draft'
    });
  };

  const openEditDialog = (template) => {
    setCurrentTemplate(template);
    setIsEditDialogOpen(true);
  };

  const toggleTemplateStatus = (templateId) => {
    const updatedTemplates = templates.map(template => 
      template.id === templateId ? { ...template, status: template.status === 'draft' ? 'active' : 'draft' } : template
    );
    setTemplates(updatedTemplates);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Templates</h1>
        <Button onClick={() => setIsCreateDialogOpen(true)}>Create Template</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => (
          <Card key={template.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {template.name}
                <span className={`text-sm px-2 py-1 rounded ${template.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {template.status}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm mb-2">{template.description}</p>
              <p className="text-xs text-gray-400 mb-2">Last modified: {template.lastModified}</p>
              <div className="space-y-2">
                <p className="text-sm font-semibold">Email Subject: {template.email.subject}</p>
                <p className="text-sm font-semibold">Landing Page: {template.landingPage.substring(0, 50)}...</p>
                <p className="text-sm font-semibold">Awareness Page: {template.awarenessPage.substring(0, 50)}...</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" onClick={() => openEditDialog(template)}>Edit</Button>
              <Button variant="outline" size="sm" onClick={() => toggleTemplateStatus(template.id)}>
                {template.status === 'draft' ? 'Activate' : 'Deactivate'}
              </Button>
              <Button variant="outline" size="sm">Preview</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Create New Template</DialogTitle>
          </DialogHeader>
          <TemplateForm template={currentTemplate} setTemplate={setCurrentTemplate} />
          <DialogFooter>
            <Button onClick={handleCreateTemplate}>Create Template</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Edit Template</DialogTitle>
          </DialogHeader>
          <TemplateForm template={currentTemplate} setTemplate={setCurrentTemplate} />
          <DialogFooter>
            <Button onClick={handleEditTemplate}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const TemplateForm = ({ template, setTemplate }) => {
  const [previewContent, setPreviewContent] = useState('');
  const [previewType, setPreviewType] = useState('');

  const handlePreview = (content, type) => {
    setPreviewContent(content);
    setPreviewType(type);
  };

  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="status" className="text-right">Status</Label>
        <select
          id="status"
          value={template.status}
          onChange={(e) => setTemplate({ ...template, status: e.target.value })}
          className="col-span-3 p-2 border rounded"
        >
          <option value="draft">Draft</option>
          <option value="active">Active</option>
        </select>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input
          id="name"
          value={template.name}
          onChange={(e) => setTemplate({ ...template, name: e.target.value })}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="description" className="text-right">Description</Label>
        <Input
          id="description"
          value={template.description}
          onChange={(e) => setTemplate({ ...template, description: e.target.value })}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="emailSubject" className="text-right">Email Subject</Label>
        <Input
          id="emailSubject"
          value={template.email.subject}
          onChange={(e) => setTemplate({ ...template, email: { ...template.email, subject: e.target.value } })}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="emailBody" className="text-right">Email Body</Label>
        <Textarea
          id="emailBody"
          value={template.email.body}
          onChange={(e) => setTemplate({ ...template, email: { ...template.email, body: e.target.value } })}
          className="col-span-3"
          rows={5}
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="landingPage" className="text-right">Landing Page</Label>
        <div className="col-span-3">
          <Tabs defaultValue="edit" className="w-full">
            <TabsList>
              <TabsTrigger value="edit">Edit</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="edit">
              <Textarea
                id="landingPage"
                value={template.landingPage}
                onChange={(e) => setTemplate({ ...template, landingPage: e.target.value })}
                className="w-full"
                rows={10}
              />
            </TabsContent>
            <TabsContent value="preview">
              <div className="border p-4 h-[300px] overflow-auto">
                <div dangerouslySetInnerHTML={{ __html: template.landingPage }} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="awarenessPage" className="text-right">Awareness Page</Label>
        <div className="col-span-3">
          <Tabs defaultValue="edit" className="w-full">
            <TabsList>
              <TabsTrigger value="edit">Edit</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="edit">
              <Textarea
                id="awarenessPage"
                value={template.awarenessPage}
                onChange={(e) => setTemplate({ ...template, awarenessPage: e.target.value })}
                className="w-full"
                rows={10}
              />
            </TabsContent>
            <TabsContent value="preview">
              <div className="border p-4 h-[300px] overflow-auto">
                <div dangerouslySetInnerHTML={{ __html: template.awarenessPage }} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Templates;
