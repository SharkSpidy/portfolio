import React from 'react';
import { skills } from '../data/portfolio';
import styles from './Skills.module.css';

const Skills: React.FC = () => (
  <section id="skills" className={styles.section}>
    <div className="container">
      <p className={styles.label}>What I Work With</p>
      <div className={`${styles.grid} reveal`}>
        {skills.map((s) => (
          <span
            key={s.label}
            className={`${styles.pill} ${s.featured ? styles.featured : ''}`}
          >
            {s.label}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
