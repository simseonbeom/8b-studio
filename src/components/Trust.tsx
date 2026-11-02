import { logos, stats } from '../content';
import { useCountUp } from '../hooks';
import { Eyebrow } from './ui';

function Stat({ stat }: { stat: (typeof stats)[number] }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div className="stat reveal">
      <div className="stat__head">
        <span className="stat__label">{stat.label}</span>
        <span className="mono stat__note">{stat.note}</span>
      </div>
      <div className="stat__body en">
        <span ref={ref} className="stat__value">
          {value}
        </span>
        <span className="stat__unit">{stat.unit}</span>
      </div>
    </div>
  );
}

export function Trust() {
  return (
    <section className="sec sec--trust" aria-labelledby="h-trust">
      <div className="wrap">
        <div className="g12 lead">
          <div className="s4">
            <Eyebrow no={2} label="TRUST" />
          </div>
          <h2 id="h-trust" className="s8 h2-lg reveal">
            말보다 숫자로 먼저
            <br />
            보여드립니다.
          </h2>
        </div>
        <div className="g-3 stats">
          {stats.map((stat) => (
            <Stat key={stat.label} stat={stat} />
          ))}
        </div>
      </div>

      <div className="logos reveal" aria-label="고객사 로고">
        <div className="marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="logo" aria-hidden={i >= logos.length || undefined}>
              <div className="logo__tile">
                <span className="en logo__name">
                  <i style={{ borderRadius: logo.radius }} />
                  {logo.name}
                </span>
              </div>
              <div className="logo__meta">
                <div>{logo.kr}</div>
                <div className="mono">{logo.ind}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
