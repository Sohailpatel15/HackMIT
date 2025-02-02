'use client';


export default function SplineView({children}) {
  return (
    <main className='relative h-screen w-screen overflow-hidden'>
      <iframe src='https://my.spline.design/noisyglasscube-ab7eba01349a6bc6123a4bb7d0f0f841/' width='100%' height='100%'></iframe>
      <div className='absolute inset-0 z-10 pointer-events-none'>
        {children}
      </div>
    </main>
  );
}
