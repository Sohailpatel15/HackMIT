'use client';


export default function SplineView({children}) {
  return (
    <main className='relative h-screen w-screen overflow-hidden'>
      <iframe src='https://my.spline.design/backgroundhoverinteractioncopy-3ec32343152014d7136a5dc2a03a1f20/' frameborder='0' width='100%' height='100%'></iframe>
      <div className='absolute inset-0 z-10 pointer-events-none'>
        {children}
      </div>
    </main>
  );
}
