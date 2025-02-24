"use client";

import { useState, useEffect, useTransition } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/components/Loader";

export default function LoaderWrapper() {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    startTransition(() => {
      setLoading(false);
    });
  }, [pathname]);

  return loading || isPending ? <Loader /> : null;
}
