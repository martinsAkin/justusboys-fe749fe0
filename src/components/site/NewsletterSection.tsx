import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, AlertCircle } from "lucide-react";
import { LUMA_URL, subscribe } from "@/content/site";
import { Reveal, SplitLines } from "./motion";

type State = { kind: "idle" } | { kind: "loading" } | { kind: "error"; msg: string } | { kind: "info"; msg: string } | { kind: "success" };

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>({ kind: "idle" });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const v = email.trim();
    if (!v) return setState({ kind: "error", msg: "Please enter your email address." });
    if (v.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return setState({ kind: "error", msg: "That email doesn't look right. Check and try again." });
    setState({ kind: "loading" });
    const r = await subscribe(v);
    if (r.ok) setState({ kind: "success" });
    else if (r.reason === "not-configured") setState({ kind: "info", msg: "Our mailing list isn't open yet — your email was not saved. Join the circle on Luma to stay connected for now." });
    else setState({ kind: "error", msg: "Something went wrong. Please try again." });
  }

  return (
    <section id="join" className="grain py-24 md:py-36">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-5 px-5 md:px-10">
        <h2 className="font-display col-span-12 text-[13vw] md:text-8xl lg:col-span-7 xl:text-9xl">
          <SplitLines lines={["There's a", "place for", <span key="y" className="text-primary">you here.</span>]} />
        </h2>
        <Reveal className="col-span-12 self-end lg:col-span-5">
          <p className="text-lg text-cream-soft">Join the circle. Stay connected to upcoming gatherings, community experiences, and conversations that matter.</p>
          <form onSubmit={onSubmit} noValidate className="mt-8">
            <label htmlFor="email" className="eyebrow text-muted-foreground">Email address</label>
            <div className="mt-3 flex flex-col gap-3 border-b-2 border-foreground pb-3 sm:flex-row sm:items-center">
              <input
                id="email" type="email" autoComplete="email" maxLength={255} value={email}
                onChange={(e) => { setEmail(e.target.value); if (state.kind === "error") setState({ kind: "idle" }); }}
                placeholder="you@example.com" aria-invalid={state.kind === "error"} aria-describedby="email-msg"
                className="min-h-12 flex-1 bg-transparent text-xl outline-none placeholder:text-muted-foreground"
              />
              <button type="submit" disabled={state.kind === "loading"} className="btn-primary justify-center disabled:opacity-60">
                {state.kind === "loading" ? "Joining…" : "Join the circle"}
              </button>
            </div>
            <div id="email-msg" aria-live="polite" className="mt-4 min-h-6 text-sm">
              {state.kind === "error" && <p className="flex items-start gap-2 text-destructive"><AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />{state.msg}</p>}
              {state.kind === "info" && <p className="flex items-start gap-2 text-primary"><AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />{state.msg}</p>}
              {state.kind === "success" && <p className="flex items-center gap-2 text-primary"><Check className="h-4 w-4" />You're in. Welcome to the circle.</p>}
            </div>
          </form>
          <a href={LUMA_URL} target="_blank" rel="noreferrer" className="eyebrow mt-6 inline-flex items-center gap-2 text-foreground hover:text-primary">
            Or join on Luma <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
