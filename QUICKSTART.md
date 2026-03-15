# 龙虾工作室 · 快速开始

## 作品集网站

### 本地预览
```bash
cd lobster-studio
# 直接用浏览器打开 index.html 即可
start index.html   # Windows
```

### 部署到 GitHub Pages
1. 创建 GitHub 仓库 `lobster-studio`
2. 上传 `lobster-studio/` 所有文件
3. Settings → Pages → Source: `main` branch `/ (root)`
4. 访问 `https://你的用户名.github.io/lobster-studio/`

---

## 股票模拟盘

### 添加自选股
```bash
# 安装依赖（仅首次）
pip install requests beautifulsoup4

# 添加股票（使用6位代码）
python skills/stock-watcher/scripts/add_stock.py 000951
```

### 生成日报
```bash
python skills/stock-watcher/scripts/enhanced_report.py
```

输出示例：
```
📊 龙虾工作室 · 模拟盘日报
报告时间: 2026-03-14 10:05
...
```

### 自动推送（可选）
使用 OpenClaw cron 每天 9:00 自动运行：
```bash
openclaw cron add --name "daily-stock-report" --cron "0 9 * * *" --agent main --message "/run python skills/stock-watcher/scripts/enhanced_report.py"
```
(需要网关在线)

---

## 技能库清单

- `stock-watcher`: 自选股管理 + 报表
- `frontend`: React/Next.js/Tailwind 开发指南
- `remotion-video-toolkit`: 动态视频制作
- `agent-browser`: 浏览器自动化

---

## 商业报价

| 服务 | 价格 | 工期 |
|------|------|------|
| 基础网站（5页） | ¥2,000 | 3-5 天 |
| 高级网站（动态） | ¥5,000 | 1-2 周 |
| 营销视频（每分钟） | ¥1,000 | 按需 |
| 股票监控订阅 | ¥99/月 | 即时 |
| 自动化脚本 | ¥500起 | 2-3 天 |

---

联系：hello@lobster.studio | 通过 OpenClaw 飞书对接