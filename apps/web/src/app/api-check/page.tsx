// apps/web/src/app/api-check/page.tsx
async function getData() {
  const base = process.env.NEXT_PUBLIC_API_BASE || "";
  const res = await fetch(`${base}/api/hello?name=ControlTower`, { cache: "no-store" });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json() as Promise<{ message: string }>;
}

export default async function ApiCheckPage() {
  const data = await getData();
  return (
    <main style={{ padding: 24, fontFamily: "ui-sans-serif, system-ui" }}>
      <h1>API Connectivity Check</h1>
      <p>Backend says:</p>
      <pre style={{ background: "#f6f8fa", padding: 12, borderRadius: 8 }}>
        {JSON.stringify(data, null, 2)}
      </pre>
      <p>Using base: <code>{process.env.NEXT_PUBLIC_API_BASE}</code></p>
    </main>
  );
}
