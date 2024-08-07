import React from 'react';
import { useParams } from 'react-router-dom';

const LandingPage = () => {
  const { id } = useParams();

  // In a real application, you would fetch the landing page content based on the id
  // For now, we'll just display a placeholder
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Landing Page {id}</h1>
        <p className="text-xl text-gray-600">This is a placeholder for the landing page content.</p>
      </div>
    </div>
  );
};

export default LandingPage;
