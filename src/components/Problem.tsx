import { problems } from '../content';
import { Eyebrow, HoverBits, Icon } from './ui';

const ICONS = {
  receipt: (
    <>
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" />
      <path d="M9 8h6M9 12h3" />
      <path d="M15 15l2-2 2 2" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
      <path d="M3 3l18 18" />
    </>
  ),
  link: (
    <>
      <path d="M9 15l-2 2a3 3 0 0 1-4-4l2-2" />
      <path d="M15 9l2-2a3 3 0 0 1 4 4l-2 2" />
      <path d="M10 4v2M4 10h2M14 20v-2M20 14h-2" />
    </>
  ),
};

export function Problem() {
  return (
    <section className="sec" aria-labelledby="h-problem">
      <div className="wrap">
        <div className="g12 lead lead--problem">
          <div className="s4">
            <Eyebrow no={3} label="PROBLEM" />
          </div>
          <h2 id="h-problem" className="s8 h2-lg reveal">
            외주 맡겼다가 이런 일,
            <br />
            겪어보셨나요?
          </h2>
        </div>
        <div className="g-3 problems">
          {problems.map((problem) => (
            <div key={problem.no} className="card reveal problem">
              <div className="problem__top">
                <span className="en problem__no">{problem.no}</span>
                <HoverBits />
              </div>
              <div className="problem__body">
                <span className="problem__icon">
                  <Icon size={32} strokeWidth={1.6}>
                    {ICONS[problem.icon]}
                  </Icon>
                </span>
                <h3>{problem.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
