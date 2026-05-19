import { useState, useEffect, useRef } from 'react';

interface Props {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TypewriterText({ text, speed = 50, className = '', onComplete }: Props) {
  const [displayed, setDisplayed] = useState('');
  const [cursor, setCursor] = useState(true);
  const indexRef = useRef(0);

  useEffect(() => {
    if (indexRef.current < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, indexRef.current + 1));
        indexRef.current++;
      }, speed);
      return () => clearTimeout(timer);
    } else {
      onComplete?.();
    }
  }, [displayed, text, speed, onComplete]);

  useEffect(() => {
    const interval = setInterval(() => setCursor((c) => !c), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={className}>
      {displayed}
      <span
        className={`inline-block w-[3px] h-[1em] bg-blue-400 ml-1 align-middle transition-opacity duration-100 ${
          cursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </span>
  );
}
