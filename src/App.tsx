import heroImg from "./assets/hero.png";

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white px-6">
      {/* HERO */}
      <div className="text-center mb-10">
        <img
          src={heroImg}
          className="w-24 h-24 rounded-full mx-auto mb-4 border border-white/10"
          alt="avatar"
        />

        <h1 className="text-3xl font-bold">Hi, I'm s4toruu</h1>
      </div>

      <div className="flex flex-col items-center w-full max-w-sm space-y-3">
        <a
          href="https://bl-investing-web.pages.dev/"
          target="_blank"
          className="flex justify-center items-center w-[200px] gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 hover:scale-[1.03] transition"
        >
          <img
            src="https://bl-investing-web.pages.dev/assets/bl_investing_logo-B0QcsP3f.png"
            className="h-[55px] object-contain"
          />
        </a>

        <a
          href="https://github.com/s4toruu-x"
          target="_blank"
          className="flex justify-center items-center w-[200px] gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 hover:scale-[1.03] transition"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            className="w-[55px] h-[55px]"
          />
        </a>

        <a
          href="https://www.buymeacoffee.com/s4toruu"
          target="_blank"
          className="flex justify-center items-center w-[200px] gap-3 p-4 rounded-xl bg-yellow-400 text-black hover:scale-[1.03] transition"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
            className="w-[55px] h-[55px]"
          />
        </a>
      </div>
    </main>
  );
}

export default App;
