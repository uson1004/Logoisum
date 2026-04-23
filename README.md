# Logoisum

간단하고 직관적인 React + Vite 프로젝트 템플릿입니다. 이 저장소는 TypeScript, Vite, React를 사용하여 빠르게 개발을 시작할 수 있도록 구성되어 있습니다.

## ⚡ 주요 정보

- 프레임워크: React 19
- 번들러: Vite
- 언어: TypeScript

## 🚀 주요 기능

- 빠른 개발 서버(hot reload)
- TypeScript 빌드 구성
- ESLint 기반 기본 린팅 스크립트

## 📥 설치 (로컬)

다음 명령으로 의존성을 설치하고 개발 서버를 실행합니다.

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

개발 서버는 기본적으로 http://localhost:5173 에서 열립니다 (Vite 기본 포트).

## 🛠️ 빌드 및 미리보기

```bash
# TypeScript 빌드 후 Vite로 번들링
npm run build

# 로컬 미리보기
npm run preview
```

## 📁 환경 변수

로컬에서 비밀값(예: API 키)을 사용해야 할 경우 루트에 `.env` 또는 `.env.local` 파일을 생성하세요. 이 저장소의 `.gitignore`에 `.env` 항목이 아직 없다면 커밋 전에 추가하는 것을 권장합니다.

예시 `.gitignore` 항목:

```
.env
.env.local
.env.*.local
```

## ✅ 보안 체크리스트 (GitHub에 올리기 전)

1. `.env`, 개인키, 시크릿 값이 커밋되어 있지 않은지 확인하세요.
2. `dist/` 같은 빌드 산출물이 커밋되어 있지 않은지 확인하세요.
3. 민감한 데이터가 실수로 푸시되었다면 해당 키를 즉시 회수하고(`revoke`/`rotate`) 히스토리에서 제거하세요.

## 🙌 기여하기

작은 버그 보고나 개선 제안 환영합니다. 풀 리퀘스트를 통해 변경을 제안해 주세요.

기본 코드 스타일은 ESLint 규칙을 따릅니다. 로컬에서 린트를 실행하려면:

```bash
npm run lint
```

## 📞 연락처

문제가 있거나 도움이 필요하면 이슈(issues)로 남겨주세요.

---

프로젝트를 GitHub에 올려도 되는지 확인하는 데 도움이 필요하면 제가 추가로 검사해 드리겠습니다 (예: 과거 커밋 스캔, `.env` 자동 추가 등).
# Logoisum
