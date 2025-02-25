"use client";

import { useState, useEffect, useTransition } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/components/Loader";

export default function LoaderWrapper({ children }) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {

    setLoading(true);
    setContentReady(false);
    

    startTransition(() => {

      setTimeout(() => {
        setLoading(false);
      }, 100);
    });
    

    const checkContentLoaded = () => {
      if (document.readyState === 'complete') {
        setContentReady(true);
      }
    };
    

    if (document.readyState === 'complete') {
      setContentReady(true);
    } else {

      window.addEventListener('load', checkContentLoaded);
    }
    
    return () => {
      window.removeEventListener('load', checkContentLoaded);
    };
  }, [pathname]);


  if (loading || isPending || !contentReady) {
    return <Loader />;
  }
  
  return children;
}