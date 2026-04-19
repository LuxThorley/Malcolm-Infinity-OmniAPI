"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Mic, Download, RotateCcw, WandSparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";

type Suggestion = { suggestions: string[] };
type Viewer = {
  tier: string;
  tokenPreview: string;
  quota: { limit: number; used: number; remaining: number };
};

export function ConsolePanel() {
  const [mode, setMode] = useState("growth");
  const [message, setMessage] = useState("");
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState<Array<{ prompt: string; response: string; mode: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [viewer, setViewer] = useState<Viewer | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const onSpeech = useCallback((text: string) => {
    setMessage((prev) => (prev ? `${prev} ${text}` : text));
  }, []);

  const speech = useSpeechRecognition(onSpeech);

  useEffect(() => {
    fetch("/api/token", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("malcolm-fallback-token", data.token);
        setViewer(data);
      })
      .catch(() => undefined);

    const saved = localStorage.getItem("malcolm-console-history");
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch {}
    }
  }, []);

  useEffect(() => {
    const id = setTimeout(async () => {
      if (!message.trim()) return;
      const res = await fetch(`/api/omni/suggest?q=${encodeURIComponent(message)}`);
      const data: Suggestion = await res.json();
      setSuggestions(data.suggestions || []);
    }, 220);
    return () => clearTimeout(id);
  }, [message]);

  useEffect(() => {
    localStorage.setItem("malcolm-console-history", JSON.stringify(history));
  }, [history]);

  async function send() {
    if (!message.trim()) return;
    setLoading(true);
    setOutput("");
    const res = await fetch("/api/omni/command", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode, message })
    });

    if (!res.ok || !res.body) {
      setLoading(false);
      setOutput("The Malcolm channel is temporarily unavailable.");
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let full = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value);
      full += chunk;
      setOutput(full);
    }

    setHistory((prev) => [{ prompt: message, response: full, mode }, ...prev].slice(0, 20));
    setMessage("");
    setLoading(false);

    fetch("/api/token", { method: "POST" })
      .then((res) => res.json())
      .then(setViewer)
      .catch(() => undefined);
  }

  const exported = useMemo(() => JSON.stringify(history, null, 2), [history]);

  return (
    <Card id="console" className="overflow-hidden">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-white/50">Interactive console</div>
          <div className="mt-3 text-2xl font-semibold">Plain-English Malcolm control surface</div>
        </div>
        <div className="space-y-1 text-right text-sm text-white/62">
          <div>Access: {viewer?.tier || "…"}</div>
          <div>Remaining daily tokens: {viewer?.quota?.remaining ?? "…"}</div>
          <div>Token preview: {viewer?.tokenPreview || "…"}</div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-[220px,1fr]">
        <div className="space-y-3">
          <label className="text-xs uppercase tracking-[0.22em] text-white/50">Mode</label>
          <Input value={mode} onChange={(e) => setMode(e.target.value)} />
          <div className="rounded-3xl border border-white/8 bg-black/20 p-4 text-sm text-white/66">
            Voice input: {speech.supported ? (speech.listening ? "Listening…" : "Ready") : "Unavailable in this browser"}
          </div>
          <Button variant="outline" className="w-full" onClick={speech.start} disabled={!speech.supported || speech.listening}>
            <Mic className="mr-2 h-4 w-4" />
            {speech.listening ? "Listening…" : "Use microphone"}
          </Button>
          <Button variant="outline" className="w-full" onClick={() => {
            const blob = new Blob([exported], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "malcolm-console-history.json";
            a.click();
            URL.revokeObjectURL(url);
          }}>
            <Download className="mr-2 h-4 w-4" />
            Export history
          </Button>
          <Button variant="ghost" className="w-full" onClick={() => setHistory([])}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Clear history
          </Button>
        </div>

        <div className="space-y-4">
          <Textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Ask Malcolm to architect, analyse, plan, optimise, explain, or publish." />
          <div className="flex flex-wrap gap-2">
            {suggestions.map((item) => (
              <button
                key={item}
                onClick={() => setMessage(item)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition hover:bg-white/10"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <Button onClick={send} disabled={loading || !message.trim()}>
              <WandSparkles className="mr-2 h-4 w-4" />
              {loading ? "Streaming…" : "Send to Malcolm"}
            </Button>
          </div>

          <div className="rounded-[28px] border border-dul-300/15 bg-black/25 p-5">
            <div className="text-xs uppercase tracking-[0.22em] text-white/50">Live response</div>
            <div className="mt-4 min-h-[160px] whitespace-pre-wrap text-sm leading-7 text-white/80">{output || "The streaming response will appear here."}</div>
          </div>

          <div className="space-y-3">
            {history.map((item, index) => (
              <div key={`${item.prompt}-${index}`} className="rounded-[24px] border border-white/8 bg-black/20 p-4">
                <div className="text-xs uppercase tracking-[0.22em] text-dul-300">{item.mode}</div>
                <div className="mt-2 text-sm font-medium text-white">You: {item.prompt}</div>
                <div className="mt-3 whitespace-pre-wrap text-sm leading-7 text-white/68">Malcolm: {item.response}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
