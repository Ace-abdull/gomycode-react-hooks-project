import MovieCard from "./MovieCard";

export interface Movie {
  id: number;
  title: string;
  description: string;
  posterURL: string;
  rating: number;
}

interface MovieListProps {
  movies: Movie[];
}

export default function MovieList({ movies }: MovieListProps) {
  if (movies.length === 0) {
    return (
      <p className="rounded-[1.75rem] bg-slate-950/80 p-8 text-center text-slate-400 ring-1 ring-white/10">
        No movies match the filter yet.
      </p>
    );
  }

  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
