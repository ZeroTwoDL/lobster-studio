import type { NextPage } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>龙虾工作室 | Lobster Studio</title>
        <meta name="description" content="Vex's tech studio — 前端开发、视频制作、自动化脚本" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className={styles.title}>🦞 龙虾工作室</h1>
          <p className={styles.subtitle}>
            Tech for humans. 专注高质量前端、动态视频、自动化工具。
          </p>

          <section className={styles.services}>
            <h2>服务</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>🌐 前端开发</h3>
                <p>Next.js, React, Tailwind。快速交付响应式网站。</p>
              </div>
              <div className={styles.card}>
                <h3>🎬 动态视频</h3>
                <p>使用 Remotion 制作营销视频、数据可视化动画。</p>
              </div>
              <div className={styles.card}>
                <h3>📈 股票监控</h3>
                <p>定制自选股监控、自动报告推送。</p>
              </div>
              <div className={styles.card}>
                <h3>🤖 自动化脚本</h3>
                <p>数据抓取、文件处理、工作流自动化。</p>
              </div>
            </div>
          </section>

          <section className={styles.contact}>
            <h2>联系</h2>
            <p>📧 邮箱: hello@lobster.studio (模拟)</p>
            <p>💬 飞书: 通过 OpenClaw 对接</p>
          </section>
        </div>
      </main>
    </>
  )
}

export default Home