'use client';


export default function SplineView({children}) {
  return (
    <main className='relative h-screen w-screen overflow-hidden'>
      <iframe src='https://my.spline.design/noisyglasscubecopy-58672f101c2e609239c80a5d69c07a09/' frameborder='0' width='100%' height='100%'></iframe>
      <div className='absolute inset-0 z-10 pointer-events-none'>
        {children}
      </div>
    </main>
  );
}
