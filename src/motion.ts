import Lenis from 'lenis';

let lenis: Lenis | null = null;

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * 휠 스크롤을 부드럽게 하고 페이지 안 앵커 이동도 같은 곡선으로 맞춘다.
 * 터치는 기기 고유의 관성 스크롤을 그대로 쓴다. 착지 위치는 각 섹션의 scroll-margin-top을 따른다.
 */
export function startSmoothScroll() {
  if (prefersReducedMotion()) return () => {};
  lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: true });
  return () => {
    lenis?.destroy();
    lenis = null;
  };
}

/** 모달이 열린 동안 뒤쪽 페이지가 스크롤되지 않게 한다. */
export function lockScroll(locked: boolean) {
  if (locked) lenis?.stop();
  else lenis?.start();
}

/** .reveal 요소가 화면에 들어오면 .is-in을 붙인다. */
export function startReveal() {
  const targets = document.querySelectorAll('.reveal');

  if (prefersReducedMotion()) {
    targets.forEach((el) => el.classList.add('is-in'));
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    },
    // 위쪽 여백을 크게 잡아, End 키처럼 건너뛰어 지나친 요소도 함께 표시되게 한다.
    { rootMargin: '100000px 0px -8% 0px' },
  );
  targets.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}
