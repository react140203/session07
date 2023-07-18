"use client";

import React from "react";
import { useRouter } from "next/navigation";

export function GoBack() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return <button onClick={() => goBack()}>Back</button>;
}
