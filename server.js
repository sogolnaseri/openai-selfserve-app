import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Generate post endpoint
app.post('/api/generate', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ 
        error: 'OpenAI API key not configured. Please set OPENAI_API_KEY environment variable.' 
      });
    }

    console.log('Generating post with GPT-4o using prompt:', prompt);

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a professional social media content creator and marketing expert. Generate engaging, high-quality social media posts based on the given prompts. Make sure the content is appropriate, engaging, follows best practices for the specified platform, and includes relevant hashtags and formatting."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 600,
      temperature: 0.7,
    });

    const generatedPost = completion.choices[0].message.content;
    
    console.log('Generated post with GPT-4o:', generatedPost);

    res.json({ post: generatedPost });
  } catch (error) {
    console.error('Error generating post:', error);
    
    if (error.code === 'insufficient_quota') {
      res.status(429).json({ 
        error: 'OpenAI API quota exceeded. Please check your billing and usage limits.' 
      });
    } else if (error.code === 'invalid_api_key') {
      res.status(401).json({ 
        error: 'Invalid OpenAI API key. Please check your API key configuration.' 
      });
    } else if (error.code === 'model_not_found') {
      res.status(400).json({ 
        error: 'GPT-4o model not available. Please check your OpenAI account has access to GPT-4o or try with a different model.' 
      });
    } else {
      res.status(500).json({ 
        error: 'Failed to generate post. Please try again later.' 
      });
    }
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Using GPT-4o model for enhanced social media content generation`);
  console.log(`Health check: http://localhost:${port}/api/health`);
  
  if (!process.env.OPENAI_API_KEY) {
    console.warn('⚠️  Warning: OPENAI_API_KEY environment variable is not set!');
    console.log('Please create a .env file with your OpenAI API key:');
    console.log('OPENAI_API_KEY=your_api_key_here');
  }
}); 