// VIP Ranking System for StarVideoHub
class VIPSystem {
    constructor() {
        this.currentUser = null;
        this.vipTiers = {
            free: { level: 0, name: 'Free', benefits: [] },
            bronze: { level: 1, name: 'Bronze VIP', price: 9.99, benefits: ['HD Quality', 'No Ads', '5 Downloads/Month'] },
            silver: { level: 2, name: 'Silver VIP', price: 19.99, benefits: ['4K Quality', 'No Ads', '15 Downloads/Month', 'Early Access'] },
            gold: { level: 3, name: 'Gold VIP', price: 29.99, benefits: ['4K Quality', 'No Ads', 'Unlimited Downloads', 'Early Access', 'Exclusive Content'] },
            platinum: { level: 4, name: 'Platinum VIP', price: 49.99, benefits: ['8K Quality', 'No Ads', 'Unlimited Downloads', 'Early Access', 'Exclusive Content', 'Priority Support'] },
            diamond: { level: 5, name: 'Diamond VIP', price: 99.99, benefits: ['8K Quality', 'No Ads', 'Unlimited Downloads', 'Early Access', 'Exclusive Content', 'Priority Support', 'Personal Recommendations', 'Beta Features'] }
        };
        this.init();
    }

    init() {
        this.loadUserData();
        this.createVIPModal();
        this.createCurrentVIPDisplay();
        this.bindEvents();
        this.applyVIPRestrictions();
    }

    loadUserData() {
        const userData = localStorage.getItem('starVideoHubUser');
        if (userData) {
            this.currentUser = JSON.parse(userData);
            if (!this.currentUser.vipLevel) {
                this.currentUser.vipLevel = 'free';
                this.saveUserData();
            }
        }
    }

    saveUserData() {
        if (this.currentUser) {
            localStorage.setItem('starVideoHubUser', JSON.stringify(this.currentUser));
        }
    }

    createVIPModal() {
        const vipModal = document.createElement('div');
        vipModal.className = 'vip-modal';
        vipModal.id = 'vipModal';
        
        vipModal.innerHTML = `
            <div class="vip-container">
                <button class="close-vip" onclick="vipSystem.closeVIPModal()">&times;</button>
                <div class="vip-header">
                    <h1 class="vip-title">👑 VIP Membership</h1>
                    <p class="vip-subtitle">Unlock premium features and exclusive content</p>
                </div>
                
                <div class="vip-tiers">
                    <div class="vip-tier tier-bronze" onclick="vipSystem.selectTier('bronze')">
                        <span class="tier-icon">🥉</span>
                        <h3 class="tier-name">Bronze VIP</h3>
                        <div class="tier-price">$9.99/month</div>
                        <ul class="tier-benefits">
                            <li>HD Quality Streaming</li>
                            <li>Ad-Free Experience</li>
                            <li>5 Downloads per Month</li>
                            <li>Basic Support</li>
                        </ul>
                        <button class="tier-button">Choose Bronze</button>
                    </div>
                    
                    <div class="vip-tier tier-silver" onclick="vipSystem.selectTier('silver')">
                        <span class="tier-icon">🥈</span>
                        <h3 class="tier-name">Silver VIP</h3>
                        <div class="tier-price">$19.99/month</div>
                        <ul class="tier-benefits">
                            <li>4K Quality Streaming</li>
                            <li>Ad-Free Experience</li>
                            <li>15 Downloads per Month</li>
                            <li>Early Access to New Movies</li>
                            <li>Priority Support</li>
                        </ul>
                        <button class="tier-button">Choose Silver</button>
                    </div>
                    
                    <div class="vip-tier tier-gold" onclick="vipSystem.selectTier('gold')">
                        <span class="tier-icon">🥇</span>
                        <h3 class="tier-name">Gold VIP</h3>
                        <div class="tier-price">$29.99/month</div>
                        <ul class="tier-benefits">
                            <li>4K Quality Streaming</li>
                            <li>Ad-Free Experience</li>
                            <li>Unlimited Downloads</li>
                            <li>Early Access to New Movies</li>
                            <li>Exclusive VIP Content</li>
                            <li>Premium Support</li>
                        </ul>
                        <button class="tier-button">Choose Gold</button>
                    </div>
                    
                    <div class="vip-tier tier-platinum" onclick="vipSystem.selectTier('platinum')">
                        <span class="tier-icon">💎</span>
                        <h3 class="tier-name">Platinum VIP</h3>
                        <div class="tier-price">$49.99/month</div>
                        <ul class="tier-benefits">
                            <li>8K Quality Streaming</li>
                            <li>Ad-Free Experience</li>
                            <li>Unlimited Downloads</li>
                            <li>Early Access to New Movies</li>
                            <li>Exclusive VIP Content</li>
                            <li>24/7 Premium Support</li>
                            <li>Multiple Device Streaming</li>
                        </ul>
                        <button class="tier-button">Choose Platinum</button>
                    </div>
                    
                    <div class="vip-tier tier-diamond" onclick="vipSystem.selectTier('diamond')">
                        <span class="tier-icon">💠</span>
                        <h3 class="tier-name">Diamond VIP</h3>
                        <div class="tier-price">$99.99/month</div>
                        <ul class="tier-benefits">
                            <li>8K Quality Streaming</li>
                            <li>Ad-Free Experience</li>
                            <li>Unlimited Downloads</li>
                            <li>Early Access to New Movies</li>
                            <li>Exclusive VIP Content</li>
                            <li>24/7 Premium Support</li>
                            <li>Multiple Device Streaming</li>
                            <li>Personal Movie Recommendations</li>
                            <li>Beta Features Access</li>
                            <li>Director's Cut Versions</li>
                        </ul>
                        <button class="tier-button">Choose Diamond</button>
                    </div>
                </div>
                
                <div class="vip-benefits-display">
                    <h3 class="benefits-title">🌟 VIP Benefits Overview</h3>
                    <div class="benefits-grid">
                        <div class="benefit-item">
                            <span class="benefit-icon">🎬</span>
                            <p class="benefit-text">Premium Quality Streaming</p>
                        </div>
                        <div class="benefit-item">
                            <span class="benefit-icon">🚫</span>
                            <p class="benefit-text">Ad-Free Experience</p>
                        </div>
                        <div class="benefit-item">
                            <span class="benefit-icon">⬇️</span>
                            <p class="benefit-text">Download Movies</p>
                        </div>
                        <div class="benefit-item">
                            <span class="benefit-icon">⚡</span>
                            <p class="benefit-text">Early Access</p>
                        </div>
                        <div class="benefit-item">
                            <span class="benefit-icon">🔒</span>
                            <p class="benefit-text">Exclusive Content</p>
                        </div>
                        <div class="benefit-item">
                            <span class="benefit-icon">🎯</span>
                            <p class="benefit-text">Personal Recommendations</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(vipModal);
    }

    createCurrentVIPDisplay() {
        if (this.currentUser && this.currentUser.vipLevel !== 'free') {
            const vipDisplay = document.createElement('div');
            vipDisplay.className = 'current-vip';
            vipDisplay.id = 'currentVIP';
            vipDisplay.innerHTML = `👑 ${this.vipTiers[this.currentUser.vipLevel].name}`;
            vipDisplay.onclick = () => this.openVIPModal();
            document.body.appendChild(vipDisplay);
        }
    }

    bindEvents() {
        // Add VIP button to navbar if user is logged in
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn && this.currentUser) {
            const vipBtn = document.createElement('button');
            vipBtn.className = 'login-btn';
            vipBtn.style.marginLeft = '10px';
            vipBtn.innerHTML = '👑 VIP';
            vipBtn.onclick = () => this.openVIPModal();
            loginBtn.parentNode.insertBefore(vipBtn, loginBtn.nextSibling);
        }

        // Update profile modal with VIP status
        this.updateProfileVIPStatus();
    }

    updateProfileVIPStatus() {
        const profileModal = document.getElementById('profileModal');
        if (profileModal && this.currentUser) {
            const vipStatus = profileModal.querySelector('#vipStatus');
            if (vipStatus) {
                const currentTier = this.vipTiers[this.currentUser.vipLevel];
                vipStatus.innerHTML = `
                    <span class="vip-badge">${currentTier.name}</span>
                    <span class="vip-level">Level ${currentTier.level}</span>
                `;
            }
        }
    }

    openVIPModal() {
        const vipModal = document.getElementById('vipModal');
        if (vipModal) {
            vipModal.style.display = 'flex';
            this.triggerVIPOpenEffects();
        }
    }

    closeVIPModal() {
        const vipModal = document.getElementById('vipModal');
        if (vipModal) {
            this.triggerVIPCloseEffects();
            setTimeout(() => {
                vipModal.style.display = 'none';
            }, 500);
        }
    }

    selectTier(tierName) {
        if (!this.currentUser) {
            alert('Please login first to upgrade to VIP!');
            return;
        }

        const tier = this.vipTiers[tierName];
        const confirmMessage = `Upgrade to ${tier.name} for $${tier.price}/month?\n\nBenefits:\n${tier.benefits.join('\n')}`;
        
        if (confirm(confirmMessage)) {
            this.upgradeTier(tierName);
        }
    }

    upgradeTier(tierName) {
        if (this.currentUser) {
            this.currentUser.vipLevel = tierName;
            this.currentUser.vipUpgradeDate = new Date().toISOString();
            this.saveUserData();
            
            // Show success message
            this.showUpgradeSuccess(tierName);
            
            // Update UI
            this.updateVIPDisplay();
            this.applyVIPRestrictions();
            this.closeVIPModal();
        }
    }

    showUpgradeSuccess(tierName) {
        const tier = this.vipTiers[tierName];
        
        // Create success overlay
        const successOverlay = document.createElement('div');
        successOverlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(0, 0, 0, 0.9); display: flex; justify-content: center; align-items: center;
            z-index: 10002; animation: fadeIn 0.5s ease-out;
        `;
        
        successOverlay.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
                border: 3px solid #ffd700; border-radius: 20px; padding: 40px;
                text-align: center; max-width: 500px; animation: bounceIn 0.8s ease-out;
            ">
                <div style="font-size: 64px; margin-bottom: 20px;">🎉</div>
                <h2 style="color: #ffd700; font-size: 32px; margin-bottom: 15px;">Congratulations!</h2>
                <p style="color: #fff; font-size: 18px; margin-bottom: 20px;">
                    You've successfully upgraded to <strong style="color: #ffd700;">${tier.name}</strong>!
                </p>
                <div style="background: rgba(255, 215, 0, 0.1); border: 1px solid #ffd700; border-radius: 10px; padding: 15px; margin-bottom: 20px;">
                    <h4 style="color: #ffd700; margin-bottom: 10px;">Your New Benefits:</h4>
                    <ul style="color: #ccc; text-align: left; list-style: none;">
                        ${tier.benefits.map(benefit => `<li style="margin: 5px 0;">✓ ${benefit}</li>`).join('')}
                    </ul>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: linear-gradient(45deg, #ffd700, #ffed4e); border: none; border-radius: 25px;
                    padding: 12px 30px; color: #000; font-weight: bold; cursor: pointer;
                ">Continue Watching</button>
            </div>
        `;
        
        document.body.appendChild(successOverlay);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (successOverlay.parentNode) {
                successOverlay.remove();
            }
        }, 5000);
    }

    updateVIPDisplay() {
        // Update current VIP display
        const currentVIP = document.getElementById('currentVIP');
        if (currentVIP) {
            currentVIP.remove();
        }
        this.createCurrentVIPDisplay();
        
        // Update profile VIP status
        this.updateProfileVIPStatus();
    }

    applyVIPRestrictions() {
        if (!this.currentUser) return;
        
        const userLevel = this.vipTiers[this.currentUser.vipLevel].level;
        
        // Apply restrictions to movie cards
        const movieCards = document.querySelectorAll('.movie-card');
        movieCards.forEach((card, index) => {
            // Make some movies VIP only (every 3rd movie for demo)
            if ((index + 1) % 3 === 0) {
                this.makeMovieVIPOnly(card, 1); // Bronze level required
            }
            if ((index + 1) % 5 === 0) {
                this.makeMovieVIPOnly(card, 3); // Gold level required
            }
            if ((index + 1) % 7 === 0) {
                this.makeMovieVIPOnly(card, 5); // Diamond level required
            }
        });
    }

    makeMovieVIPOnly(movieCard, requiredLevel) {
        const userLevel = this.currentUser ? this.vipTiers[this.currentUser.vipLevel].level : 0;
        
        if (userLevel < requiredLevel) {
            movieCard.classList.add('vip-locked');
            
            // Add VIP overlay
            const overlay = document.createElement('div');
            overlay.className = 'vip-unlock-overlay';
            overlay.innerHTML = `
                <div class="unlock-icon">🔒</div>
                <div class="unlock-text">VIP Level ${requiredLevel} Required</div>
                <button class="unlock-button" onclick="vipSystem.openVIPModal()">Upgrade Now</button>
            `;
            
            movieCard.style.position = 'relative';
            movieCard.appendChild(overlay);
        } else {
            movieCard.classList.add('vip-only');
        }
    }

    triggerVIPOpenEffects() {
        // Golden particle explosion
        this.createGoldenParticles();
        
        // Screen flash
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
            z-index: 9999; pointer-events: none; animation: vipFlash 0.8s ease-out;
        `;
        document.body.appendChild(flash);
        
        setTimeout(() => flash.remove(), 800);
    }

    triggerVIPCloseEffects() {
        // Golden implosion
        const implosion = document.createElement('div');
        implosion.style.cssText = `
            position: fixed; top: 50%; left: 50%; width: 300px; height: 300px;
            background: radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, transparent 70%);
            border-radius: 50%; transform: translate(-50%, -50%);
            z-index: 9999; pointer-events: none; animation: vipImplosion 0.6s ease-in;
        `;
        document.body.appendChild(implosion);
        
        setTimeout(() => implosion.remove(), 600);
    }

    createGoldenParticles() {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed; left: 50%; top: 50%; width: 8px; height: 8px;
                background: #ffd700; border-radius: 50%; z-index: 9999; pointer-events: none;
                box-shadow: 0 0 20px #ffd700;
            `;
            
            const angle = (i / 30) * Math.PI * 2;
            const velocity = 150 + Math.random() * 200;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            particle.style.animation = `vipParticle 1.5s ease-out forwards`;
            particle.style.setProperty('--vx', vx + 'px');
            particle.style.setProperty('--vy', vy + 'px');
            
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 1500);
        }
    }

    // Check if user can access premium features
    canAccessFeature(featureName) {
        if (!this.currentUser) return false;
        
        const userLevel = this.vipTiers[this.currentUser.vipLevel].level;
        const featureRequirements = {
            'hd_quality': 1,
            '4k_quality': 2,
            '8k_quality': 4,
            'downloads': 1,
            'unlimited_downloads': 3,
            'early_access': 2,
            'exclusive_content': 3,
            'priority_support': 2,
            'personal_recommendations': 5,
            'beta_features': 5
        };
        
        return userLevel >= (featureRequirements[featureName] || 0);
    }

    // Get user's download limit
    getDownloadLimit() {
        if (!this.currentUser) return 0;
        
        const limits = {
            'free': 0,
            'bronze': 5,
            'silver': 15,
            'gold': -1, // unlimited
            'platinum': -1,
            'diamond': -1
        };
        
        return limits[this.currentUser.vipLevel] || 0;
    }
}

// Add VIP-specific CSS animations
const vipCSS = `
@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes bounceIn {
    0% { transform: scale(0.3); opacity: 0; }
    50% { transform: scale(1.05); }
    70% { transform: scale(0.9); }
    100% { transform: scale(1); opacity: 1; }
}

@keyframes vipFlash {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
}

@keyframes vipImplosion {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
    50% { transform: translate(-50%, -50%) scale(2); opacity: 0.8; }
    100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
}

@keyframes vipParticle {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(var(--vx), var(--vy)) scale(0); opacity: 0; }
}
`;

// Inject VIP CSS
if (!document.querySelector('#vip-animations')) {
    const style = document.createElement('style');
    style.id = 'vip-animations';
    style.textContent = vipCSS;
    document.head.appendChild(style);
}

// Initialize VIP System
document.addEventListener('DOMContentLoaded', () => {
    window.vipSystem = new VIPSystem();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VIPSystem;
}