import { services } from '../content';
import { BigTitle, Eyebrow, HoverBits } from './ui';

export function Services() {
  return (
    <section id="services" className="sec" aria-labelledby="h-services">
      <div className="wrap">
        <div className="sechead">
          <BigTitle word="Services" count={services.length} />
          <div className="sechead__side">
            <Eyebrow no={4} label="SERVICES" />
            <h2 id="h-services" className="h2-md reveal">
              필요한 것만,
              <br className="d-only" /> 한 팀에서 끝까지.
            </h2>
          </div>
        </div>
        <div className="g-4">
          {services.map((service) => (
            <div key={service.no} className="card reveal service">
              <div className="service__photo">
                <img src={service.image} alt={service.alt} />
              </div>
              <div className="service__body">
                <div className="service__title">
                  <span className="en">{service.name}</span>
                  <span className="mono">{service.no}</span>
                </div>
                <p>{service.desc}</p>
                <div className="service__output">
                  <div className="mono service__output-label">예시 산출물</div>
                  <div className="service__tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <HoverBits className="service__bits" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
