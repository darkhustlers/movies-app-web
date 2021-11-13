import React from 'react';
import './loading.css';

export default function Loading() {
  return (
    <div id="loading-bg">
      {/* <div class="loading-logo">
			<img :src="'/logo.png'" alt="Logo" />
		</div> */}
      <div className="loading">
        <div className="effect-1 effects" />
        <div className="effect-2 effects" />
        <div className="effect-3 effects" />
      </div>
    </div>
  );
}
