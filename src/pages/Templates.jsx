import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const templatesData = [
  { id: 1, name: 'Password Reset', type: 'Email' },
  { id: 2, name: 'Social Media Login', type: 'Landing Page' },
  { id: 3, name: 'Security Training', type: 'Awareness Page' },
];

const Templates = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Templates</h1>
        <Button>Create Template</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {templatesData.map((template) => (
          <Card key={template.id}>
            <CardHeader>
              <CardTitle>{template.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Type: {template.type}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Edit</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Templates;
