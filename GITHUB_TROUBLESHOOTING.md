# GitHub 저장소 업로드 문제 해결

## 🚨 "Add file" 버튼이 안 보이는 경우

### 1. 저장소 권한 문제
**원인:** 저장소가 올바르게 생성되지 않았거나 권한이 없음

**해결방법:**
1. 저장소 삭제 후 다시 생성
   - Settings → Danger Zone → Delete this repository
2. 새 저장소 생성 시 체크사항:
   - ✅ Public으로 설정
   - ✅ "Add a README file" 체크 해제
   - ✅ ".gitignore" 선택 안 함
   - ✅ "Choose a license" 선택 안 함

### 2. 브라우저 문제
**해결방법:**
1. 페이지 새로고침 (Ctrl+F5 또는 Cmd+Shift+R)
2. 다른 브라우저 시도 (Chrome, Firefox, Edge)
3. 시크릿/프라이빗 모드에서 접속
4. 브라우저 캐시 삭제

### 3. 저장소 상태 확인
**빈 저장소인 경우:**
- "Add file" 버튼 대신 "uploading an existing file" 링크가 있을 수 있음
- 또는 "creating a new file" 링크 클릭

**이미 파일이 있는 경우:**
- 저장소 메인 페이지에서 "Add file" 버튼이 코드 목록 위쪽에 위치

## 🔄 대안 방법

### 방법 1: 터미널에서 Git 명령어 사용
```bash
# 1. 저장소 클론 (빈 저장소여도 클론 가능)
git clone https://github.com/zcanzcan/VoiceToTextSummarizer.git
cd VoiceToTextSummarizer

# 2. 파일 복사 (압축 해제한 파일들을 이 폴더로 복사)

# 3. Git 추가 및 커밋
git add .
git commit -m "Initial commit: 한국어 음성녹음 서비스"
git push origin main
```

### 방법 2: GitHub CLI 사용
```bash
# GitHub CLI 설치 후
gh repo clone zcanzcan/VoiceToTextSummarizer
# 파일 복사 후 push
```

### 방법 3: 드래그 앤 드롭
1. GitHub 저장소 페이지에서 README.md 영역을 찾음
2. 파일을 직접 브라우저 창에 드래그 앤 드롭
3. 여러 파일 선택해서 한번에 업로드

### 방법 4: 직접 파일 생성
1. 저장소에서 "Create new file" 클릭
2. 파일명: `README.md`
3. 내용 붙여넣기 후 커밋
4. 이후 "Add file" 버튼이 나타남

## ⚡ 빠른 해결책

가장 확실한 방법:
1. 저장소 완전 삭제
2. 새로 생성 (아무 옵션도 체크하지 않고)
3. 생성 직후 "uploading an existing file" 링크 클릭
4. 파일 업로드

## 📞 추가 확인사항

- GitHub 로그인 상태 확인
- 저장소 소유자가 본인인지 확인
- 네트워크 연결 상태 확인
- GitHub 서비스 상태 확인: https://www.githubstatus.com/