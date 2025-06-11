# 🚀 Social Media Post Generator

An AI-powered web application that helps marketing teams and content creators generate high-quality social media posts without writing prompts manually.

## 🚀 Live Demo

🔗 [OPENAI-SELF-SERVE app - Live App](https://openai-selfserve-app.vercel.app/)

Main  Page

![image](https://github.com/user-attachments/assets/fa04d31f-55a5-4035-a2b8-b238aa21c568)

Example

![image](https://github.com/user-attachments/assets/d6e447ce-41dc-44ec-a7b5-0bd9ccfeeb05)

Generated Post

<img width="1024" alt="image" src="https://github.com/user-attachments/assets/c9fa93cb-2e55-43b7-9d8e-12e9e4c83b31" />





## ✨ Features

- **Pre-built Prompt Templates**: Choose from professionally crafted templates for different platforms and tones
- **Guided Form Interface**: No need to write prompts - just fill in the blanks
- **Multi-Platform Support**: Generate content for LinkedIn, X (formerly Twitter), and Instagram
- **Customizable Tone**: Professional, casual, or excited tone options
- **Target Audience Selection**: Choose from 10+ predefined audience types
- **Flexible Post Length**: Short, medium, or long post options
- **Additional Instructions**: Add custom requirements or preferences
- **One-Click Copy**: Copy generated posts to clipboard instantly
- **Responsive Design**: Works perfectly on desktop and mobile devices

## 🎯 Target Audience

This tool is designed for:
- Marketing teams with no coding experience
- Content creators and social media managers
- Small business owners
- Freelancers and consultants
- Anyone who needs to create engaging social media content quickly

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your OpenAI API key**
   - Copy the `env.example` file to `.env`
   - Replace `your_openai_api_key_here` with your actual OpenAI API key
   ```bash
   cp env.example .env
   ```
   
   Then edit the `.env` file:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3001
   ```

4. **Run the application**
   ```bash
   npm run dev
   ```
   
   This will start both the backend server (port 3001) and the React frontend (port 3000).

5. **Open your browser**
   Navigate to `http://localhost:3000` to use the application.

### Getting an OpenAI API Key

1. Visit [OpenAI's website](https://openai.com/api/)
2. Create an account or sign in
3. Navigate to the API section
4. Generate a new API key
5. Copy the key and paste it into your `.env` file

## 📱 How to Use

1. **Enter your topic**: Describe what you want to post about (e.g., "New AI productivity tool", "Marketing strategy webinar")

2. **Choose your platform**: Select LinkedIn, X (formerly Twitter), or Instagram

3. **Select your tone**: Choose between Professional, Casual, or Excited

4. **Pick your audience**: Select from options like "Marketers", "Startup Founders", "Developers", etc.

5. **Choose post length**: Short (1-2 sentences), Medium (3-5 sentences), or Long (6+ sentences)

6. **Add custom instructions** (optional): Include any specific requirements, mentions, or style preferences

7. **Click "Generate Post"**: The AI will create a tailored social media post

8. **Copy and use**: Click the copy button to copy the generated post to your clipboard

## 🔧 Available Scripts

- `npm start`: Runs the React app in development mode
- `npm run server`: Runs only the backend server
- `npm run dev`: Runs both frontend and backend concurrently
- `npm run build`: Builds the React app for production
- `npm test`: Runs the test suite

## 🎨 Customization

### Adding New Platforms

To add a new social media platform:

1. Add the platform to the `PLATFORMS` array in `src/data/constants.js`
2. Add corresponding prompt templates in the `PROMPT_TEMPLATES` object
3. The rest of the application will automatically support the new platform

### Adding New Tones

To add new tone options:

1. Add the tone to the `TONES` array in `src/data/constants.js`
2. Add corresponding templates for each platform in `PROMPT_TEMPLATES`

### Adding New Audiences

Simply add new audience options to the `AUDIENCES` array in `src/data/constants.js`.

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | Yes |
| `PORT` | Backend server port (default: 3001) | No |

## 📊 API Usage

The application uses OpenAI's GPT-4o model. Each generated post consumes a small amount of tokens (typically 100-600 tokens per request).

## 🐛 Troubleshooting

### Common Issues

1. **"OpenAI API key not configured" error**
   - Make sure you have created a `.env` file
   - Ensure your API key is correctly set in the `.env` file
   - Restart the server after updating the `.env` file

2. **"Failed to generate post" error**
   - Check your internet connection
   - Verify your OpenAI API key is valid
   - Ensure you have sufficient OpenAI API credits

3. **Server not starting**
   - Make sure port 3001 is not in use by another application
   - Try changing the PORT in your `.env` file

### Getting Help

If you encounter issues:
1. Check the browser console for error messages
2. Check the server console for backend errors
3. Verify your OpenAI API key is valid and has sufficient credits

## 🚀 Deployment

To deploy this application:

1. **Build the React app**
   ```bash
   npm run build
   ```

2. **Serve the built files** along with the backend server

3. **Set environment variables** on your hosting platform

4. **Use the production start script**
   ```bash
   npm run start:prod
   ```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 🎉 Enjoy Creating Amazing Social Media Content!

This tool is designed to save you time and help you create engaging social media posts effortlessly. Happy posting! 🎯 
