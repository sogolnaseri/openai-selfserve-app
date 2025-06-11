import OpenAI from 'openai';

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

    res.status(200).json({ post: generatedPost });
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
} 