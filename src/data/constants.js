// Predefined prompt templates
export const PROMPT_TEMPLATES = {
  linkedin: {
    professional: "Write a professional LinkedIn post about {topic} that targets {audience}. The post should be {length}, engaging, and include relevant hashtags. Focus on providing value and insights.",
    casual: "Create a casual but professional LinkedIn post about {topic} for {audience}. Keep it {length}, conversational, and relatable. Include hashtags and maybe a question to encourage engagement.",
    excited: "Write an enthusiastic LinkedIn post about {topic} targeting {audience}. Make it {length}, energetic, and inspiring. Use emojis appropriately and include engaging hashtags."
  },
  x: {
    professional: "Create a professional X (formerly Twitter) post about {topic} for {audience}. Keep it under 280 characters, make it {length} overall, and include relevant hashtags.",
    casual: "Write a casual X (formerly Twitter) post about {topic} that {audience} would find interesting. Make it {length}, conversational, and include trending hashtags.",
    excited: "Create an exciting X (formerly Twitter) post about {topic} for {audience}. Make it {length}, use emojis, and include catchy hashtags that will get attention."
  },
  instagram: {
    professional: "Write a professional Instagram caption about {topic} targeting {audience}. Make it {length}, visually descriptive, and include strategic hashtags for reach.",
    casual: "Create a casual Instagram post about {topic} for {audience}. Keep it {length}, authentic, and include popular hashtags with a personal touch.",
    excited: "Write an exciting Instagram caption about {topic} for {audience}. Make it {length}, vibrant, use relevant emojis, and include trending hashtags."
  }
};

// Dropdown options
export const PLATFORMS = [
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'x', label: 'X (formerly Twitter)' },
  { value: 'instagram', label: 'Instagram' }
];

export const TONES = [
  { value: 'professional', label: 'Professional' },
  { value: 'casual', label: 'Casual' },
  { value: 'excited', label: 'Excited' }
];

export const AUDIENCES = [
  { value: 'startup founders', label: 'Startup Founders' },
  { value: 'marketers', label: 'Marketers' },
  { value: 'recruiters', label: 'Recruiters' },
  { value: 'entrepreneurs', label: 'Entrepreneurs' },
  { value: 'developers', label: 'Developers' },
  { value: 'designers', label: 'Designers' },
  { value: 'sales professionals', label: 'Sales Professionals' },
  { value: 'business owners', label: 'Business Owners' },
  { value: 'students', label: 'Students' },
  { value: 'professionals', label: 'General Professionals' }
];

export const LENGTHS = [
  { value: 'short', label: 'Short (1-2 sentences)' },
  { value: 'medium', label: 'Medium (3-5 sentences)' },
  { value: 'long', label: 'Long (6+ sentences)' }
]; 