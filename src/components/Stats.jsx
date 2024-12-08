import { useEffect, useState } from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  const [animatedStats, setAnimatedStats] = useState(stats);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateNumbers = (start, end, setValue, delay) => {
    let current = start;
    const step = Math.ceil((end - start) / 30); // Speed of animation (increase number every frame)
    
    const interval = setInterval(() => {
      current += step;
      if (current >= end) {
        clearInterval(interval);
        current = end;
      }
      setValue(current); // Update the displayed value
    }, delay);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            stats.forEach((stat, index) => {
              const targetValue = parseInt(stat.targetValue.replace(/[^\d]/g, ""));
              const startValue = parseInt(stat.value.replace(/[^\d]/g, ""));
              animateNumbers(startValue, targetValue, (newValue) => {
                setAnimatedStats((prev) =>
                  prev.map((item, i) =>
                    i === index ? { ...item, value: `${newValue}${stat.value.slice(-1)}` } : item
                  )
                );
              }, 30);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector(".stats-section"));

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 stats-section`}
    >
      {animatedStats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4
            className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white"
          >
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
