# toastmasters

**Kakao Mini Toastmasters** 의 Table Topics 진행용 슬라이드 덱 모음.

브라우저에서 바로 여는 정적 HTML 이다. 빌드 도구도 의존성도 없다.

## 공개 주소 (GitHub Pages)

**<https://world.junho85.pe.kr/toastmasters/>**

| 덱 | 주소 |
| --- | --- |
| 랜딩 페이지 | <https://world.junho85.pe.kr/toastmasters/> |
| Food & Flavors | <https://world.junho85.pe.kr/toastmasters/tabletopics/food-and-flavors/> |
| Summer Vibes, Warm Talks | <https://world.junho85.pe.kr/toastmasters/tabletopics/summer/slide1.html> |

`main` 브랜치에 push 하면 GitHub Pages 가 자동으로 반영한다.

## 덱

| 덱 | 세션 | 형태 |
| --- | --- | --- |
| **Food & Flavors** | 2026-08-07 | 단일 페이지에 질문 5개. **발표자 창**(비공개 노트 + 타이머) 지원 |
| **Summer Vibes, Warm Talks** | 2025-05-28 | 슬라이드 6장 분리 (`slide1.html` ~ `slide6.html`) |

## 조작

**Food & Flavors** (단일 페이지 덱)

| 키 | 동작 |
| --- | --- |
| `→` `Space` `PageDown` | 다음 질문 |
| `←` `PageUp` | 이전 질문 |
| `Home` / `End` | 처음 / 마지막으로 |
| `F` | 전체화면 토글 |
| `P` | **발표자 창** 열기·닫기 |
| `Esc` | 전체화면 해제, 발표자 창 닫기 |

**Summer** (슬라이드 분리 덱)

| 키 | 동작 |
| --- | --- |
| `←` `→` | 이전 / 다음 슬라이드 |
| `Home` | 첫 슬라이드로 |
| `Esc` | 전체화면 해제 |

슬라이드는 전체화면을 전제로 만들었다. 열면 전체화면 안내가 뜨고, 전체화면 상태로 넘겨야 레이아웃이 의도대로 보인다.

**발표자 창**은 `window.open` 으로 별도 창을 띄워 진행자만 보는 노트와 타이머를 표시한다. 듀얼 모니터에서 한쪽은 청중용 슬라이드, 한쪽은 발표자 창으로 쓴다. 어느 창에서 `Esc` 를 눌러도 함께 닫힌다.

## 구조

```
index.html                              랜딩 페이지. 덱 목록
tabletopics/
├── food-and-flavors/index.html         단일 페이지 덱 + 발표자 창
└── summer/
    ├── slide1.html ~ slide6.html       슬라이드 6장
    ├── common.css                      공통 스타일
    └── common.js                       키보드 내비게이션, 전체화면 제어
```

## 새 덱 추가

1. `tabletopics/<덱-이름>/` 을 만든다
2. 단일 페이지면 Food & Flavors 를, 여러 장이면 Summer 를 복사해 시작한다
   (Summer 는 `common.css` / `common.js` 를 재사용한다)
3. `index.html` 랜딩 페이지에 카드를 추가한다
4. push 하면 GitHub Pages 에 반영된다

## 이력

- 2025-05 — Summer 덱으로 시작. 이후 `common.css` / `common.js` 로 내비게이션 공통화
- 2026-07 — Food & Flavors 덱 추가, GitHub Pages 랜딩 페이지 신설
- 2026-08 — 발표자 창(비공개 노트 + 타이머) 추가
- 2026-08-29 — 이 저장소의 사본이 Vultr `labs` 문서 루트 안에도 중첩 클론으로 있었으나,
  GitHub Pages 로 서빙되고 있어 **`labs` 쪽 사본은 제거**했다. 여기가 유일한 소스다

## 관련

진행 회차와 질문 준비는 별도 vault 노트에서 관리한다 (Mini Toastmasters).
