import React from 'react';

const GeneratedPostDisplay = ({ generatedPost }) => {
  if (!generatedPost) return null;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedPost);
      alert('Post copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="results-container">
      <h2>🎉 Your Generated Post</h2>
      <div className="generated-post">
        {generatedPost}
      </div>
      <button onClick={copyToClipboard} className="copy-btn">
        📋 Copy to Clipboard
      </button>
    </div>
  );
};

export default GeneratedPostDisplay; 