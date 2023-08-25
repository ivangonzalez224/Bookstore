import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar() {
  const percentage = 22;

  return (
    <div id="circular">
      <CircularProgressbar value={percentage} text={`${percentage}%`} />
    </div>
  );
}
export default CircularProgressBar;
