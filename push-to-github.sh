#!/bin/bash

# GitHub 저장소 푸시 스크립트
# 사용법: ./push-to-github.sh [저장소_URL]

echo "🚀 GitHub 저장소 푸시 스크립트"
echo "================================"

# 저장소 URL 확인
if [ -z "$1" ]; then
    echo "❌ 사용법: ./push-to-github.sh [저장소_URL]"
    echo "예시: ./push-to-github.sh https://github.com/사용자명/저장소명.git"
    exit 1
fi

REPO_URL=$1

echo "📂 현재 디렉토리: $(pwd)"
echo "🔗 대상 저장소: $REPO_URL"

# Git 초기화
echo "🔧 Git 초기화 중..."
git init

# .gitignore 파일이 없으면 생성
if [ ! -f ".gitignore" ]; then
    echo "📝 .gitignore 파일 생성 중..."
    cat > .gitignore << 'EOF'
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production builds
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Database
*.db
*.sqlite

# Uploads
uploads/*
!uploads/.gitkeep

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# IDE files
.vscode/
.idea/
*.swp
*.swo

# Temporary files
*.tmp
*.temp

# Compressed files (프로젝트 백업)
*.tar.gz
*.zip
EOF
fi

# uploads 디렉토리 유지를 위한 .gitkeep 생성
if [ -d "uploads" ] && [ ! -f "uploads/.gitkeep" ]; then
    echo "📁 uploads/.gitkeep 생성 중..."
    touch uploads/.gitkeep
fi

# 모든 파일 추가
echo "📦 파일 추가 중..."
git add .

# 초기 커밋
echo "💾 초기 커밋 생성 중..."
git commit -m "Initial commit: 한국어 음성녹음 및 전사 서비스

🎯 주요 기능:
- React + TypeScript 기반 프론트엔드
- Express.js + PostgreSQL 백엔드
- AssemblyAI 음성 전사 API 연동
- 화자 분리 및 분석 기능
- 모바일 최적화 및 PWA 지원
- 백그라운드 녹음 기능

🛠️ 기술 스택:
- Frontend: React, TypeScript, Tailwind CSS, shadcn/ui
- Backend: Node.js, Express, Drizzle ORM
- Database: PostgreSQL (Neon)
- API: AssemblyAI, Anthropic Claude
- Build: Vite, tsx

📱 특징:
- 30분+ 장시간 녹음 최적화
- Speed Boost로 40-60% 빠른 처리
- 모바일 앱 전환 시에도 녹음 지속
- 실시간 전사 상태 모니터링"

# 메인 브랜치 설정
echo "🌿 메인 브랜치 설정 중..."
git branch -M main

# 원격 저장소 추가
echo "🔗 원격 저장소 연결 중..."
git remote add origin "$REPO_URL"

# 푸시
echo "⬆️ GitHub에 푸시 중..."
git push -u origin main

echo ""
echo "✅ 푸시 완료!"
echo "🌐 저장소 확인: $REPO_URL"
echo ""
echo "📋 다음 단계:"
echo "1. GitHub 저장소 페이지 새로고침"
echo "2. README.md 파일 확인"
echo "3. 프로젝트 설명 및 설치 방법 검토"