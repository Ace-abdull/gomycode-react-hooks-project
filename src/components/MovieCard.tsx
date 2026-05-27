import type { Movie } from "./MovieList";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] bg-slate-900/95 shadow-2xl shadow-black/20 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:shadow-[0_40px_100px_rgba(15,23,42,0.35)]">
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="h-72 w-full object-cover"
      />
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
          <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm font-semibold text-cyan-300">
            ⭐ {movie.rating.toFixed(1)}
          </span>
        </div>
        <p className="text-sm leading-6 text-slate-300">{movie.description}</p>
      </div>
    </article>
  );
}
