import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-24 min-h-screen bg-gradient-to-b from-black via-slate-950 to-purple-900 text-white">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-28 pb-20">
        <div className="text-center">
          <p className="text-sm tracking-widest text-slate-300/80">PORTFOLIO</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
            Neal Abraham
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300">
            Student and developer passionate about creating meaningful technology.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#contact" className="rounded-xl px-6 py-2.5 text-sm font-medium bg-white/10 backdrop-blur-md hover:bg-purple-500/20 transition shadow-md">
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Realtor AI */}
          <article className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur shadow">
            <h3 className="text-lg font-semibold">Realtor AI</h3>
            <p className="mt-2 text-sm text-slate-300">
              A conversational AI tool that helps users find ideal properties by combining MLS data with LLM-based search and recommendations.
            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <a
                className="hover:underline"
                href="https://github.com/Neal-stack/realator-AI"
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            </div>
          </article>
          {/* Fridge AI */}
          <article className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur shadow">
            <h3 className="text-lg font-semibold">Ness</h3>
            <p className="mt-2 text-sm text-slate-300">
              A React app that helps users manage their fridge and discover recipes. Integrates Food Facts, Spoonacular, Gemini, and Supabase APIs with user sign-in. Currently in beta testing.
            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <a
                className="hover:underline"
                href="https://fridge-ai-eta.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </article>
        </div>
      </section>


      {/* Bio Section */}
      <section id="bio" className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-10 shadow-xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
            <div className="shrink-0">
              <div className="relative h-40 w-40 md:h-48 md:w-48 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <Image
                  src="/profile.jpg"
                  alt="Portrait"
                  fill
                  sizes="192px"
                  className="object-cover object-center bg-black/20"
                  priority
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-300">About Me</h2>
              <p className="text-slate-300 leading-relaxed">
                I’m a computer science student with a passion for building technology that creates positive impact. Over the past few years, I’ve explored software engineering, AI, and public service through hands-on projects, research, and volunteering. I enjoy solving problems that sit at the intersection of technology and real-world needs — whether that’s developing web applications, analyzing data, or creating systems that help communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 pb-28">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <p className="text-sm text-slate-300">Reach out for collabs or questions.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a className="rounded-xl px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 border border-white/10" href="mailto:nealmabraham@gmail.com">Email</a>
            <a className="rounded-xl px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 border border-white/10" href="https://github.com/Neal-stack" target="_blank" rel="noreferrer">GitHub</a>
            <a className="rounded-xl px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 border border-white/10" href="https://www.linkedin.com/in/nma19/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="pb-10 text-center text-xs text-slate-400/80">
        © {new Date().getFullYear()} Neal Abraham
      </footer>
    </main>
  );
}
