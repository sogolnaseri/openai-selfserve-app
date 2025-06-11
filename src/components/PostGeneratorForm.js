import React, { useState } from 'react';
import { PROMPT_TEMPLATES, PLATFORMS, TONES, AUDIENCES, LENGTHS } from '../data/constants.js';

const PostGeneratorForm = ({ onGenerate, isLoading }) => {
  const [formData, setFormData] = useState({
    topic: '',
    platform: 'linkedin',
    tone: 'professional',
    audience: 'marketers',
    length: 'medium',
    additionalInstructions: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const buildPrompt = () => {
    const template = PROMPT_TEMPLATES[formData.platform][formData.tone];
    let prompt = template
      .replace('{topic}', formData.topic)
      .replace('{audience}', formData.audience)
      .replace('{length}', formData.length);

    if (formData.additionalInstructions) {
      prompt += `\n\nAdditional instructions: ${formData.additionalInstructions}`;
    }

    return prompt;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.topic.trim()) {
      return; // Let the HTML5 validation handle this
    }

    const prompt = buildPrompt();
    onGenerate(prompt);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="topic" className="form-label">
            Product/Topic *
          </label>
          <input
            type="text"
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleInputChange}
            className="form-input"
            placeholder="e.g., New AI productivity tool, Marketing strategy webinar, Company milestone..."
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="platform" className="form-label">
              Platform
            </label>
            <select
              id="platform"
              name="platform"
              value={formData.platform}
              onChange={handleInputChange}
              className="form-select"
            >
              {PLATFORMS.map(platform => (
                <option key={platform.value} value={platform.value}>
                  {platform.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="tone" className="form-label">
              Tone
            </label>
            <select
              id="tone"
              name="tone"
              value={formData.tone}
              onChange={handleInputChange}
              className="form-select"
            >
              {TONES.map(tone => (
                <option key={tone.value} value={tone.value}>
                  {tone.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="audience" className="form-label">
              Target Audience
            </label>
            <select
              id="audience"
              name="audience"
              value={formData.audience}
              onChange={handleInputChange}
              className="form-select"
            >
              {AUDIENCES.map(audience => (
                <option key={audience.value} value={audience.value}>
                  {audience.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="length" className="form-label">
              Post Length
            </label>
            <select
              id="length"
              name="length"
              value={formData.length}
              onChange={handleInputChange}
              className="form-select"
            >
              {LENGTHS.map(length => (
                <option key={length.value} value={length.value}>
                  {length.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="additionalInstructions" className="form-label">
            Additional Instructions (Optional)
          </label>
          <textarea
            id="additionalInstructions"
            name="additionalInstructions"
            value={formData.additionalInstructions}
            onChange={handleInputChange}
            className="form-textarea"
            placeholder="Any specific requirements, mentions, CTAs, or style preferences..."
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : '✨ Generate Post'}
        </button>
      </form>
    </div>
  );
};

export default PostGeneratorForm; 