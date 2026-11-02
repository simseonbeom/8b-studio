import type { CSSProperties } from 'react';
import { serviceTabs } from '../content';
import { useIsMobile } from '../hooks';

const VOXEL_POSITIONS = [
  [0, 0],
  [52, 30],
  [-52, 30],
  [0, -60],
  [0, 60],
  [52, -30],
  [-52, -30],
  [0, 0],
];

// 조립 전 흩어진 위치. 마지막 흰색 복셀이 꼭대기에 놓이며 1바이트가 완성된다.
const SCATTER = {
  desktop: [[-150, 40], [150, -20], [-130, 120], [20, -150], [60, 150], [160, -120], [-160, -110], [120, 90]],
  mobile: [[-110, 40], [110, -20], [-100, 110], [20, -120], [50, 120], [120, -100], [-120, -90], [100, 80]],
};

const BLUE_FACES = ['#6B9BFF', '#3D7BFF', '#2457C9'];
const WHITE_FACES = ['#FFFFFF', '#D9DDE6', '#AEB5C4'];

function Cube({ mobile }: { mobile: boolean }) {
  const scatter = mobile ? SCATTER.mobile : SCATTER.desktop;
  return (
    <div className="cube">
      <svg viewBox="-180 -170 360 340" role="img" aria-label="작은 픽셀 8개가 모여 하나의 큐브가 되는 그래픽">
        <g transform="translate(0,-30)">
          {VOXEL_POSITIONS.map(([x, y], i) => {
            const [top, left, right] = i === 7 ? WHITE_FACES : BLUE_FACES;
            const style = {
              '--dx': `${scatter[i][0]}px`,
              '--dy': `${scatter[i][1]}px`,
              animationDelay: `${i * 0.08}s`,
            } as CSSProperties;
            return (
              <g key={i} className="px" style={style}>
                <g transform={`translate(${x},${y})`} stroke="#07080C" strokeWidth="1.5">
                  <polygon points="0,-30 52,0 0,30 -52,0" fill={top} />
                  <polygon points="-52,0 0,30 0,90 -52,60" fill={left} />
                  <polygon points="52,0 0,30 0,90 52,60" fill={right} />
                </g>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

function RibbonsDesktop() {
  return (
    <svg className="panel__bg" viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="22" />
        </filter>
        <filter id="glow2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="40" />
        </filter>
      </defs>
      <ellipse cx="980" cy="160" rx="420" ry="220" fill="#1B2A6B" opacity="0.55" filter="url(#soft)" />
      <ellipse cx="180" cy="120" rx="380" ry="200" fill="#141A33" opacity="0.7" filter="url(#soft)" />
      <g className="ribbon" fill="none">
        <path d="M-80 720 C 220 470, 470 360, 700 450 S 1040 620, 1290 330" stroke="#3D7BFF" strokeWidth="90" opacity="0.75" filter="url(#glow)" />
        <path d="M-80 700 C 220 450, 470 340, 700 430 S 1040 600, 1290 310" stroke="#7A5CFF" strokeWidth="40" opacity="0.8" filter="url(#glow2)" />
        <path d="M-80 740 C 220 490, 470 380, 700 470 S 1040 640, 1290 350" stroke="#C6F432" strokeWidth="22" opacity="0.85" filter="url(#glow2)" />
        <path d="M-80 760 C 220 510, 470 400, 700 490 S 1040 660, 1290 370" stroke="#FF5A3D" strokeWidth="30" opacity="0.7" filter="url(#glow2)" />
        <path d="M600 -60 C 640 160, 680 300, 800 360 S 1060 400, 1290 300" stroke="#3D7BFF" strokeWidth="34" opacity="0.7" filter="url(#glow2)" />
        <path d="M620 -60 C 660 170, 700 310, 820 372 S 1070 412, 1290 316" stroke="#FF5A3D" strokeWidth="16" opacity="0.6" filter="url(#glow2)" />
      </g>
      <ellipse cx="560" cy="860" rx="440" ry="330" fill="#000000" filter="url(#glow2)" />
      <rect x="0" y="560" width="1200" height="200" fill="#07080C" opacity="0.35" />
    </svg>
  );
}

function RibbonsMobile() {
  return (
    <svg className="panel__bg" viewBox="0 0 600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <filter id="mglow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
        <filter id="mglow2" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <filter id="msoft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="40" />
        </filter>
      </defs>
      <ellipse cx="480" cy="160" rx="260" ry="200" fill="#1B2A6B" opacity="0.6" filter="url(#msoft)" />
      <g className="ribbon" fill="none">
        <path d="M-80 640 C 120 440, 260 380, 360 470 S 520 600, 700 360" stroke="#3D7BFF" strokeWidth="80" opacity="0.75" filter="url(#mglow)" />
        <path d="M-80 620 C 120 420, 260 360, 360 450 S 520 580, 700 340" stroke="#7A5CFF" strokeWidth="34" opacity="0.8" filter="url(#mglow2)" />
        <path d="M-80 660 C 120 460, 260 400, 360 490 S 520 620, 700 380" stroke="#C6F432" strokeWidth="18" opacity="0.85" filter="url(#mglow2)" />
        <path d="M-80 680 C 120 480, 260 420, 360 510 S 520 640, 700 400" stroke="#FF5A3D" strokeWidth="24" opacity="0.7" filter="url(#mglow2)" />
        <path d="M300 -60 C 320 160, 360 280, 440 340 S 600 380, 700 330" stroke="#3D7BFF" strokeWidth="28" opacity="0.7" filter="url(#mglow2)" />
      </g>
      <ellipse cx="300" cy="1000" rx="380" ry="360" fill="#000000" filter="url(#mglow2)" />
    </svg>
  );
}

function ConsultCard({ mobile }: { mobile: boolean }) {
  return (
    <div className="consult">
      <div className="consult__head">
        <span className="consult__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B0D12" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4c-4.97 0-9 3.13-9 7 0 2.5 1.7 4.7 4.2 5.9L6.5 20l4-2.2c.5.1 1 .2 1.5.2 4.97 0 9-3.13 9-7s-4.03-7-9-7z" />
          </svg>
        </span>
        <span className="consult__text">
          <strong>30분 무료 상담</strong>
          <span>범위와 예산을 같이 잡아드립니다</span>
        </span>
      </div>
      <div className="consult__actions">
        <a className="btn btn-p" href="#contact">
          무료 상담 신청
        </a>
        <a className={mobile ? 'btn btn-g' : 'btn btn-w'} href="#portfolio">
          포트폴리오 보기
        </a>
      </div>
    </div>
  );
}

export function Hero() {
  const mobile = useIsMobile();

  return (
    <section className="hero" aria-labelledby="h-hero">
      <div className="wrap">
        <div className="en hero__wordmark" aria-hidden="true">
          <span className="hero__8b">
            8B
            {!mobile && (
              <span className="hero__bits">
                {Array.from({ length: 8 }, (_, i) => (
                  <i key={i} />
                ))}
              </span>
            )}
          </span>
          <span>studio</span>
        </div>

        <div className="panel">
          {mobile ? <RibbonsMobile /> : <RibbonsDesktop />}

          <nav className="tabs" aria-label="서비스 바로가기">
            {serviceTabs.map((tab) => (
              <a key={tab} className="tab" href="#services">
                {tab}
              </a>
            ))}
          </nav>

          <Cube mobile={mobile} />

          <div className="hero__bottom">
            <div className="hero__copy">
              <div className="mono hero__kicker">8 BITS MAKE A BYTE.</div>
              {mobile ? (
                <>
                  <h1 id="h-hero">
                    아이디어는 당신이,
                    <br />
                    나머지 8비트는
                    <br />
                    우리가.
                  </h1>
                  <p>기획, 디자인, 개발, AI 도입까지. 웹과 앱을 한 팀이 끝까지 만듭니다.</p>
                </>
              ) : (
                <>
                  <h1 id="h-hero">
                    당신의 비어있는 8비트,
                    <br />
                    저희가 채워드리겠습니다.
                  </h1>
                  <p>
                    기획, 디자인, 개발, AI 도입까지.
                    <br />
                    웹과 앱을 한 팀이 끝까지 만듭니다.
                  </p>
                </>
              )}
            </div>
            {!mobile && (
              <>
                <div className="ticker-wrap mono" aria-hidden="true">
                  <div className="ticker">
                    {Array.from({ length: 4 }, (_, i) => (
                      <span key={i}>— SCROLL TO BUILD</span>
                    ))}
                  </div>
                </div>
                <ConsultCard mobile={false} />
              </>
            )}
          </div>
        </div>

        {mobile && <ConsultCard mobile />}
      </div>
    </section>
  );
}
