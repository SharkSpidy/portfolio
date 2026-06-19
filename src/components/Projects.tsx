import React from 'react';
import { projects, owner } from '../data/portfolio';
import { GitHubIcon, ExternalLinkIcon } from './Icons';
import styles from './Projects.module.css';

const Projects: React.FC = () => (
  <section id="projects" className={styles.section}>
    <div className="container">
      <p className={styles.label}>Work</p>
      <h2 className={styles.title}>Selected Projects</h2>
      <p className={styles.sub}>
        Things I've built — from weekend experiments to production systems.
      </p>

      <div className={styles.grid}>
        {projects.map((proj, i) => (
          <div
            key={proj.id}
            className={`${styles.card} reveal`}
            style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.icon}>{proj.icon}</div>
              <div className={styles.links}>
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  title="View code"
                >
                  <GitHubIcon size={15} />
                </a>
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    title="Live demo"
                  >
                    <ExternalLinkIcon size={15} />
                  </a>
                )}
              </div>
            </div>

            <div className={styles.name}>{proj.name}</div>
            <p className={styles.desc}>{proj.description}</p>

            <div className={styles.tags}>
              {proj.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.allRepos}>
        <a
          href={owner.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnOutline}
        >
          View all {owner.repoCount} repos on GitHub →
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
