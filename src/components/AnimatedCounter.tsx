import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix = "", prefix = "", decimals = 0, duration = 2000 }: AnimatedCounterProps) => {
  const { count, ref } = useCountUp({ end, duration, decimals });

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{decimals > 0 ? count.toFixed(decimals) : count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
