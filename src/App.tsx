import { type FormEvent, useState } from "react";
import Filter from "./components/Filter";
import MovieList, { type Movie } from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

const initialMovies: Movie[] = [
  {
    id: 1,
    title: "The Matrix",
    description:
      "A hacker discovers the shocking truth about reality and joins the resistance. In a dystopian future where reality is a simulated world created by machines to pacify humans while using their bodies as an energy source, a computer programmer named Neo becomes aware of the truth and joins a group of rebels to fight against the AI overlords.",
    posterURL: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
    rating: 4.7,
    trailerURL: "https://www.youtube.com/embed/vKQi3bBA1y8",
  },
  {
    id: 2,
    title: "Stranger Things",
    description:
      "A group of kids investigates a supernatural mystery in their small town. When a young boy vanishes mysteriously in the 1980s, his friends discover secret government experiments and a strange new girl with psychokinetic powers. Together, they uncover a hidden world connected to their town through an alternate dimension filled with terrifying creatures.",
    posterURL:
      "https://static.wikia.nocookie.net/strangerthings8333/images/5/57/Stranger_Things_season_4_key_art.jpg",
    rating: 4.4,
    trailerURL: "https://www.youtube.com/embed/b9ncQSEY-qA",
  },
  {
    id: 3,
    title: "Inception",
    description:
      "A team enters dreams to plant an idea while navigating shifting realities. A skilled thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O. As layers of dreams within dreams become more complex, the team must work together to navigate the subconscious and complete their dangerous mission.",
    posterURL: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
    rating: 4.8,
    trailerURL: "https://www.youtube.com/embed/YoHD_XwzArc",
  },
];

function App() {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [trailerURL, setTrailerURL] = useState("");
  const [rating, setRating] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const filteredMovies = movies.filter((movie) => {
    const titleMatches = movie.title
      .toLowerCase()
      .includes(filterTitle.toLowerCase());
    const ratingMatches = filterRating === 0 || movie.rating >= filterRating;
    return titleMatches && ratingMatches;
  });

  const handleAddMovie = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !title.trim() ||
      !description.trim() ||
      !posterURL.trim() ||
      !trailerURL.trim()
    ) {
      return;
    }

    const nextMovie: Movie = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      posterURL: posterURL.trim(),
      trailerURL: trailerURL.trim(),
      rating: Number(rating),
    };

    setMovies((current) => [nextMovie, ...current]);
    setTitle("");
    setDescription("");
    setPosterURL("");
    setTrailerURL("");
    setRating(1);
  };

  if (selectedMovie) {
    return (
      <MovieDetail
        movie={selectedMovie}
        onBack={() => setSelectedMovie(null)}
      />
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
            React Hooks Movie Checkpoint
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            My favorite movies and TV shows
          </h1>
          <p className="mt-4 text-slate-300 sm:text-lg">
            Use the filter controls to search by title or minimum rating, then
            add a new movie to the list.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.95fr]">
          <div className="space-y-8">
            <Filter
              title={filterTitle}
              rating={filterRating}
              onFilterChange={({ title, rating }) => {
                setFilterTitle(title);
                setFilterRating(rating);
              }}
            />

            <section className="rounded-[2rem] bg-slate-900/80 p-6 ring-1 ring-white/10 shadow-2xl shadow-cyan-500/5 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white">Movie list</h2>
              <MovieList
                movies={filteredMovies}
                onMovieClick={setSelectedMovie}
              />
            </section>
          </div>

          <section className="rounded-[2rem] bg-slate-900/80 p-6 ring-1 ring-white/10 shadow-2xl shadow-cyan-500/5 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold text-white">
              Add a new movie
            </h2>
            <form className="mt-6 grid gap-5" onSubmit={handleAddMovie}>
              <label className="grid gap-3 text-sm font-semibold text-slate-200">
                <span>Title</span>
                <input
                  className="rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Movie or show title"
                />
              </label>

              <label className="grid gap-3 text-sm font-semibold text-slate-200">
                <span>Description</span>
                <textarea
                  className="min-h-[96px] rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="Describe the story"
                  rows={3}
                />
              </label>

              <label className="grid gap-3 text-sm font-semibold text-slate-200">
                <span>Poster URL</span>
                <input
                  className="rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                  value={posterURL}
                  onChange={(event) => setPosterURL(event.target.value)}
                  placeholder="https://..."
                />
              </label>

              <label className="grid gap-3 text-sm font-semibold text-slate-200">
                <span>Trailer URL (YouTube embed)</span>
                <input
                  className="rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                  value={trailerURL}
                  onChange={(event) => setTrailerURL(event.target.value)}
                  placeholder="https://www.youtube.com/embed/..."
                />
              </label>

              <label className="grid gap-3 text-sm font-semibold text-slate-200">
                <span>Rating</span>
                <select
                  className="rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                  value={rating}
                  onChange={(event) => setRating(Number(event.target.value))}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-3xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
              >
                Add movie
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
