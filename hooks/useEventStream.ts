"use client";

import { useEffect, useState } from "react";

export function useEventStream(url: string) {
  const [items, setItems] = useState<string[]>([]);
  const [status, setStatus] = useState<"connecting" | "open" | "closed">("connecting");

  useEffect(() => {
    const source = new EventSource(url);
    source.onopen = () => setStatus("open");
    source.onmessage = (event) => {
      setItems((prev) => [event.data, ...prev].slice(0, 14));
    };
    source.onerror = () => {
      setStatus("connecting");
      source.close();
      setTimeout(() => {
        setStatus("closed");
      }, 3000);
    };
    return () => source.close();
  }, [url]);

  return { items, status };
}
