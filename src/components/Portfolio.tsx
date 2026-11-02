import { useEffect, useRef, useState } from 'react';
import { cases } from '../content';
import { lockScroll } from '../motion';
import { BigTitle, Eyebrow, Icon } from './ui';

function CaseMockup({ item, no }: { item: (typeof cases)[number]; no: string }) {
  return (
    <div className="mock">
      <span className="mono mock__case">CASE {no}</span>
      <div className="mock__browser" aria-hidden="true">
        <div className="mock__bar">
          <i />
          <i />
          <i />
        </div>
        <div className="mock__page">
          <div className="mock__top">
            <span className="en">{item.brand}</span>
            <span className="mock__pill" />
          </div>
          <div className="mock__banner" style={{ background: item.color }}>
            <span />
            <span />
          </div>
          <div className="mock__row">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseDialog({ index, onClose }: { index: number; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = index >= 0;
  const item = cases[Math.max(index, 0)];

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
    lockScroll(open);
  }, [open]);

  const body = [
    ['01 과제', item.task],
    ['02 해결', item.solve],
    ['03 결과', item.res],
  ];

  return (
    <dialog
      ref={ref}
      className="modal"
      data-lenis-prevent
      aria-labelledby="m-title"
      onClose={onClose}
      onClick={(event) => {
        // 패딩은 안쪽 div에 있으므로 dialog 자체가 눌렸다면 바깥(backdrop) 클릭이다.
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal__inner">
        <div className="modal__head">
          <div>
            <span className="mono modal__case">
              CASE {String(index + 1).padStart(2, '0')} · {item.ind}
            </span>
            <h3 id="m-title">{item.title}</h3>
          </div>
          <button type="button" className="btn btn-g btn-icon" aria-label="닫기" onClick={onClose}>
            <Icon>
              <path d="M6 6l12 12M18 6L6 18" />
            </Icon>
          </button>
        </div>
        <ol className="modal__list">
          {body.map(([label, text]) => (
            <li key={label}>
              <span className="mono">{label}</span>
              <div>{text}</div>
            </li>
          ))}
        </ol>
        <a className="btn btn-p modal__cta" href="#contact" onClick={onClose}>
          비슷한 프로젝트 상담하기
        </a>
      </div>
    </dialog>
  );
}

export function Portfolio() {
  const [active, setActive] = useState(-1);

  return (
    <section id="portfolio" className="sec" aria-labelledby="h-portfolio">
      <div className="wrap">
        <div className="sechead">
          <BigTitle word="Selected" count={cases.length} />
          <div className="sechead__side">
            <Eyebrow no={5} label="PORTFOLIO" />
            <h2 id="h-portfolio" className="h2-md h2-md--tight reveal">
              만든 것으로 말합니다.
            </h2>
            <p className="sechead__note reveal">카드를 누르면 과제 → 해결 → 결과를 볼 수 있습니다.</p>
          </div>
        </div>
        <div className="g-3">
          {cases.map((item, i) => {
            const no = `0${i + 1}`;
            return (
              <button key={no} type="button" className="card reveal case" aria-haspopup="dialog" onClick={() => setActive(i)}>
                <CaseMockup item={item} no={no} />
                <div className="case__body">
                  <div className="case__title">
                    <span>{item.title}</span>
                    <span className="mono">{item.ind}</span>
                  </div>
                  <div className="case__result">
                    <span className="en">{item.result}</span>
                    <span>{item.metric}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <CaseDialog index={active} onClose={() => setActive(-1)} />
    </section>
  );
}
