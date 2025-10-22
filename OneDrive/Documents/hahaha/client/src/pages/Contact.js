import React, { useState } from 'react';
import { 
  Envelope, 
  GameController, 
  Star, 
  Trophy, 
  Clock, 
  Target, 
  Gift, 
  Users, 
  MapPin, 
  Phone 
} from '@phosphor-icons/react';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your server
    setSubscribed(true);
  };

  return (
    <div className="celestial-bg" style={{ paddingTop: '70px' }}>
      <div className="contact-message-banner celestial-glow">
        <div className="message-banner-content">
          <h3>Need Help?</h3>
          <button 
            className="celestial-btn message-btn"
            onClick={() => document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' })}
          >
            Send us a Message
          </button>
        </div>
      </div>

      <div className="celestial-contact-container">
        <div className="contact-newsletter-card celestial-glow">
          <div className="newsletter-header">
            <h2>Weekly Newsletter</h2>
          </div>
          
          <div className="newsletter-hero">
            <div className="newsletter-content">
              <h3>Don't miss our BIG news!</h3>
              <p>Stay updated with the latest games, exclusive deals, and special events at Celestial Gaming Cafe.</p>
              {!subscribed ? (
                <form className="celestial-form" onSubmit={handleSubmit}>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    required 
                  />
                  <button type="submit" className="celestial-btn pulse">
                    Subscribe Now
                  </button>
                </form>
              ) : (
                <div className="success-message celestial-glow">
                  Thanks for subscribing! Check your email for confirmation.
                </div>
              )}
            </div>
            <div className="newsletter-illustration">
              <div className="envelope-icon">
                <Envelope size={64} weight="fill" />
              </div>
              <div className="floating-elements">
                <span><GameController size={32} weight="fill" /></span>
                <span><Star size={32} weight="fill" /></span>
                <span><Trophy size={32} weight="fill" /></span>
              </div>
            </div>
          </div>

          <div className="features-section">
            <h3 className="features-title">CELESTIAL FEATURES</h3>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon"><Clock size={40} weight="bold" /></div>
                <h4>Gaming Hours</h4>
                <p>Track your gaming sessions and earn rewards</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Target size={40} weight="bold" /></div>
                <h4>Tournaments</h4>
                <p>Weekly competitions with amazing prizes</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Gift size={40} weight="bold" /></div>
                <h4>Special Deals</h4>
                <p>Exclusive discounts for subscribers</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Users size={40} weight="bold" /></div>
                <h4>Community</h4>
                <p>Join our growing gaming family</p>
              </div>
            </div>
          </div>

          <div className="newsletter-footer">
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
            <p className="footer-note">You're receiving this email because you signed up for Celestial Gaming updates.</p>
          </div>
        </div>
      </div>

      <div id="contactForm" className="contact-form-section celestial-glow">
        <div className="contact-form-container">
          <h3>Send us a Message</h3>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-info-item">
                <span className="contact-icon"><MapPin size={32} weight="fill" /></span>
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Gaming Street, Cyber City</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-icon"><Phone size={32} weight="fill" /></span>
                <div>
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-icon"><Envelope size={32} weight="fill" /></span>
                <div>
                  <h4>Email Us</h4>
                  <p>support@celestialgaming.com</p>
                </div>
              </div>
            </div>
            <form className="celestial-form contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea 
                placeholder="Your Message" 
                value={message} 
                onChange={e => setMessage(e.target.value)}
                rows="4"
                required
              />
              <button className="celestial-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
