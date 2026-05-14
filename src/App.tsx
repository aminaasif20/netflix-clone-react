import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MovieRow from './components/MovieRow';
import { MOCK_MOVIES } from './data/mockMovies';

function App() {
  return (
    <div className="relative h-screen bg-netflix-black lg:h-[140vh]">
      <Navbar />
      <main className="relative pb-24 lg:space-y-24">
        <Banner movie={MOCK_MOVIES[0]} />
        
        <section className="md:space-y-24 -mt-12 relative z-20">
          <MovieRow title="Trending Now" movies={MOCK_MOVIES} />
          <MovieRow title="Top Rated" movies={[...MOCK_MOVIES].reverse()} />
          <MovieRow title="Action Thrillers" movies={MOCK_MOVIES.slice(2)} />
          <MovieRow title="Comedies" movies={MOCK_MOVIES.slice(1, 4)} />
          <MovieRow title="Documentaries" movies={MOCK_MOVIES.slice(0, 3)} />
        </section>
      </main>

      <footer className="py-10 text-center text-gray-500 text-sm">
        <p>© 2023 Netflix Clone - Developed for Demo purposes</p>
      </footer>
    </div>
  );
}

export default App;