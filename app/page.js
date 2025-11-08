'use client';

import { useState } from 'react';
import './styles.css';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    entreprise: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    setFormData({ nom: '', email: '', entreprise: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🌊</span>
            <span className="logo-text">Intelliwave</span>
          </div>
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <a href="#accueil" onClick={() => setMenuOpen(false)}>Accueil</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#avantages" onClick={() => setMenuOpen(false)}>Avantages</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      <section id="accueil" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Automatisation <span className="gradient-text">Intelligente</span> pour Votre Entreprise
          </h1>
          <p className="hero-subtitle">
            Créez des chatbots sur mesure et automatisez vos processus avec n8n et l'IA
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Démarrer un Projet</a>
            <a href="#services" className="btn btn-secondary">Découvrir nos Services</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <span className="card-icon">🤖</span>
            <span>Chatbots IA</span>
          </div>
          <div className="floating-card card-2">
            <span className="card-icon">⚡</span>
            <span>Automatisation</span>
          </div>
          <div className="floating-card card-3">
            <span className="card-icon">🔗</span>
            <span>Intégration n8n</span>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <h2 className="section-title">Nos Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💬</div>
            <h3>Chatbots sur Mesure</h3>
            <p>Création de chatbots intelligents adaptés à vos besoins spécifiques, capables de gérer conversations complexes et requêtes clients.</p>
            <ul className="service-features">
              <li>✓ Support multicanal</li>
              <li>✓ Traitement du langage naturel</li>
              <li>✓ Apprentissage continu</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🔄</div>
            <h3>Automatisation n8n</h3>
            <p>Automatisation complète de vos workflows avec n8n. Connectez vos outils et optimisez vos processus métier.</p>
            <ul className="service-features">
              <li>✓ Workflows personnalisés</li>
              <li>✓ Intégrations multiples</li>
              <li>✓ Surveillance 24/7</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🧠</div>
            <h3>Intelligence Artificielle</h3>
            <p>Intégration d'IA avancée pour analyser, prédire et optimiser vos opérations avec les dernières technologies.</p>
            <ul className="service-features">
              <li>✓ GPT-4 & Claude</li>
              <li>✓ Analyse prédictive</li>
              <li>✓ Personnalisation IA</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">🎯</div>
            <h3>Consultation Stratégique</h3>
            <p>Audit de vos processus actuels et recommandations personnalisées pour maximiser votre ROI en automatisation.</p>
            <ul className="service-features">
              <li>✓ Audit complet</li>
              <li>✓ Plan d'action détaillé</li>
              <li>✓ Support continu</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <h2 className="section-title">Technologies Utilisées</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <div className="tech-icon">⚙️</div>
            <span>n8n</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">🤖</div>
            <span>OpenAI GPT</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">🧠</div>
            <span>Claude AI</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">💬</div>
            <span>Dialogflow</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">📱</div>
            <span>WhatsApp API</span>
          </div>
          <div className="tech-item">
            <div className="tech-icon">💼</div>
            <span>Slack</span>
          </div>
        </div>
      </section>

      <section id="avantages" className="benefits">
        <h2 className="section-title">Pourquoi Intelliwave ?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-number">01</div>
            <h3>Expertise n8n</h3>
            <p>Maîtrise complète de la plateforme n8n pour des automatisations robustes et évolutives.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-number">02</div>
            <h3>Solutions sur Mesure</h3>
            <p>Chaque projet est unique. Nous créons des solutions parfaitement adaptées à vos besoins.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-number">03</div>
            <h3>Support Dédié</h3>
            <p>Accompagnement complet de la conception au déploiement et maintenance continue.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-number">04</div>
            <h3>ROI Rapide</h3>
            <p>Automatisations efficaces qui réduisent vos coûts et augmentent votre productivité rapidement.</p>
          </div>
        </div>
      </section>

      <section className="process">
        <h2 className="section-title">Notre Processus</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>Analyse</h3>
            <p>Étude approfondie de vos besoins et processus actuels</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>Conception</h3>
            <p>Design de la solution optimale avec maquettes et workflows</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>Développement</h3>
            <p>Création et configuration de votre chatbot et automatisations</p>
          </div>
          <div className="process-arrow">→</div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>Déploiement</h3>
            <p>Mise en production et formation de vos équipes</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Lancez Votre Projet</h2>
            <p className="contact-description">
              Prêt à transformer votre entreprise avec l'automatisation intelligente ?
              Contactez-nous pour une consultation gratuite.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <span className="detail-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>contact@intelliwave.ai</p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="detail-icon">📱</span>
                <div>
                  <h4>Téléphone</h4>
                  <p>+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="detail-icon">🌍</span>
                <div>
                  <h4>Localisation</h4>
                  <p>France & International</p>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="text"
              name="entreprise"
              placeholder="Votre entreprise"
              value={formData.entreprise}
              onChange={handleChange}
              className="form-input"
            />
            <textarea
              name="message"
              placeholder="Décrivez votre projet..."
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
              rows="5"
            ></textarea>
            <button type="submit" className="btn btn-primary btn-full">
              Envoyer le Message
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <span className="logo-icon">🌊</span>
              <span className="logo-text">Intelliwave</span>
            </div>
            <p>Votre partenaire en automatisation intelligente et chatbots IA.</p>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Chatbots sur Mesure</a></li>
              <li><a href="#services">Automatisation n8n</a></li>
              <li><a href="#services">Intelligence Artificielle</a></li>
              <li><a href="#services">Consultation</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Entreprise</h4>
            <ul>
              <li><a href="#avantages">À Propos</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#services">Portfolio</a></li>
              <li><a href="#contact">Carrières</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Suivez-nous</h4>
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">GitHub</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Intelliwave. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
