import React from 'react';
import { owner, socialLinks } from '../data/portfolio';
import { GitHubIcon, LinkedInIcon, TwitterIcon, ResumeIcon } from './Icons';
import styles from './Contact.module.css';

const iconMap = {
  github:   GitHubIcon,
  linkedin: LinkedInIcon,
  twitter:  TwitterIcon,
  resume:   ResumeIcon,
};

const Contact: React.FC = () => (
  <section id="contact" className={styles.section}>
    <div className="container">
      <div className={`${styles.card} reveal`}>
        <div className={styles.glow} aria-hidden />

        <p className={styles.label}>Get in Touch</p>
        <h2 className={styles.title}>
          Let's build something<br />worth talking about.
        </h2>
        <p className={styles.tagline}>
          Whether you have a project in mind, an open role you think I'd be a fit
          for, or just want to talk tech — my inbox is open.
        </p>

        <a href={`mailto:${owner.email}`} className={styles.email}>
          {owner.email}
        </a>

        <div className={styles.socials}>
          {socialLinks.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Icon size={16} />
                {s.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
