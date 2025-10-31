import Image from "next/image";

export const dynamic = 'force-dynamic';

export default function TechPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-purple-900 text-white pt-24">
      {/* Header Section */}
      <section className="text-center mb-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Tech Projects</h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          A collection of my tech projects.
        </p>
      </section>

      {/* Horizontally Scrollable Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 pb-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-300">Projects</h2>
        <div className="relative">
          {/* Scroll Container */}
          <div
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pr-2 scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {/* Cards */}
            {[
              {
                title: "Realtor AI",
                description:
                  "A conversational AI tool that helps users find ideal properties by combining MLS data with LLM-based search and recommendations.",
                liveUrl: "",
                repoUrl: "https://github.com/Neal-stack/realator-AI",
                tags: ["Python", "AWS SageMaker", "Hugging Face Hub"],
              },
              {
                title: "F500 Stock Analysis",
                description:
                  "A website built to help new investors get started. Goal: to have comperehsnsive analysis for fortune 500 companies based on proven strategies from investing experts.",
                liveUrl: "https://f500.vercel.app/",
                repoUrl: "https://github.com/Neal-stack/f500",
                tags: ["Next.js", "React", "Tailwind", "APIs"],
              },
              {
                title: "Personal Website",
                description:
                  "My portfolio built with a modern stack. Built with Next.js, React, Tailwind CSS, and deployed on Vercel.",
                liveUrl: "/",
                repoUrl: "https://github.com/Neal-stack/portfolio",
                tags: ["Next.js", "Tailwind", "Vercel"],
                image: "/portfolio_preview.png",
              },
            ].map((project, i) => (
              <article
                key={i}
                className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[55%] lg:w-[40%] xl:w-[32%]
                           rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl p-5
                           flex flex-col min-h-[360px]"
              >
                <div className="aspect-video w-full rounded-xl overflow-hidden border border-white/10 mb-4 bg-black/20">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      width={1280}
                      height={720}
                      className="h-full w-full object-cover"
                      priority={false}
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-slate-500 text-sm">Preview</div>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-3">{project.description}</p>
                {project.tags && project.tags.length ? (
                  <div className="mb-4 flex flex-wrap items-center -ml-0.5">
                    {project.tags.map((t, idx) => (
                      <div key={`tag-${t}-${idx}`} className="flex items-center mr-0.5 mb-1">
                        <span
                          className="inline-flex px-1 py-0.5 rounded-full border border-purple-300/30 bg-purple-400/15 backdrop-blur-sm text-[10px] tracking-wide uppercase text-purple-100 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                        >
                          {t}
                        </span>
                        {idx < project.tags.length - 1 ? (
                          <span className="ml-1 mr-0.5 text-purple-300/80 select-none text-[10px] leading-none self-center" aria-hidden>
                            •
                          </span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="mt-auto pt-2 flex gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      className="rounded-xl px-4 py-2 text-sm font-medium bg-white/10 hover:bg-purple-500/20 transition border border-white/10"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      className="rounded-xl px-4 py-2 text-sm font-medium bg-white/10 hover:bg-purple-500/20 transition border border-white/10"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repo
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}
