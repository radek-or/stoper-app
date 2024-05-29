import React, { useState, useEffect } from 'react';
import FormattedTime from './FormattedTime/FormattedTime';
import styles from './App.module.scss';

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const start = () => {
    if (!timer) {
      setTimer(setInterval(() => {
        setTime(prevTime => prevTime + 10); // Aktualizacja co 10ms
      }, 10));
    }
  };

  const stop = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  return (
    <div className={styles.app}>
      <FormattedTime time={time} />
      <div className={styles.buttons}>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
