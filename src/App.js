import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import PostGeneratorForm from './components/PostGeneratorForm.js';
import LoadingSpinner from './components/LoadingSpinner.js';
import ErrorMessage from './components/ErrorMessage.js';
import GeneratedPostDisplay from './components/GeneratedPostDisplay.js';

function App() {
  const [generatedPost, setGeneratedPost] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (prompt) => {
    setIsLoading(true);
    setError('');
    setGeneratedPost('');

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setGeneratedPost(data.post);
    } catch (err) {
      setError('Failed to generate post. Please make sure your OpenAI API key is configured and try again.');
      console.error('Error generating post:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <Header />
      
      <PostGeneratorForm 
        onGenerate={handleGenerate}
        isLoading={isLoading}
      />

      {isLoading && <LoadingSpinner />}

      <ErrorMessage error={error} />

      <GeneratedPostDisplay generatedPost={generatedPost} />
    </div>
  );
}

export default App; 