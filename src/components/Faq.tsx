import { useState } from 'react';
import { faqs } from '../content';
import { BigTitle, Eyebrow, Icon } from './ui';

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="sec" aria-labelledby="h-faq">
      <div className="wrap">
        <div className="g12 faq">
          <div className="s4 faq__intro">
            <Eyebrow no={8} label="FAQ" />
            <BigTitle word="FAQ" count={faqs.length} size="faq" />
            <h2 id="h-faq" className="reveal">자주 묻는 질문.</h2>
            <p className="reveal">더 궁금한 점은 무료 상담에서 바로 답해 드립니다.</p>
          </div>
          <div className="s8 faq__list">
            {faqs.map((faq, i) => {
              const open = openIndex === i;
              return (
                <div key={faq.q} className="faq__item reveal">
                  <h3>
                    <button type="button" className="faqbtn" aria-expanded={open} onClick={() => setOpenIndex(open ? -1 : i)}>
                      <span className="faqbtn__text">
                        <span className="mono">0{i + 1}</span>
                        <span className="faqq">{faq.q}</span>
                      </span>
                      <span className={open ? 'faqbtn__icon is-open' : 'faqbtn__icon'}>
                        <Icon size={16}>
                          <path d="M12 5v14M5 12h14" />
                        </Icon>
                      </span>
                    </button>
                  </h3>
                  <div className={open ? 'faq__answer is-open' : 'faq__answer'}>
                    <div className="faq__clip">
                      <div className="faq__text">{faq.a}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
