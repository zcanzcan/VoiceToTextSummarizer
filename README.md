# 한국어 음성녹음 및 전사 서비스

🎯 **AI 기반 음성 녹음, 전사, 분석을 제공하는 웹 애플리케이션**

장시간 회의나 강의를 녹음하고, 자동으로 텍스트로 변환하여 화자별 분석과 요약을 제공합니다.

## ✨ 주요 기능

### 🎙️ 고급 녹음 기능
- **백그라운드 녹음**: 다른 앱으로 전환해도 녹음 지속
- **장시간 녹음**: 30분 이상 장시간 녹음 최적화
- **일시정지/재개**: 언제든 녹음 중단 및 재시작
- **모바일 최적화**: 터치 인터페이스 및 반응형 디자인

### 🤖 AI 전사 및 분석
- **고정밀 전사**: AssemblyAI Speed Boost로 40-60% 빠른 처리
- **화자 분리**: 자동 화자 식별 및 이름 편집 가능
- **텍스트 편집**: 전사 내용 실시간 수정
- **스마트 요약**: Anthropic Claude를 이용한 지능형 요약

### 📱 사용자 경험
- **실시간 상태**: 처리 진행률 및 상태 실시간 표시
- **PWA 지원**: 모바일 앱처럼 설치 및 사용 가능
- **한국어 최적화**: 완전한 한국어 인터페이스

## 🛠️ 기술 스택

### Frontend
- **React 18** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- **TanStack Query** (서버 상태 관리)
- **Wouter** (라우팅)
- **Vite** (빌드 도구)

### Backend
- **Node.js** + **Express.js**
- **PostgreSQL** + **Drizzle ORM**
- **Neon Database** (서버리스 PostgreSQL)
- **Multer** (파일 업로드)

### AI & APIs
- **AssemblyAI** (음성 전사)
- **Anthropic Claude 4** (텍스트 분석 및 요약)

## 🚀 설치 및 실행

### 필수 요구사항
- Node.js 18+
- PostgreSQL 데이터베이스
- AssemblyAI API 키
- Anthropic API 키 (선택사항)

### 1. 저장소 클론
```bash
git clone https://github.com/사용자명/저장소명.git
cd 저장소명
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경 변수 설정
`.env` 파일을 생성하고 다음 내용을 추가:

```env
# 데이터베이스
DATABASE_URL="postgresql://user:password@host:port/database"

# API 키
ASSEMBLYAI_API_KEY="your_assemblyai_api_key"
ANTHROPIC_API_KEY="your_anthropic_api_key"

# 서버 설정
NODE_ENV="development"
PORT=5000
```

### 4. 데이터베이스 설정
```bash
# 스키마 생성
npm run db:push
```

### 5. 개발 서버 실행
```bash
npm run dev
```

서버가 `http://localhost:5000`에서 실행됩니다.

## 📁 프로젝트 구조

```
├── client/                 # React 프론트엔드
│   ├── src/
│   │   ├── components/     # UI 컴포넌트
│   │   ├── pages/          # 페이지 컴포넌트
│   │   ├── lib/            # 유틸리티 및 설정
│   │   └── hooks/          # 커스텀 훅
│   └── public/             # 정적 파일
├── server/                 # Express 백엔드
│   ├── index.ts            # 서버 진입점
│   ├── routes.ts           # API 라우트
│   ├── db.ts               # 데이터베이스 연결
│   └── storage.ts          # 데이터 저장 로직
├── shared/                 # 공유 타입 및 스키마
│   └── schema.ts           # Drizzle 스키마
└── uploads/                # 업로드된 오디오 파일
```

## 🎯 사용 방법

### 1. 녹음 시작
- 홈페이지에서 "회의" 또는 "강의" 선택
- 제목 입력 후 녹음 버튼 클릭
- 백그라운드에서도 녹음 지속

### 2. 전사 처리
- 녹음 완료 후 자동으로 전사 시작
- 실시간 진행률 확인 가능
- Speed Boost로 빠른 처리

### 3. 결과 확인 및 편집
- 화자별 구분된 전사 내용 확인
- 텍스트 직접 편집 가능
- 화자 이름 변경 가능
- AI 요약 및 키워드 확인

## 📊 성능 최적화

- **Speed Boost**: AssemblyAI 병렬 처리로 40-60% 속도 향상
- **메모리 최적화**: 대용량 파일 처리 최적화
- **실시간 업데이트**: WebSocket 기반 상태 동기화
- **모바일 최적화**: 터치 및 배터리 효율성 고려

## 🔧 개발 도구

### 스크립트
```bash
npm run dev          # 개발 서버 실행
npm run build        # 프로덕션 빌드
npm run db:push      # 데이터베이스 스키마 업데이트
npm run db:studio    # 데이터베이스 GUI 실행
```

### 코드 품질
- TypeScript 엄격 모드
- ESLint + Prettier 설정
- Git hooks 자동 검사

## 📝 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

## 🤝 기여하기

1. Fork 생성
2. 기능 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 Push (`git push origin feature/amazing-feature`)
5. Pull Request 생성

## 📞 문의 및 지원

프로젝트 관련 문의나 버그 리포트는 GitHub Issues를 이용해 주세요.

---

**Made with ❤️ for better voice transcription experience**