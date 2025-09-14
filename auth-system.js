// ===== PERFECT AUTH SYSTEM WITH GOD-LEVEL EFFECTS =====

// Auth System Variables
let currentUser = null;
let authModal = null;
let loginForm = null;
let registerForm = null;

// Initialize Auth System
function initAuthSystem() {
    authModal = document.getElementById('authModal');
    loginForm = document.getElementById('loginForm');
    registerForm = document.getElementById('registerForm');
    
    // Check if user is already logged in
    const savedUser = localStorage.getItem('starVideoHubUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUIForLoggedInUser();
    }
    
    // Event Listeners
    document.getElementById('loginBtn').addEventListener('click', openAuthModal);
    document.querySelector('.close-auth').addEventListener('click', closeAuthModal);
    
    // Tab switching
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            switchAuthTab(this.dataset.tab);
        });
    });
    
    // Form submissions
    document.getElementById('loginSubmit').addEventListener('click', handleLogin);
    document.getElementById('registerSubmit').addEventListener('click', handleRegister);
    
    // Social login buttons
    document.getElementById('googleLogin').addEventListener('click', () => handleSocialLogin('google'));
    document.getElementById('githubLogin').addEventListener('click', () => handleSocialLogin('github'));
    document.getElementById('discordLogin').addEventListener('click', () => handleSocialLogin('discord'));
    document.getElementById('googleRegister').addEventListener('click', () => handleSocialLogin('google'));
    document.getElementById('githubRegister').addEventListener('click', () => handleSocialLogin('github'));
    document.getElementById('discordRegister').addEventListener('click', () => handleSocialLogin('discord'));
    
    // Password toggle
    document.getElementById('toggleLoginPassword').addEventListener('click', () => togglePassword('loginPassword'));
    document.getElementById('toggleRegisterPassword').addEventListener('click', () => togglePassword('registerPassword'));
    
    // Close modal on backdrop click
    authModal.addEventListener('click', function(e) {
        if (e.target === authModal) {
            closeAuthModal();
        }
    });
    
    // Enter key submission
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && authModal.style.display === 'flex') {
            const activeForm = document.querySelector('.auth-form:not(.hidden)');
            if (activeForm.id === 'loginForm') {
                handleLogin();
            } else {
                handleRegister();
            }
        }
    });
    
    // Input animations
    document.querySelectorAll('.auth-input').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
            createInputParticles(this.parentElement);
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
}

// Open Auth Modal with God-Level Animation
function openAuthModal() {
    authModal.style.visibility = 'visible';
    authModal.style.opacity = '1';
    authModal.querySelector('.auth-container').style.transform = 'scale(1)';
    authModal.querySelector('.auth-container').style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    
    createAuthParticles();
    document.body.style.overflow = 'hidden';
}

// Close Auth Modal
function closeAuthModal() {
    authModal.querySelector('.auth-container').style.transform = 'scale(0.8)';
    authModal.style.opacity = '0';
    
    setTimeout(() => {
        authModal.style.visibility = 'hidden';
        document.body.style.overflow = 'auto';
        clearAuthMessages();
    }, 300);
}

// Switch Auth Tabs with Animation
function switchAuthTab(tab) {
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');
    
    tabs.forEach(t => t.classList.remove('active'));
    forms.forEach(f => f.classList.add('hidden'));
    
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    
    setTimeout(() => {
        if (tab === 'login') {
            loginForm.classList.remove('hidden');
        } else {
            registerForm.classList.remove('hidden');
        }
        
        // Add slide animation
        const activeForm = document.querySelector('.auth-form:not(.hidden)');
        activeForm.style.transform = 'translateX(20px)';
        activeForm.style.opacity = '0';
        
        setTimeout(() => {
            activeForm.style.transform = 'translateX(0)';
            activeForm.style.opacity = '1';
            activeForm.style.transition = 'all 0.3s ease-out';
        }, 10);
    }, 150);
}

// Handle Login
async function handleLogin() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    if (!validateLoginForm(email, password)) return;
    
    const loginBtn = document.getElementById('loginSubmit');
    setLoadingState(loginBtn, true);
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Check credentials (in real app, this would be server-side)
        const users = JSON.parse(localStorage.getItem('starVideoHubUsers') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            currentUser = user;
            if (rememberMe) {
                localStorage.setItem('starVideoHubUser', JSON.stringify(user));
            }
            
            showAuthMessage('Login successful! Welcome back!', 'success');
            
            setTimeout(() => {
                closeAuthModal();
                updateUIForLoggedInUser();
                showWelcomeAnimation();
            }, 1000);
        } else {
            showAuthMessage('Invalid email or password. Please try again.', 'error');
        }
    } catch (error) {
        showAuthMessage('Login failed. Please try again.', 'error');
    } finally {
        setLoadingState(loginBtn, false);
    }
}

// Handle Register
async function handleRegister() {
    const username = document.getElementById('registerUsername').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    if (!validateRegisterForm(username, email, password, confirmPassword, agreeTerms)) return;
    
    const registerBtn = document.getElementById('registerSubmit');
    setLoadingState(registerBtn, true);
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Check if user already exists
        const users = JSON.parse(localStorage.getItem('starVideoHubUsers') || '[]');
        const existingUser = users.find(u => u.email === email || u.username === username);
        
        if (existingUser) {
            showAuthMessage('User already exists with this email or username.', 'error');
            return;
        }
        
        // Create new user
        const newUser = {
            id: Date.now(),
            username,
            email,
            password,
            avatar: '👤',
            vipStatus: 'Free',
            vipLevel: 0,
            joinDate: new Date().toISOString(),
            moviesWatched: 0,
            hoursWatched: 0,
            avgRating: 0
        };
        
        users.push(newUser);
        localStorage.setItem('starVideoHubUsers', JSON.stringify(users));
        
        currentUser = newUser;
        localStorage.setItem('starVideoHubUser', JSON.stringify(newUser));
        
        showAuthMessage('Account created successfully! Welcome to StarVideoHub!', 'success');
        
        setTimeout(() => {
            closeAuthModal();
            updateUIForLoggedInUser();
            showWelcomeAnimation();
        }, 1500);
        
    } catch (error) {
        showAuthMessage('Registration failed. Please try again.', 'error');
    } finally {
        setLoadingState(registerBtn, false);
    }
}

// Handle Social Login
async function handleSocialLogin(provider) {
    const btn = event.target.closest('.social-btn');
    setLoadingState(btn, true);
    
    try {
        // Simulate OAuth flow
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Create mock user data
        const mockUser = {
            id: Date.now(),
            username: `${provider}_user_${Math.floor(Math.random() * 1000)}`,
            email: `user@${provider}.com`,
            avatar: provider === 'google' ? '🌟' : provider === 'github' ? '⚡' : '🎮',
            vipStatus: 'VIP',
            vipLevel: 1,
            provider: provider,
            joinDate: new Date().toISOString(),
            moviesWatched: Math.floor(Math.random() * 50),
            hoursWatched: Math.floor(Math.random() * 200),
            avgRating: (Math.random() * 2 + 8).toFixed(1)
        };
        
        currentUser = mockUser;
        localStorage.setItem('starVideoHubUser', JSON.stringify(mockUser));
        
        showAuthMessage(`Successfully signed in with ${provider.charAt(0).toUpperCase() + provider.slice(1)}!`, 'success');
        
        setTimeout(() => {
            closeAuthModal();
            updateUIForLoggedInUser();
            showWelcomeAnimation();
        }, 1000);
        
    } catch (error) {
        showAuthMessage(`${provider.charAt(0).toUpperCase() + provider.slice(1)} login failed. Please try again.`, 'error');
    } finally {
        setLoadingState(btn, false);
    }
}

// Validation Functions
function validateLoginForm(email, password) {
    if (!email || !password) {
        showAuthMessage('Please fill in all fields.', 'error');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showAuthMessage('Please enter a valid email address.', 'error');
        return false;
    }
    
    return true;
}

function validateRegisterForm(username, email, password, confirmPassword, agreeTerms) {
    if (!username || !email || !password || !confirmPassword) {
        showAuthMessage('Please fill in all fields.', 'error');
        return false;
    }
    
    if (username.length < 3) {
        showAuthMessage('Username must be at least 3 characters long.', 'error');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showAuthMessage('Please enter a valid email address.', 'error');
        return false;
    }
    
    if (password.length < 6) {
        showAuthMessage('Password must be at least 6 characters long.', 'error');
        return false;
    }
    
    if (password !== confirmPassword) {
        showAuthMessage('Passwords do not match.', 'error');
        return false;
    }
    
    if (!agreeTerms) {
        showAuthMessage('Please agree to the Terms & Conditions.', 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// UI Helper Functions
function showAuthMessage(message, type) {
    clearAuthMessages();
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `auth-message ${type}`;
    messageDiv.textContent = message;
    
    const activeForm = document.querySelector('.auth-form:not(.hidden)');
    activeForm.insertBefore(messageDiv, activeForm.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);
}

function clearAuthMessages() {
    document.querySelectorAll('.auth-message').forEach(msg => msg.remove());
}

function setLoadingState(button, loading) {
    if (loading) {
        button.classList.add('loading');
        button.disabled = true;
    } else {
        button.classList.remove('loading');
        button.disabled = false;
    }
}

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const toggle = input.nextElementSibling.nextElementSibling;
    
    if (input.type === 'password') {
        input.type = 'text';
        toggle.textContent = '🙈';
    } else {
        input.type = 'password';
        toggle.textContent = '👁️';
    }
}

function updateUIForLoggedInUser() {
    const loginBtn = document.getElementById('loginBtn');
    loginBtn.textContent = currentUser.username;
    loginBtn.onclick = openProfileModal;
    loginBtn.style.background = 'linear-gradient(45deg, #2ecc71, #27ae60)';
    loginBtn.style.boxShadow = '0 4px 15px rgba(46, 204, 113, 0.3)';
}

function showWelcomeAnimation() {
    // Create welcome notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #2ecc71, #27ae60);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(46, 204, 113, 0.3);
        z-index: 10001;
        animation: slideInRight 0.5s ease-out;
        font-weight: 500;
    `;
    notification.textContent = `Welcome back, ${currentUser.username}! 🎬`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-in forwards';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Particle Effects
function createAuthParticles() {
    const container = document.querySelector('.auth-particles');
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: radial-gradient(circle, #8a2be2, transparent);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        container.appendChild(particle);
    }
}

function createInputParticles(container) {
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: #8a2be2;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: inputParticle 1s ease-out forwards;
            pointer-events: none;
        `;
        container.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }
}

// Add CSS animations for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes particleFloat {
        0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
        50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
    }
    
    @keyframes inputParticle {
        0% { transform: scale(0) translateY(0); opacity: 1; }
        100% { transform: scale(1) translateY(-30px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Logout Function
function logout() {
    currentUser = null;
    localStorage.removeItem('starVideoHubUser');
    
    const loginBtn = document.getElementById('loginBtn');
    loginBtn.textContent = 'Login';
    loginBtn.onclick = openAuthModal;
    loginBtn.style.background = '';
    loginBtn.style.boxShadow = '';
    
    closeProfileModal();
    
    // Show logout notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #e74c3c, #c0392b);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(231, 76, 60, 0.3);
        z-index: 10001;
        animation: slideInRight 0.5s ease-out;
        font-weight: 500;
    `;
    notification.textContent = 'Successfully logged out! 👋';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-in forwards';
        setTimeout(() => notification.remove(), 500);
    }, 2000);
}