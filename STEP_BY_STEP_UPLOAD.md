# 단계별 GitHub 업로드 가이드

## 🎯 현재 상황 해결법

"Add file" 버튼이 안 보인다면 저장소가 제대로 생성되지 않았을 가능성이 높습니다.

## 📋 해결 단계

### 1단계: 저장소 재생성
1. **현재 저장소 삭제:**
   - https://github.com/zcanzcan/VoiceToTextSummarizer/settings
   - 맨 아래 "Delete this repository" 클릭
   - 저장소명 입력해서 삭제 확인

2. **새 저장소 생성:**
   - GitHub 메인페이지에서 "New" 버튼 클릭
   - Repository name: `VoiceToTextSummarizer`
   - Description: `한국어 음성녹음 및 AI 전사 서비스`
   - ✅ Public 선택
   - ❌ "Add a README file" 체크 해제
   - ❌ ".gitignore" 선택 안 함
   - ❌ "Choose a license" 선택 안 함
   - "Create repository" 클릭

### 2단계: 첫 파일 업로드
새로 생성된 빈 저장소에서:
1. **"uploading an existing file"** 링크 클릭
2. 또는 **"creating a new file"** 링크 클릭

### 3단계: README 파일 먼저 생성
1. "Create new file" 클릭
2. 파일명: `README.md`
3. 아래 내용 붙여넣기:

```markdown
# 한국어 음성녹음 및 전사 서비스

🎯 AI 기반 음성 녹음, 전사, 분석을 제공하는 웹 애플리케이션

## 주요 기능
- 백그라운드 녹음 (앱 전환 시에도 지속)
- AssemblyAI 고정밀 전사
- 화자 분리 및 분석
- 모바일 최적화

## 기술 스택
- Frontend: React + TypeScript + Tailwind CSS
- Backend: Node.js + Express + PostgreSQL
- AI: AssemblyAI + Anthropic Claude

파일 업로드 중입니다...
```

4. "Commit new file" 클릭

### 4단계: 나머지 파일 업로드
이제 "Add file" 버튼이 나타날 것입니다:
1. "Add file" → "Upload files" 클릭
2. 파일들을 드래그 앤 드롭
3. 커밋 메시지 입력 후 "Commit changes"

## 🗂️ 업로드 순서 (중요한 것부터)

**1차: 설정 파일들**
- `package.json`
- `tsconfig.json`
- `.gitignore`

**2차: 서버 코드**
- `server/` 폴더의 모든 파일들

**3차: 클라이언트 코드**
- `client/` 폴더의 모든 파일들

**4차: 기타**
- `shared/`, 설정 파일들

## 💡 꿀팁
- 한 번에 최대 100MB까지 업로드 가능
- 여러 파일을 선택해서 한번에 업로드 가능
- 폴더 구조를 만들려면 파일명에 경로 포함 (예: `server/index.ts`)