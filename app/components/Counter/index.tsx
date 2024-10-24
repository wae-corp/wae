import React, {useEffect, useState, useRef} from "react";

function formatNumber(
  number: number,
  separator: string = ",",
  decimals?: number,
  decimal: string = ".",
): string {
  const options: Intl.NumberFormatOptions = {
    maximumFractionDigits: decimals ?? 0, // No decimals if undefined
    minimumFractionDigits: decimals ?? 0,
  };

  let formatted = number.toLocaleString("en-US", options);

  // Replace separators and decimal points if needed
  if (separator !== ",") {
    formatted = formatted.replace(/,/g, separator);
  }
  if (decimal !== ".") {
    formatted = formatted.replace(/\./g, decimal);
  }

  return formatted;
}
interface CounterProps {
  end: number;
  duration: number;
  separator?: string;
  decimals?: number; // Now optional, no decimals if not provided
  decimal?: string;
}

export const Counter: React.FC<CounterProps> = ({
  end,
  duration,
  separator = ",",
  decimals, // Optional
  decimal = ".",
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false); // Control start
  const counterRef = useRef<HTMLDivElement | null>(null); // Reference to the counter element
  const frameDuration = 1000 / 60; // Approx 60 frames per second

  // Intersection Observer to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
          }
        });
      },
      {threshold: 0.5}, // Trigger when 50% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  // Counting animation logic
  useEffect(() => {
    if (!hasStarted) return;

    const totalFrames = Math.round((duration * 1000) / frameDuration);
    let frame = 0;

    const counterInterval = setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      const newValue = end * progress;

      setCurrentValue(newValue);

      if (frame === totalFrames) {
        clearInterval(counterInterval);
      }
    }, frameDuration);

    return () => clearInterval(counterInterval); // Cleanup on unmount
  }, [hasStarted, end, duration, frameDuration]);

  return (
    <div
      ref={counterRef}
      className="inline-block"
    >
      <span>{formatNumber(currentValue, separator, decimals, decimal)}</span>
    </div>
  );
};
