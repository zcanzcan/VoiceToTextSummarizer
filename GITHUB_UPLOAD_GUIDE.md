# GitHub 웹 업로드 가이드

## 🌐 웹 브라우저로 파일 업로드하기

GitHub에서 파일 업로드가 안 될 때는 다음 방법을 사용하세요:

### 1. GitHub 저장소 페이지에서 직접 업로드

**📂 단일 파일 업로드:**
1. GitHub 저장소 페이지 이동: https://github.com/zcanzcan/VoiceToTextSummarizer
2. **"Add file"** 버튼 클릭 → **"Upload files"** 선택
3. 파일을 드래그 앤 드롭하거나 **"choose your files"** 클릭
4. 커밋 메시지 입력 후 **"Commit changes"** 클릭

**📁 여러 파일 한번에 업로드:**
- 여러 파일을 선택해서 한번에 드래그 앤 드롭 가능
- 폴더 구조는 유지되지 않으므로 중요한 파일들만 먼저 업로드

### 2. 필수 업로드 파일 목록 (우선순위 순)

**⭐ 1순위 - 핵심 설정 파일:**
- `package.json`
- `README.md`
- `.gitignore`
- `tsconfig.json`

**⭐ 2순위 - 백엔드 코드:**
- `server/index.ts`
- `server/routes.ts`
- `server/db.ts`
- `server/storage.ts`

**⭐ 3순위 - 프론트엔드 코드:**
- `client/src/App.tsx`
- `client/src/main.tsx`
- `client/src/pages/home.tsx`
- `client/src/components/recording-interface.tsx`

**⭐ 4순위 - 스키마 및 설정:**
- `shared/schema.ts`
- `vite.config.ts`
- `tailwind.config.ts`

### 3. 폴더 구조 생성 방법

GitHub 웹에서는 폴더를 직접 만들 수 없으므로:

1. **"Create new file"** 클릭
2. 파일명에 경로 포함: `client/src/App.tsx`
3. `/`를 입력하면 자동으로 폴더가 생성됨
4. 파일 내용 붙여넣기 후 커밋

### 4. 대안: GitHub Desktop 사용

**GitHub Desktop 다운로드:**
- https://desktop.github.com/
- 설치 후 저장소 클론
- 파일 복사 → 커밋 → 푸시

### 5. 압축파일 활용법

현재 생성된 `voice-recording-project.tar.gz` 파일을:
1. 로컬에서 압축 해제
2. 폴더별로 나누어 GitHub에 업로드
3. 또는 전체 내용을 복사해서 직접 붙여넣기

## 🚀 빠른 시작 - 최소 파일셋

가장 중요한 파일들만 먼저 업로드:

1. `README.md` - 프로젝트 설명
2. `package.json` - 의존성 정보  
3. `server/index.ts` - 서버 시작점
4. `client/src/App.tsx` - 앱 메인
5. `shared/schema.ts` - 데이터 스키마

이 파일들만 있어도 프로젝트 구조를 파악할 수 있습니다!