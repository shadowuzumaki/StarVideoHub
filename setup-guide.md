# OAuth Setup Guide for StarVideoHub

## 🔐 Complete OAuth Integration Setup

### 1. Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google Sign-In API
4. Create OAuth 2.0 credentials
5. Add your domain to authorized origins
6. Replace `YOUR_GOOGLE_CLIENT_ID` in index.html

### 2. GitHub OAuth Setup
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create new OAuth App
3. Set Authorization callback URL: `http://yourdomain.com/auth/github/callback`
4. Get Client ID and Client Secret
5. Replace `YOUR_GITHUB_CLIENT_ID` in script.js
6. Add Client Secret to backend environment

### 3. Discord OAuth Setup
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create new application
3. Go to OAuth2 section
4. Add redirect URI: `http://yourdomain.com/auth/discord/callback`
5. Get Client ID and Client Secret
6. Replace `YOUR_DISCORD_CLIENT_ID` in script.js
7. Add Client Secret to backend environment

### 4. Backend Setup (Node.js)
```bash
npm init -y
npm install express axios cors dotenv
```

Create `.env` file:
```
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
DISCORD_CLIENT_ID=your_discord_client_id
DISCORD_CLIENT_SECRET=your_discord_client_secret
DISCORD_REDIRECT_URI=http://yourdomain.com/auth/discord/callback
```

Run backend:
```bash
node auth-backend.js
```

### 5. Frontend Configuration
Update the OAuth configuration in script.js:
```javascript
const OAUTH_CONFIG = {
    github: {
        clientId: 'your_actual_github_client_id',
        redirectUri: 'http://yourdomain.com/auth/github/callback',
        scope: 'user:email'
    },
    discord: {
        clientId: 'your_actual_discord_client_id',
        redirectUri: 'http://yourdomain.com/auth/discord/callback',
        scope: 'identify email'
    }
};
```

### 6. Security Notes
- Never expose client secrets in frontend code
- Use HTTPS in production
- Validate state parameter to prevent CSRF
- Store tokens securely
- Implement proper session management

### 7. Features Included
✅ Real Google Sign-In with JWT decoding
✅ GitHub OAuth with user profile data
✅ Discord OAuth with avatar support
✅ Automatic user profile creation
✅ VIP level assignment based on platform
✅ Random stats generation for new users
✅ God-level visual effects on all buttons
✅ Secure state parameter generation
✅ Error handling and user feedback

All three platforms now support real authentication with proper OAuth flows!