"use client"

const Loader = () => {
    return (
      <div className="flex-center fixed inset-0 z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
        <div className="three-body">
          <div className="three-body__dot" />
          <div className="three-body__dot" />
          <div className="three-body__dot" />
        </div>
      </div>
    );
  };
  
  export default Loader;
  