import React, { useState } from 'react';
import { Play, RotateCcw, Copy, Check } from 'lucide-react';

export default function AnimationPlayground() {
  const [animationType, setAnimationType] = useState('bounce');
  const [easing, setEasing] = useState('cubic-bezier(0.175, 0.885, 0.32, 1.275)');
  const [duration, setDuration] = useState(1.2);
  const [objectType, setObjectType] = useState('crown');
  const [isPlaying, setIsPlaying] = useState(true);
  const [copied, setCopied] = useState(false);

  const animationTypes = [
    { name: 'Bounce Jump', value: 'bounce' },
    { name: 'Smooth Float', value: 'float' },
    { name: 'Continuous Spin', value: 'spin' },
    { name: 'Breath Pulse', value: 'pulse' },
    { name: 'Wobble Shake', value: 'shake' }
  ];

  const easingCurves = [
    { name: 'Constant Speed (Linear)', value: 'linear' },
    { name: 'Smooth Ease (Ease-In-Out)', value: 'ease-in-out' },
    { name: 'Bouncy Pop (Cubic Bezier)', value: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' },
    { name: 'Elastic Overshoot (Cubic Bezier)', value: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)' }
  ];

  const handleCopyCode = () => {
    const code = `.animated-element {
  animation: csea-${animationType} ${duration}s ${easing} infinite;
}`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getAnimationStyles = () => {
    if (!isPlaying) return {};
    return {
      animationName: `csea-${animationType}`,
      animationDuration: `${duration}s`,
      animationTimingFunction: easing,
      animationIterationCount: 'infinite',
      display: 'inline-block'
    };
  };

  return (
    <div className="playground-container glass-panel">
      <div className="playground-header">
        <span className="playground-badge">INTERACTIVE LAB</span>
        <h4>Animation & Motion Sandbox</h4>
        <p className="playground-subtitle">Interact with timing curves, durations, and keyframes live.</p>
      </div>

      <div className="playground-grid">
        {/* Interactive Control Panel */}
        <div className="playground-controls">
          {/* Object Selector */}
          <div className="control-group">
            <label>Select Animate Object</label>
            <div className="radio-tabs">
              {['crown', 'lion', 'ball'].map((obj) => (
                <button
                  key={obj}
                  className={`radio-tab-btn ${objectType === obj ? 'active' : ''}`}
                  onClick={() => setObjectType(obj)}
                >
                  {obj.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Animation Selector */}
          <div className="control-group">
            <label>Animation Keyframe Preset</label>
            <select 
              value={animationType} 
              onChange={(e) => setAnimationType(e.target.value)}
              className="control-select"
            >
              {animationTypes.map((anim) => (
                <option key={anim.value} value={anim.value}>{anim.name}</option>
              ))}
            </select>
          </div>

          {/* Easing Selector */}
          <div className="control-group">
            <label>Transition Easing Function</label>
            <select 
              value={easing} 
              onChange={(e) => setEasing(e.target.value)}
              className="control-select"
            >
              {easingCurves.map((curve) => (
                <option key={curve.value} value={curve.value}>{curve.name}</option>
              ))}
            </select>
          </div>

          {/* Duration Slider */}
          <div className="control-group">
            <div className="slider-label-row">
              <label>Animation Speed (Duration)</label>
              <span className="slider-value">{duration}s</span>
            </div>
            <input 
              type="range" 
              min="0.3" 
              max="3" 
              step="0.1" 
              value={duration} 
              onChange={(e) => setDuration(parseFloat(e.target.value))}
              className="control-slider"
            />
          </div>

          {/* Playback Controls */}
          <div className="playback-actions">
            <button 
              className={`btn-playback ${isPlaying ? 'active' : ''}`} 
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <Play size={16} />
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            <button 
              className="btn-playback-reset" 
              onClick={() => {
                setAnimationType('bounce');
                setEasing('cubic-bezier(0.175, 0.885, 0.32, 1.275)');
                setDuration(1.2);
                setObjectType('crown');
                setIsPlaying(true);
              }}
            >
              <RotateCcw size={16} />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Live Preview & Code Panel */}
        <div className="playground-preview-area">
          <div className="preview-canvas">
            {/* Animated Object */}
            <div style={getAnimationStyles()} className="animate-wrapper">
              {objectType === 'crown' && (
                <svg width="70" height="70" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 10,60 C 25,60 55,60 70,60 M 10,60 C 12,63 68,63 70,60" stroke="#FFB300" strokeWidth="4.5" strokeLinecap="round" />
                  <path d="M 12,60 L 6,35 C 18,40 25,40 30,25 C 35,40 45,40 50,25 C 55,40 62,40 74,35 L 68,60" stroke="#FFB300" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="6" cy="32" r="3" fill="#FFC107" />
                  <circle cx="40" cy="22" r="3.5" fill="#FFC107" />
                  <circle cx="74" cy="32" r="3" fill="#FFC107" />
                </svg>
              )}

              {objectType === 'lion' && (
                <svg width="70" height="70" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 50,20 C 42,12 25,22 20,35 C 14,48 18,63 10,72 C 3,82 1,90 9,100 C 17,110 35,108 40,102 C 45,97 50,102 56,105" stroke="#FF5722" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(10, -25) scale(0.7)" />
                  <path d="M 50,38 C 55,38 58,41 62,43 C 66,45 68,44 71,48 C 74,52 72,57 70,61 C 67,65 62,67 59,70 C 56,71 54,75 55,79" stroke="#FF5722" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(10, -25) scale(0.7)" />
                  <circle cx="46" cy="38" r="3" fill="#FF5722" />
                </svg>
              )}

              {objectType === 'ball' && (
                <div className="preview-ball"></div>
              )}
            </div>
          </div>

          {/* Code Viewer */}
          <div className="code-viewer-panel">
            <div className="code-header">
              <span>CSS Rules</span>
              <button className="btn-copy-code" onClick={handleCopyCode}>
                {copied ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>
            <pre className="code-block">
{`.animated-element {
  animation: csea-${animationType} ${duration}s 
             ${easing} infinite;
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
