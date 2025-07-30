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
            使用 ❤️ 构建，基于{' '}
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
            © 2025 微前端生态平台. 924361501@qq.com 保留所有权利.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
