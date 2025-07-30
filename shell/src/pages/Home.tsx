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
      title: '模块联邦',
      description: '运行时动态加载微前端应用',
    },
    {
      icon: '⚡',
      title: '高性能',
      description: '代码分割和懒加载优化构建',
    },
    {
      icon: '🔧',
      title: '开发体验',
      description: '热重载、TypeScript 支持和现代化工具',
    },
    {
      icon: '📱',
      title: '响应式设计',
      description: '在桌面和移动设备上无缝运行',
    },
    {
      icon: '🎨',
      title: '共享 UI 组件',
      description: '所有应用统一的设计系统',
    },
    {
      icon: '💾',
      title: '数据持久化',
      description: '本地存储集成的状态管理',
    },
  ];

  const apps = [
    {
      name: '计数器',
      path: '/counter',
      icon: '🔢',
      description: '带持久化状态的简单计数器',
      color: '#f77f00',
    },
    {
      name: '待办事项',
      path: '/todos',
      icon: '✅',
      description: '完整增删改查功能的任务管理',
      color: '#f77f00',
    },
  ];

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>欢迎使用微前端生态平台</h1>
          <p className={styles.heroSubtitle}>
            探索基于 React、TypeScript 和 Rsbuild 的模块联邦（Module Federation）强大功能
          </p>
          <div className={styles.heroActions}>
            <Link
              to="/counter"
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              体验计数器
            </Link>
            <Link
              to="/todos"
              className={`${styles.button} ${styles.buttonSecondary}`}
            >
              体验待办事项
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.apps}>
        <h2 className={styles.sectionTitle}>简单应用</h2>
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
                打开{app.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>核心特性</h2>
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
    </div>
  );
};

export default Home;
