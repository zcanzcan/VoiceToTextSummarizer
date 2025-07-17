#!/bin/bash

echo "🗂️ GitHub 업로드용 코드 패키지 생성 중..."

# 임시 디렉토리 생성
TEMP_DIR="/tmp/voice-recording-app"
rm -rf $TEMP_DIR
mkdir -p $TEMP_DIR

# 핵심 파일들만 복사
echo "📁 핵심 파일 복사 중..."

# 루트 설정 파일들
cp package.json $TEMP_DIR/
cp package-lock.json $TEMP_DIR/
cp tsconfig.json $TEMP_DIR/
cp vite.config.ts $TEMP_DIR/
cp tailwind.config.ts $TEMP_DIR/
cp postcss.config.js $TEMP_DIR/
cp components.json $TEMP_DIR/
cp drizzle.config.ts $TEMP_DIR/
cp .gitignore $TEMP_DIR/
cp README.md $TEMP_DIR/
cp push-to-github.sh $TEMP_DIR/

# 서버 코드
mkdir -p $TEMP_DIR/server
cp server/*.ts $TEMP_DIR/server/

# 클라이언트 코드
mkdir -p $TEMP_DIR/client/src
cp -r client/src/* $TEMP_DIR/client/src/
cp client/index.html $TEMP_DIR/client/
mkdir -p $TEMP_DIR/client/public
cp -r client/public/* $TEMP_DIR/client/public/

# 공유 스키마
mkdir -p $TEMP_DIR/shared
cp shared/schema.ts $TEMP_DIR/shared/

# uploads 디렉토리 (빈 상태로)
mkdir -p $TEMP_DIR/uploads
echo "# uploads 디렉토리를 Git에 포함시키기 위한 파일" > $TEMP_DIR/uploads/.gitkeep

# 압축 생성
cd /tmp
echo "📦 압축 파일 생성 중..."
tar -czf voice-recording-github.tar.gz voice-recording-app/

# 원래 위치로 이동
mv voice-recording-github.tar.gz /home/runner/workspace/

echo "✅ GitHub 업로드용 파일 생성 완료!"
echo "📁 파일명: voice-recording-github.tar.gz"
echo "📊 파일 크기: $(ls -lh /home/runner/workspace/voice-recording-github.tar.gz | awk '{print $5}')"
echo ""
echo "🚀 GitHub 업로드 방법:"
echo "1. Files에서 voice-recording-github.tar.gz 다운로드"
echo "2. 로컬에서 압축 해제"
echo "3. GitHub 저장소에 폴더별로 업로드"
echo "4. 또는 push-to-github.sh 스크립트 사용"