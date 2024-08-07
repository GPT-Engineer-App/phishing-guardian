import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const LandingPage = () => {
  const { id } = useParams();
  const [pageContent, setPageContent] = useState('');

  useEffect(() => {
    // In a real application, you would fetch the landing page content based on the campaign ID
    // For now, we'll just set some dummy content
    setPageContent(`<h1>Welcome to our Campaign Landing Page</h1>
                    <p>This is the landing page for campaign ${id}</p>
                    <form>
                      <input type="text" placeholder="Enter your name" />
                      <input type="email" placeholder="Enter your email" />
                      <button type="submit">Submit</button>
                    </form>`);
  }, [id]);

  return (
    <div className="p-6">
      <div dangerouslySetInnerHTML={{ __html: pageContent }} />
    </div>
  );
};

export default LandingPage;

