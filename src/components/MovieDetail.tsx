import type { Movie } from "./MovieList";

interface MovieDetailProps {
  movie: Movie;
  onBack: () => void;
}

export default function MovieDetail({ movie, onBack }: MovieDetailProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-10 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full bg-cyan-500/20 px-6 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          ← Back to Home
        </button>

        {/* Movie Detail Content */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Poster and Rating */}
          <div className="flex flex-col gap-6">
            <img
              src={movie.posterURL}
              alt={movie.title}
              className="w-full rounded-[2rem] object-cover shadow-2xl shadow-black/50"
            />
            <div className="rounded-[2rem] bg-slate-900/80 p-6 ring-1 ring-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
                Rating
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-4xl font-semibold text-cyan-300">
                  {movie.rating.toFixed(1)}
                </span>
                <span className="text-3xl">⭐</span>
              </div>
            </div>
          </div>

          {/* Title, Description, and Trailer */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {movie.title}
              </h1>
            </div>

            {/* Description */}
            <div className="rounded-[2rem] bg-slate-900/80 p-6 ring-1 ring-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
                Description
              </p>
              <p className="mt-4 leading-relaxed text-slate-300">
                {movie.description}
              </p>
            </div>

            {/* Trailer */}
            <div className="rounded-[2rem] bg-slate-900/80 p-6 ring-1 ring-white/10">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
                Trailer
              </p>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl">
                <iframe
                  className="h-full w-full"
                  src={movie.trailerURL}
                  title={`${movie.title} Trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
