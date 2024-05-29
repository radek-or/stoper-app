import React from 'react';
import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
  const formatTime = milliseconds => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const ms = Math.floor((milliseconds % 1000) / 10); // Dziesiętne części sekundy

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(ms).padStart(2, '0')}`;
  };

  return (
    <div className={styles.component}>
      {formatTime(time)}
    </div>
  );
};

export default FormattedTime;
