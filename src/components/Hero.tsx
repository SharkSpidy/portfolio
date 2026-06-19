import React from 'react';
import { owner } from '../data/portfolio';
import styles from './Hero.module.css';

const Hero: React.FC = () => (
  <section id="hero" className={styles.hero}>
    {/* ambient glows */}
    <div className={styles.glowTopRight} aria-hidden />
    <div className={styles.glowBottomLeft} aria-hidden />

    <div className="container">
      <div className={styles.inner}>
        {/* LEFT — name + tagline */}
        <div className={styles.left}>
          <div className={styles.availability}>
            <span className={styles.dot} />
            {owner.status}
          </div>

          <h1 className={styles.name}>
            <span className={styles.firstName}>{owner.firstName}</span>
            <span className={styles.lastName}>{owner.lastName}</span>
          </h1>

          <p className={styles.tagline}>{owner.tagline}</p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.btnPrimary}>See My Work</a>
            <a href="#contact"  className={styles.btnOutline}>Get in Touch</a>
          </div>
        </div>

        {/* RIGHT — stat cards */}
        <div className={styles.right}>
          <div className={`${styles.statCard} reveal`}>
            <div className={styles.num}>{owner.repoCount}<span>+</span></div>
            <div className={styles.desc}>Public repositories on GitHub</div>
          </div>
          <div className={`${styles.statCard} reveal`} style={{ transitionDelay: '0.1s' }}>
            <div className={styles.num}>{owner.projectsShipped}<span>+</span></div>
            <div className={styles.desc}>Projects shipped to production</div>
          </div>
          <div className={`${styles.statCard} reveal`} style={{ transitionDelay: '0.2s' }}>
            <div className={styles.num}>{owner.yearsExperience}<span>yr</span></div>
            <div className={styles.desc}>Years of professional experience</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
