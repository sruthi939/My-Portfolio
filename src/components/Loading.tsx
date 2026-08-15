import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Clamp percent between 0 and 100
  const currentPercent = Math.min(Math.max(Math.round(percent), 0), 100);

  if (currentPercent >= 100 && !loaded) {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setIsLoaded(true);
      }, 1000);
    }, 600);
  }

  useEffect(() => {
    import("./utils/initialFX").then((module) => {
      if (isLoaded) {
        setClicked(true);
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 900);
      }
    });
  }, [isLoaded, setIsLoading]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  const getStatusMessage = (p: number, isDone: boolean) => {
    if (isDone) return "WELCOME TO PORTFOLIO";
    if (p < 20) return "INITIALIZING NEURAL NETWORKS...";
    if (p < 45) return "COMPILING REACT & THREE.JS SHADERS...";
    if (p < 75) return "SYNCHRONIZING GRAPHICS ENGINE...";
    if (p < 99) return "FINALIZING CORE SYSTEM...";
    return "SYSTEM READY • TAP TO ENTER";
  };

  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (circumference * currentPercent) / 100;

  return (
    <>
      <div className={`loading-header ${clicked ? "loader-out" : ""}`}>
        <a href="/#" className="loader-title" data-cursor="disable">
          Sruthi<span className="loader-title-accent">Alex</span>
        </a>
        <div className="loader-status-badge">
          <span className="status-dot"></span>
          <span className="status-text">AI & FULL STACK ENGINE</span>
        </div>
      </div>

      <div
        className={`loading-screen ${clicked ? "loading-clicked" : ""}`}
        onMouseMove={handleMouseMove}
      >
        <div className="loading-bg-glow"></div>
        <div className="loading-grid-pattern"></div>

        <div className="loading-marquee">
          <Marquee speed={40} gradient={false}>
            <span>&nbsp; AI ENGINEER &nbsp;•&nbsp;</span>
            <span>&nbsp; FULL STACK DEVELOPER &nbsp;•&nbsp;</span>
            <span>&nbsp; CREATIVE CODER &nbsp;•&nbsp;</span>
            <span>&nbsp; SYSTEM ARCHITECT &nbsp;•&nbsp;</span>
          </Marquee>
        </div>

        <div className={`loading-card ${loaded ? "loading-complete" : ""}`}>
          <div className="loading-ring-wrapper">
            <svg className="loading-ring-svg" viewBox="0 0 160 160">
              <defs>
                <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c2a4ff" />
                  <stop offset="50%" stopColor="#8a4fff" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <circle
                className="loading-ring-bg"
                cx="80"
                cy="80"
                r={radius}
              />
              <circle
                className="loading-ring-progress"
                cx="80"
                cy="80"
                r={radius}
                stroke="url(#ringGradient)"
                strokeDasharray={circumference}
                strokeDashoffset={strokeOffset}
                filter="url(#glow)"
              />
            </svg>

            <div className="loading-counter">
              {!loaded ? (
                <div className="counter-val">
                  {currentPercent}
                  <span className="counter-percent">%</span>
                </div>
              ) : (
                <div className="counter-done-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          <div className="loading-info-box">
            <div className="loading-status-ticker">
              {getStatusMessage(currentPercent, loaded)}
            </div>
            <div className="loading-bar-container">
              <div
                className="loading-bar-fill"
                style={{ width: `${currentPercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
