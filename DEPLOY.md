# 部署龙虾工作室作品集

## 步骤 1: 创建 GitHub 仓库

1. 登录 GitHub (https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名: `lobster-studio`
4. 选择 Public (推荐) 或 Private
5. **不要** 初始化 README、.gitignore、license
6. 点击 "Create repository"

## 步骤 2: 关联本地仓库并推送

在 lobster-studio 目录执行：

```bash
git remote add origin https://github.com/你的用户名/lobster-studio.git
git branch -M main
git push -u origin main
```

如果使用 SSH：
```bash
git remote add origin git@github.com:你的用户名/lobster-studio.git
git branch -M main
git push -u origin main
```

## 步骤 3: 启用 GitHub Pages

1. 进入仓库 Settings
2. 左侧导航 "Pages"
3. Source: 选择 "Deploy from a branch"
4. Branch: `main` / `/(root)`
5. 点击 Save
6. 访问 `https://你的用户名.github.io/lobster-studio/`

---

## 自动脚本 (可选)

将以下内容保存为 `deploy.bat`，运行前确保已安装 Git 并配置 SSH 或 PAT：

```batch
@echo off
cd /d "C:\Users\Administrator\.openclaw\workspace\lobster-studio"
git add .
git commit -m "Deploy update %date% %time%"
git push origin main
echo Done.
pause
```

---

**需要帮助？** 告诉我你的 GitHub 用户名，我可以帮你准备 remote URL。