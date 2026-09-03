import { useState } from 'react';

export default function App() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);

  const [sushmaClicks, setSushmaClicks] = useState(0);
  const [sushmaPos, setSushmaPos] = useState({
    x: 0,
    y: 0,
  });

  const handleSushma = () => {
    if (sushmaClicks < 2) {
      setSushmaPos({
        x: Math.random() * 150 - 75,
        y: Math.random() * 100 - 50,
      });

      setSushmaClicks((prev) => prev + 1);
      return;
    }

    setStep(1);
  };

  return (
    <>
      <div className="app">
        {!started ? (
          <div className="start-screen">
            <div className="petals">
              {[...Array(40)].map((_, i) => (
                <span
                  key={i}
                  className="petal"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${8 + Math.random() * 6}s`,
                  }}
                >
                  ❤️
                </span>
              ))}
            </div>

            <div className="ghost" onClick={() => setStarted(true)}>
              👻
            </div>
          </div>
        ) : (
          <div className="game-area">
            {step === 0 && (
              <div
                className="card center-card"
                onClick={handleSushma}
                style={{
                  transform: `translate(-50%, -50%) translate(${sushmaPos.x}px, ${sushmaPos.y}px)`,
                }}
              >
                Sushma ❤️
              </div>
            )}

            {step === 1 && (
              <>
                <div className="message-box">Seriously?</div>

                <div className="card left-card" onClick={() => setStep(2)}>
                  Bubbbbbu
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="message-box">ohhhh come on not again</div>

                <div className="card right-card" onClick={() => setStep(3)}>
                  Mummy
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="message-box">
                  ahhh!! yeah you are getting close
                </div>

                <div className="card bottom-card" onClick={() => setStep(4)}>
                  Something special it is
                </div>
              </>
            )}

            {step === 4 && (
              <div className="final-screen">
                <div className="heart-bg">❤️</div>

                <div className="final-message">
                  MY NANI ❤️
                  <br />
                  <br />
                  ummahhhhhh
                  <br />
                  love you soooooo muchhh
                  <br />
                  Bangaram
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        .app{
          min-height:100vh;
          background:linear-gradient(
            180deg,
            #ffe4ec,
            #ffd4e5,
            #ffc5dc,
            #fff0f7
          );
          overflow:hidden;
          font-family:Arial,sans-serif;
        }

        .start-screen{
          width:100%;
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          position:relative;
        }

        .ghost{
          font-size:180px;
          cursor:pointer;
          animation:pulse 2s infinite;
          z-index:10;
          user-select:none;
        }

        .petals{
          position:absolute;
          inset:0;
          overflow:hidden;
        }

        .petal{
          position:absolute;
          top:-40px;
          font-size:28px;
          opacity:.25;
          animation:fall linear infinite;
        }

        .game-area{
          width:100%;
          height:100vh;
          position:relative;
        }

        .card{
          position:absolute;
          background:rgba(255,255,255,.35);
          backdrop-filter:blur(12px);
          padding:18px 24px;
          border-radius:20px;
          cursor:pointer;
          font-weight:bold;
          color:#b30063;
          transition:transform .7s ease;
          user-select:none;
          border:1px solid rgba(255,255,255,.5);
        }

        .center-card{
          top:50%;
          left:50%;
        }

        .left-card{
          left:20px;
          bottom:20px;
        }

        .right-card{
          right:20px;
          bottom:20px;
        }

        .bottom-card{
          left:50%;
          transform:translateX(-50%);
          bottom:90px;
        }

        .message-box{
          position:absolute;
          top:20%;
          left:50%;
          transform:translateX(-50%);
          width:85%;
          max-width:650px;
          background:rgba(255,255,255,.4);
          backdrop-filter:blur(15px);
          border-radius:24px;
          padding:25px;
          text-align:center;
          color:#a00058;
          font-size:22px;
        }

        .final-screen{
          width:100%;
          height:100vh;
          display:flex;
          align-items:center;
          justify-content:center;
          position:relative;
        }

        .heart-bg{
          font-size:350px;
          opacity:.12;
          animation:rotateHeart 12s linear infinite;
        }

        .final-message{
          position:absolute;
          text-align:center;
          color:#b30063;
          font-size:32px;
          font-weight:bold;
          line-height:1.8;
        }

        @keyframes pulse{
          0%{transform:scale(1);}
          50%{transform:scale(1.15);}
          100%{transform:scale(1);}
        }

        @keyframes rotateHeart{
          from{transform:rotate(0deg);}
          to{transform:rotate(360deg);}
        }

        @keyframes fall{
          from{
            transform:translateY(-50px) rotate(0deg);
          }
          to{
            transform:translateY(120vh) rotate(360deg);
          }
        }

        @media(max-width:768px){

          .ghost{
            font-size:120px;
          }

          .card{
            font-size:14px;
            width:150px;
            text-align:center;
          }

          .message-box{
            width:92%;
            font-size:18px;
          }

          .heart-bg{
            font-size:220px;
          }

          .final-message{
            font-size:20px;
          }
        }
      `}</style>
    </>
  );
}
