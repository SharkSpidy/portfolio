import React from 'react';
import { experiences } from '../data/portfolio';
import styles from './Experience.module.css';

const Experience: React.FC = () => (
  <section id="experience" className={styles.section}>
    <div className="container">
      <p className={styles.label}>Career</p>
      <h2 className={styles.title}>Experience</h2>
      <p className={styles.sub}>Where I've worked and what I've built along the way.</p>

      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <div key={exp.id} className={`${styles.item} reveal`}>
            <div className={styles.meta}>
              <span className={styles.date}>{exp.date}</span>
              <span className={styles.company}>{exp.company}</span>
            </div>
            <div className={styles.role}>{exp.role}</div>
            <p className={styles.desc}>{exp.description}</p>
            <div className={styles.tags}>
              {exp.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
