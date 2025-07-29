import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import styles from './Layout.module.css';

/**
 * Main layout component that wraps all pages
 */
export const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>
            Built with ❤️ using{' '}
            <a
              href="https://rsbuild.dev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Rsbuild
            </a>{' '}
            +{' '}
            <a
              href="https://module-federation.io"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Module Federation
            </a>
          </p>
          <p className={styles.copyright}>
            © 2024 Micro Frontend Demo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
