import heroImg from "./assets/kashimo.png";
import blInvestingLogo from "./assets/bl_investing_logo_dark.png";
import { LinkCard } from "./LinkCard";

const App = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-white px-6 py-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-600/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col-reverse gap-8 lg:flex-row lg:items-start">
        <section className="flex-1 rounded-3xl border border-blue-400/20 bg-white/[0.03] backdrop-blur-xl shadow-2xl p-10 text-center">
          <img
            src={blInvestingLogo}
            className="mx-auto w-40 h-40 object-contain"
          />
          <h2 className="mt-4 text-2xl font-bold tracking-tight">
            BL Investing
          </h2>
          <p className="mt-2 text-white/60">
            A fan-made Blue Lock virtual stock market. Trade characters, bet on
            matches, and climb the rankings
          </p>
          <a
            href="https://bl-investing-web.pages.dev/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-xl border border-blue-400/30 bg-blue-500/10 px-6 py-3 font-medium text-white transition hover:bg-blue-500/20 hover:-translate-y-0.5"
          >
            Visit site →
          </a>
        </section>

        {/* SIDEBAR */}
        <aside className="w-full lg:w-72 lg:sticky lg:top-16 shrink-0 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl px-6 py-8">
          <div className="text-center mb-6">
            <div className="relative mx-auto mb-4 w-20 h-20">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 blur-md opacity-70" />
              <img
                src={heroImg}
                className="relative w-20 h-20 rounded-full object-cover border-2 border-zinc-950"
                alt="avatar"
              />
            </div>

            <h1 className="text-xl font-bold tracking-tight">s4toruu</h1>
            <p className="text-sm text-white/50 mt-1">Developer</p>
          </div>

          <div className="flex flex-col gap-3">
            <LinkCard
              href="https://github.com/s4toruu-x"
              title="GitHub"
              description="Check out my projects"
              icon="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              variant="secondary"
            />

            <LinkCard
              href="https://ko-fi.com/s4toruu"
              title="Ko-fi"
              description="Support my work"
              icon="https://storage.ko-fi.com/cdn/cup-border.png"
              variant="support"
            />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default App;
