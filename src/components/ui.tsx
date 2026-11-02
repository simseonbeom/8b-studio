import type { ReactNode } from 'react';

const BIT_POSITIONS = [7, 6, 5, 4, 3, 2, 1, 0];

/** 섹션 번호를 8칸 이진수로 표시한 라벨. 예: 03 — PROBLEM */
export function Eyebrow({ no, label, dark = false }: { no: number; label: string; dark?: boolean }) {
  return (
    <div className={dark ? 'eyebrow mono eyebrow--dark reveal' : 'eyebrow mono reveal'}>
      <span className="eyebrow__bits" aria-hidden="true">
        {BIT_POSITIONS.map((position) => (
          <span key={position} className={(no >> position) & 1 ? 'is-on' : undefined} />
        ))}
      </span>
      {String(no).padStart(2, '0')} — {label}
    </div>
  );
}

/** 큰 영문 섹션 타이틀과 숫자 배지. 스크린리더용 제목은 각 섹션의 h2가 맡는다. */
export function BigTitle({ word, count, size }: { word: string; count: number; size?: 'faq' }) {
  return (
    <div className={size ? `bigtitle bigtitle--${size} reveal` : 'bigtitle reveal'} aria-hidden="true">
      <span className="en bigtitle__word">{word}</span>
      <span className="en bigtitle__badge">{count}</span>
    </div>
  );
}

/** 카드 우상단의 2×4 비트. 호버하면 하나씩 켜진다. */
export function HoverBits({ className }: { className?: string }) {
  return (
    <div className={className ? `hoverbits ${className}` : 'hoverbits'} aria-hidden="true">
      {BIT_POSITIONS.map((position) => (
        <i key={position} className="bit" />
      ))}
    </div>
  );
}

export function Icon({ size = 18, strokeWidth = 2, children }: { size?: number; strokeWidth?: number; children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}
