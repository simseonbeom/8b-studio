import { useState } from 'react';
import { budgets, contact, projectTypes } from '../content';
import { useIsMobile } from '../hooks';
import { Eyebrow } from './ui';

function ConsultForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="sent" role="status">
        <span className="mono sent__code">0b00000001 · RECEIVED</span>
        <div className="sent__title">신청이 접수됐습니다.</div>
        <p>남겨주신 연락처로 상담 일정을 안내해 드립니다.</p>
        <button type="button" className="sqbtn sqbtn--light" onClick={() => setSent(false)}>
          다시 작성
        </button>
      </div>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        // TODO: 수신처(API·메일·CRM)가 정해지면 여기서 FormData를 전송한다. 지금은 화면만 바뀐다.
        setSent(true);
      }}
    >
      <div className="form__title form__full">
        상담 신청 <span>(이름·연락처 필수)</span>
      </div>
      <div className="fieldset">
        <label htmlFor="f-name" className="mono">
          이름 (필수)
        </label>
        <input id="f-name" name="name" className="ufield" type="text" required autoComplete="name" />
      </div>
      <div className="fieldset">
        <label htmlFor="f-contact" className="mono">
          연락처 (필수)
        </label>
        <input id="f-contact" name="contact" className="ufield" type="text" required placeholder="이메일 또는 전화번호" />
      </div>
      <div className="fieldset">
        <label htmlFor="f-type" className="mono">
          프로젝트 유형 (선택)
        </label>
        <select id="f-type" name="type" className="ufield">
          <option value="">선택해 주세요</option>
          {projectTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="fieldset">
        <label htmlFor="f-budget" className="mono">
          예산 범위 (선택)
        </label>
        <select id="f-budget" name="budget" className="ufield">
          <option value="">선택해 주세요</option>
          {budgets.map((budget) => (
            <option key={budget}>{budget}</option>
          ))}
        </select>
      </div>
      <div className="fieldset form__full">
        <label htmlFor="f-msg" className="mono">
          내용 (선택 입력)
        </label>
        <textarea id="f-msg" name="message" className="ufield" rows={4} placeholder="만들고 싶은 서비스를 편하게 적어 주세요. 기획서가 없어도 괜찮습니다." />
      </div>
      <div className="form__submit form__full">
        <button type="submit" className="sqbtn">
          무료 상담 신청
        </button>
        <span className="mono">
          신청하면{' '}
          <a className="ulink" href="#footer">
            개인정보처리방침
          </a>
          에 동의한 것으로 봅니다.
        </span>
      </div>
    </form>
  );
}

export function Contact() {
  const mobile = useIsMobile();
  const { ceo, businessNo } = contact.legal;

  return (
    <section id="contact" className="contact" aria-labelledby="h-contact">
      <div className="wrap">
        <div className="en contact__wordmark reveal" aria-hidden="true">
          Contact
          {mobile ? <br /> : ' '}
          us
        </div>

        <div className="g12 contact__grid">
          <div className="s6 contact__info reveal">
            <div>
              <Eyebrow no={9} label="CONTACT" dark />
              <h2 id="h-contact">
                첫 <span>1비트</span>는
                {mobile ? <br /> : ' '}
                대화입니다.
              </h2>
              <p>30분 무료 상담으로 범위와 예산을 같이 잡아드립니다.</p>
            </div>
            <div className="mono contact__details">
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
              <span>
                {contact.address[0]}
                <br />
                {contact.address[1]}
              </span>
              <span className="contact__links">
                <a className="ulink" href="#contact">
                  카카오톡 채널 ↗
                </a>
                <a className="ulink" href="#contact">
                  회사 소개서 다운로드 ↓
                </a>
              </span>
            </div>
          </div>
          <div className="s6 reveal">
            <ConsultForm />
          </div>
        </div>

        <div className="g-3 mono contact__meta reveal">
          <div>
            웹·앱 개발, AI 도입
            <br />
            UX·UI 디자인
          </div>
          {!mobile && (
            <div>
              기획부터 런칭까지 한 팀
              <br />
              <a className="ulink" href="#portfolio">
                포트폴리오 보기
              </a>
            </div>
          )}
          <div className="contact__right">
            서울 성수동
            <br />
            2026
          </div>
          {mobile && (
            <div className="contact__wide">
              기획부터 런칭까지 한 팀 ·{' '}
              <a className="ulink" href="#portfolio">
                포트폴리오 보기
              </a>
            </div>
          )}
        </div>

        <div className="en contact__foot-mark reveal" aria-hidden="true">
          8B-studio
        </div>

        <footer id="footer" className="mono footer">
          {mobile ? (
            <>
              <div className="footer__links">
                <a className="ulink" href="#contact">
                  무료 상담
                </a>
                <a className="ulink" href="#footer">
                  {contact.email}
                </a>
                <a className="ulink" href="#footer">
                  {contact.instagram}
                </a>
                <a className="ulink" href="#footer">
                  개인정보처리방침
                </a>
              </div>
              <span>
                © 2026 8B-studio
                <br />
                대표 {ceo} · 사업자등록번호 {businessNo}
              </span>
            </>
          ) : (
            <>
              <div className="g-3">
                <a className="ulink" href="#contact">
                  무료 상담
                </a>
                <a className="ulink" href="#footer">
                  {contact.email}
                </a>
                <span className="contact__right">
                  <a className="ulink" href="#footer">
                    {contact.instagram}
                  </a>
                </span>
              </div>
              <div className="footer__legal">
                <span>
                  © 2026 8B-studio · 대표 {ceo} · 사업자등록번호 {businessNo}
                </span>
                <a className="ulink" href="#footer">
                  개인정보처리방침
                </a>
              </div>
            </>
          )}
        </footer>
      </div>
    </section>
  );
}
