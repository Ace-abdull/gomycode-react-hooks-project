interface FilterProps {
  title: string;
  rating: number;
  onFilterChange: (filters: { title: string; rating: number }) => void;
}

export default function Filter({ title, rating, onFilterChange }: FilterProps) {
  return (
    <section className="rounded-[2rem] bg-slate-900/80 p-6 ring-1 ring-white/10 shadow-2xl shadow-cyan-500/5 backdrop-blur-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
            Filter movies
          </p>
          <p className="mt-2 max-w-xl text-sm text-slate-300">
            Search by title or choose the minimum rating to narrow the list.
          </p>
        </div>
      </div>

      <form
        className="mt-6 grid gap-4 sm:grid-cols-2"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          <span>Search by title</span>
          <input
            type="text"
            className="rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
            value={title}
            placeholder="Type a movie or show title"
            onChange={(event) =>
              onFilterChange({ title: event.target.value, rating })
            }
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          <span>Minimum rating</span>
          <select
            className="rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
            value={rating}
            onChange={(event) =>
              onFilterChange({ title, rating: Number(event.target.value) })
            }
          >
            <option value={0}>All ratings</option>
            <option value={1}>1 star+</option>
            <option value={2}>2 stars+</option>
            <option value={3}>3 stars+</option>
            <option value={4}>4 stars+</option>
            <option value={5}>5 stars</option>
          </select>
        </label>
      </form>
    </section>
  );
}
