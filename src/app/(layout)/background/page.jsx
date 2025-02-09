import React from 'react';
import { VantaBackground } from './_components/VantaBackground';

export default function App() {
  return (
    <VantaBackground
      color={0xbecbff}           // Globe color
      color2={0xbecbff}          // Secondary globe color
      size={1.10}                // Globe size scaling
      backgroundColor={0xffffff} // Background color
    >
      {/* Your website content goes here */}
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg">This content appears above the animated background</p>
      </div>
    </VantaBackground>
  );
}
