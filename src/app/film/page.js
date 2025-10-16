export default function FilmPage() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-purple-900 text-white pt-24">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Film Projects</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A showcase of my film work, exploring storytelling through visual and emotional experiences.
          </p>
        </section>
  
        {/* Featured Film Section */}
        <section id="film" className="mx-auto max-w-5xl px-6 pb-20">
          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-3 text-purple-300">Featured Film</h2>
            <div className="aspect-video bg-black/40 border border-white/10 rounded-xl mb-6 flex items-center justify-center text-slate-500">
              <iframe
                  src="https://www.youtube.com/embed/nI649ohb-y0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Mise-en-scène project from CINE 2064. There is no audio, this project focuses soley on the visual aspect of film.
            </p>
            <a
              href="#"
              className="rounded-xl px-5 py-2 text-sm font-medium bg-white/10 backdrop-blur-md hover:bg-purple-500/20 transition"
            >
              Watch Film
            </a>
          </div>
        </section>
  
        {/* Additional Films Section */}
        <section id="more-films" className="mx-auto max-w-5xl px-6 pb-20">
          <h2 className="text-2xl font-semibold mb-6 text-purple-300">Other Films</h2>
          <p className="text-slate-400 mb-8">
            As I continue creating, my new films will be added below.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg p-6 flex flex-col items-center justify-center text-center">
              <p className="text-slate-500">Coming Soon</p>
            </div>
          </div>
        </section>
      </main>
    );
  }
  
  