import { useState } from 'react';
import { reviews } from '../content';
import { useIsMobile } from '../hooks';
import { Eyebrow, Icon } from './ui';

export function Reviews() {
  const mobile = useIsMobile();
  const [current, setCurrent] = useState(0);
  const count = reviews.length;

  const prev = (
    <button type="button" className="btn btn-g btn-icon" aria-label="이전 후기" onClick={() => setCurrent((current + count - 1) % count)}>
      <Icon>
        <path d="M15 6l-6 6 6 6" />
      </Icon>
    </button>
  );
  const next = (
    <button type="button" className="btn btn-g btn-icon" aria-label="다음 후기" onClick={() => setCurrent((current + 1) % count)}>
      <Icon>
        <path d="M9 6l6 6-6 6" />
      </Icon>
    </button>
  );
  const dots = (
    <div className="dots">
      {reviews.map((_, i) => (
        <button key={i} type="button" className={i === current ? 'dot is-on' : 'dot'} aria-label={`후기 ${i + 1} 보기`} onClick={() => setCurrent(i)}>
          <span />
        </button>
      ))}
    </div>
  );

  return (
    <section className="sec" aria-labelledby="h-reviews">
      <div className="wrap">
        <div className="g12 lead lead--reviews">
          <div className="s4">
            <Eyebrow no={7} label="REVIEWS" />
          </div>
          <div className="s8 reviews__head">
            <h2 id="h-reviews" className="h2-lg reveal">
              먼저 맡겨본
              <br />
              대표님들의 이야기.
            </h2>
            {!mobile && (
              <div className="reviews__arrows">
                {prev}
                {next}
              </div>
            )}
          </div>
        </div>

        <div className="carousel reveal" aria-roledescription="carousel" aria-label="고객 후기">
          <div className="carousel__track" style={{ transform: `translateX(${-100 * current}%)` }}>
            {reviews.map((review, i) => (
              <figure key={review.name} className="rv" aria-roledescription="slide" aria-label={`${i + 1} / ${count}`} aria-hidden={i !== current}>
                <div className="rv__side">
                  <span className="en rv__mark" aria-hidden="true">
                    “
                  </span>
                  <figcaption>
                    <span className="en rv__avatar" aria-hidden="true">
                      {review.initial}
                    </span>
                    <span className="rv__who">
                      <strong>{review.name}</strong>
                      <span>
                        {review.role} · {review.company}
                      </span>
                    </span>
                  </figcaption>
                </div>
                <blockquote>{review.text}</blockquote>
              </figure>
            ))}
          </div>
        </div>

        {mobile ? (
          <div className="reviews__controls">
            {prev}
            {dots}
            {next}
          </div>
        ) : (
          <div className="reviews__dots">{dots}</div>
        )}
      </div>
    </section>
  );
}
