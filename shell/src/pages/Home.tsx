import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

/**
 * Home page component
 */
export const Home: React.FC = () => {
  const features = [
    {
      icon: '🏗️',
      title: 'Module Federation',
      description: 'Dynamic loading of micro-frontends at runtime',
    },
    {
      icon: '⚡',
      title: 'High Performance',
      description: 'Optimized builds with code splitting and lazy loading',
    },
    {
      icon: '🔧',
      title: 'Developer Experience',
      description: 'Hot reload, TypeScript support, and modern tooling',
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Works seamlessly across desktop and mobile devices',
    },
    {
      icon: '🎨',
      title: 'Shared UI Components',
      description: 'Consistent design system across all applications',
    },
    {
      icon: '💾',
      title: 'Data Persistence',
      description: 'Local storage integration for state management',
    },
  ];

  const apps = [
    {
      name: 'Counter',
      path: '/counter',
      icon: '🔢',
      description: 'Simple counter with persistent state',
      color: '#007bff',
    },
    {
      name: 'Todos',
      path: '/todos',
      icon: '✅',
      description: 'Task management with full CRUD operations',
      color: '#28a745',
    },
  ];

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Micro Frontend Demo</h1>
          <p className={styles.heroSubtitle}>
            Explore the power of Module Federation with React, TypeScript, and
            Rsbuild
          </p>
          <div className={styles.heroActions}>
            <Link
              to="/counter"
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              Try Counter App
            </Link>
            <Link
              to="/todos"
              className={`${styles.button} ${styles.buttonSecondary}`}
            >
              Try Todo App
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.apps}>
        <h2 className={styles.sectionTitle}>Available Applications</h2>
        <div className={styles.appGrid}>
          {apps.map(app => (
            <div key={app.name} className={styles.appCard}>
              <div className={styles.appIcon} style={{ color: app.color }}>
                {app.icon}
              </div>
              <h3 className={styles.appName}>{app.name}</h3>
              <p className={styles.appDescription}>{app.description}</p>
              <Link
                to={app.path}
                className={styles.button}
                style={{ backgroundColor: app.color, borderColor: app.color }}
              >
                Open {app.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Key Features</h2>
        <div className={styles.featureGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.tech}>
        <div className={styles.techCard}>
          <h2 className={styles.sectionTitle}>Technology Stack</h2>
          <div className={styles.techList}>
            <div className={styles.techItem}>
              <strong>Frontend:</strong> React 18, TypeScript, CSS Modules
            </div>
            <div className={styles.techItem}>
              <strong>Build Tool:</strong> Rsbuild with Module Federation
            </div>
            <div className={styles.techItem}>
              <strong>Routing:</strong> React Router v6
            </div>
            <div className={styles.techItem}>
              <strong>UI Components:</strong> Custom design system
            </div>
            <div className={styles.techItem}>
              <strong>State Management:</strong> React Hooks + localStorage
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
