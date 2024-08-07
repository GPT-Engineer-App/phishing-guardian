import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Campaign A', emails: 4000, clicks: 2400, info: 2400 },
  { name: 'Campaign B', emails: 3000, clicks: 1398, info: 2210 },
  { name: 'Campaign C', emails: 2000, clicks: 9800, info: 2290 },
  { name: 'Campaign D', emails: 2780, clicks: 3908, info: 2000 },
  { name: 'Campaign E', emails: 1890, clicks: 4800, info: 2181 },
];

const Reports = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Reports</h1>
        <Button>Generate Report</Button>
      </div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Overall Performance</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="emails" fill="#8884d8" />
              <Bar dataKey="clicks" fill="#82ca9d" />
              <Bar dataKey="info" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Emails Sent</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">13,670</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Click-through Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">24.5%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Information Provided Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">12.3%</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
