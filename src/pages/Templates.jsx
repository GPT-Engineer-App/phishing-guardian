import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const initialTemplatesData = [
  { id: 1, name: 'Password Reset', type: 'Email', description: 'Template for password reset emails', lastModified: '2023-05-15' },
  { id: 2, name: 'Social Media Login', type: 'Landing Page', description: 'Fake social media login page', lastModified: '2023-06-01' },
  { id: 3, name: 'Security Training', type: 'Awareness Page', description: 'Security awareness training page', lastModified: '2023-06-10' },
];

const Templates = () => {
  const [templates, setTemplates] = useState(initialTemplatesData);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newTemplate, setNewTemplate] = useState({ name: '', type: '', description: '' });

  const handleCreateTemplate = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    setTemplates([...templates, { ...newTemplate, id: templates.length + 1, lastModified: currentDate }]);
    setIsCreateDialogOpen(false);
    setNewTemplate({ name: '', type: '', description: '' });
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
              <CardTitle>{template.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-gray-500 mb-2">Type: {template.type}</p>
              <p className="text-sm mb-2">{template.description}</p>
              <p className="text-xs text-gray-400">Last modified: {template.lastModified}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">Edit</Button>
              <Button variant="outline" size="sm">Preview</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Template</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">Name</Label>
              <Input
                id="name"
                value={newTemplate.name}
                onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">Type</Label>
              <Select
                onValueChange={(value) => setNewTemplate({ ...newTemplate, type: value })}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Email">Email</SelectItem>
                  <SelectItem value="Landing Page">Landing Page</SelectItem>
                  <SelectItem value="Awareness Page">Awareness Page</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">Description</Label>
              <Input
                id="description"
                value={newTemplate.description}
                onChange={(e) => setNewTemplate({ ...newTemplate, description: e.target.value })}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleCreateTemplate}>Create Template</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Templates;
