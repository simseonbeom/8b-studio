import type { CSSProperties } from 'react';
import { steps, teamPhoto } from '../content';
import { BigTitle, Eyebrow } from './ui';

export function Process() {
  return (
    <section id="process" className="sec proc" aria-labelledby="h-process">
      <div className="wrap">
        <div className="sechead sechead--process">
          <BigTitle word="Process" count={steps.length} />
          <div className="sechead__side">
            <Eyebrow no={6} label="PROCESS" />
            <h2 id="h-process" className="h2-md reveal">
              다섯 단계,
              <br />
              매주 눈으로 확인합니다.
            </h2>
          </div>
        </div>

        <figure className="reveal team">
          <img src={teamPhoto.image} alt={teamPhoto.alt} />
          <figcaption>
            <i aria-hidden="true" />
            {teamPhoto.caption}
          </figcaption>
        </figure>

        <div className="procbar" aria-hidden="true">
          <div className="procfill" />
        </div>

        <ol className="g-5 steps">
          {steps.map((step) => (
            <li key={step.no} className="reveal step">
              <div className="en stepdot" style={{ '--range': step.range } as CSSProperties}>
                {step.no}
              </div>
              <div className="step__main">
                <div className="step__head">
                  <div className="step__name">{step.name}</div>
                  <div className="step__dur">
                    <span className="step__label">기간</span>
                    <span className="mono">{step.dur}</span>
                  </div>
                </div>
                <div className="step__out">
                  <div className="step__label">받는 산출물</div>
                  <div>{step.out}</div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
