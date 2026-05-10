# Next.js Shadcn Starter Kit

저장소 URL: https://github.com/tlswlsdntks/nextjs-shadcn-starter

📦 **Starter Kit 설명:**
- **기술 스택:** Next.js 16 + TypeScript + Tailwind CSS v4 + shadcn/ui + next-intl + next-themes
- **주요 기능:** 반응형 대시보드 레이아웃, 다크모드, 한국어/영어 다국어 지원(i18n), shadcn/ui 컴포넌트 예제, 랜딩 페이지
- **용도:** 포트폴리오·개인 프로젝트를 빠르게 시작할 때 사용

---

## 🚀 시작하기

```bash
git clone https://github.com/tlswlsdntks/nextjs-shadcn-starter.git
cd nextjs-shadcn-starter
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속 (자동으로 `/ko`로 이동)

---

## 🛠️ 기술 스택

| 기술 | 버전 | 역할 |
|------|------|------|
| Next.js | 16 | App Router, SSR, 라우팅 |
| TypeScript | 5 | 타입 안전성 |
| Tailwind CSS | v4 | 스타일링 |
| shadcn/ui | latest | UI 컴포넌트 (Base UI 기반) |
| next-intl | 4 | 다국어 지원 (한국어 / 영어) |
| next-themes | latest | 다크모드 / 라이트모드 |
| lucide-react | latest | 아이콘 |

---

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              # next-intl Provider
│   │   ├── page.tsx                # 랜딩 페이지
│   │   └── dashboard/
│   │       ├── layout.tsx          # 사이드바 레이아웃
│   │       ├── page.tsx            # 개요 (통계 + 활동 피드)
│   │       ├── analytics/          # 분석 차트
│   │       ├── components/         # UI 컴포넌트 쇼케이스
│   │       └── settings/           # 테마·언어 설정
│   └── layout.tsx
├── components/
│   ├── common/
│   │   ├── providers.tsx           # 전역 Provider 래퍼
│   │   ├── theme-toggle.tsx        # 라이트/다크/시스템 전환
│   │   └── language-switcher.tsx   # 한/영 언어 전환
│   ├── layout/
│   │   ├── sidebar.tsx             # 접힘/펼침 사이드바
│   │   ├── dashboard-header.tsx    # 대시보드 헤더
│   │   └── landing-header.tsx      # 랜딩 sticky 헤더
│   └── ui/                         # shadcn/ui 컴포넌트
├── i18n/
│   ├── routing.ts                  # 로케일 라우팅 설정
│   └── request.ts                  # 서버사이드 메시지 로드
└── proxy.ts                        # next-intl 미들웨어
messages/
├── ko.json                         # 한국어 번역
└── en.json                         # 영어 번역
```

---

## 🌟 주요 기능

### 랜딩 페이지
- 히어로 섹션 (CTA 버튼, GitHub 링크)
- 기술 스택 배지
- 기능 소개 카드 그리드
- sticky 헤더 (blur 효과)

### 대시보드
- **개요:** 통계 카드 4종 (총 사용자, 수익, 활성 프로젝트, 성장률) + 최근 활동 피드
- **분석:** 바 차트 + 핵심 지표 카드
- **컴포넌트:** Button, Badge, Input, Avatar, Skeleton, Separator 예제
- **설정:** 테마 전환, 언어 전환, 프로필 폼

### 공통
- 접힘/펼침 사이드바 (아이콘만 표시)
- 다크모드 / 라이트모드 / 시스템 설정 자동 감지
- 한국어 ↔ 영어 실시간 전환 (URL 기반: `/ko`, `/en`)

---

## 🌐 다국어 지원

기본 언어는 **한국어**(`/ko`)이며, **영어**(`/en`)로 전환 가능합니다.

번역 파일은 `messages/ko.json`, `messages/en.json`에서 관리합니다.

새 언어를 추가하려면 `src/i18n/routing.ts`의 `locales` 배열에 추가하고 해당 언어의 JSON 파일을 생성하세요.

---

## 🎨 테마 커스터마이징

`src/app/globals.css`의 CSS 변수를 수정하여 색상 테마를 변경할 수 있습니다.

---

## 📄 라이선스

MIT
