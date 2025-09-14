// Backend API endpoints for OAuth (Node.js/Express example)
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

// GitHub OAuth endpoint
app.post('/api/auth/github', async (req, res) => {
    try {
        const { code } = req.body;
        
        // Exchange code for access token
        const tokenResponse = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code: code
        }, {
            headers: { 'Accept': 'application/json' }
        });
        
        const accessToken = tokenResponse.data.access_token;
        
        // Get user data
        const userResponse = await axios.get('https://api.github.com/user', {
            headers: { 'Authorization': `token ${accessToken}` }
        });
        
        // Get user email
        const emailResponse = await axios.get('https://api.github.com/user/emails', {
            headers: { 'Authorization': `token ${accessToken}` }
        });
        
        const primaryEmail = emailResponse.data.find(email => email.primary)?.email;
        
        res.json({
            ...userResponse.data,
            email: primaryEmail
        });
        
    } catch (error) {
        res.status(500).json({ error: 'GitHub authentication failed' });
    }
});

// Discord OAuth endpoint
app.post('/api/auth/discord', async (req, res) => {
    try {
        const { code } = req.body;
        
        // Exchange code for access token
        const tokenResponse = await axios.post('https://discord.com/api/oauth2/token', 
            new URLSearchParams({
                client_id: process.env.DISCORD_CLIENT_ID,
                client_secret: process.env.DISCORD_CLIENT_SECRET,
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: process.env.DISCORD_REDIRECT_URI
            }), {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }
        );
        
        const accessToken = tokenResponse.data.access_token;
        
        // Get user data
        const userResponse = await axios.get('https://discord.com/api/users/@me', {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        
        res.json(userResponse.data);
        
    } catch (error) {
        res.status(500).json({ error: 'Discord authentication failed' });
    }
});

app.listen(3000, () => {
    console.log('Auth server running on port 3000');
});