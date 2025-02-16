'use client';
import Spline from "@splinetool/react-spline";


export default function SplineView({children}) {
  return (
    <main className='relative h-screen w-screen overflow-hidden'>
     <Spline scene="https://prod.spline.design/Ida5LFS5BaO5V1-h/scene.splinecode"/>
      <div className='absolute inset-0 z-10 pointer-events-none'>
        {children}
      </div>
    </main>
  );
}


