import React from 'react';
import { Play, Info } from 'lucide-react';
import { Movie } from '../types';

interface BannerProps {
  movie: Movie;
}

const Banner: React.FC<BannerProps> = ({ movie }) => {
  return (
    <header className="relative h-[85vh] text-white">
      <div className="absolute inset-0">
        <img 
          src={movie.backdrop_path} 
          alt={movie.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-black via-netflix-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-center px-4 md:px-12 pt-20 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {movie.title}
        </h1>
        <p className="text-sm md:text-lg mb-6 line-clamp-3 text-gray-200">
          {movie.overview}
        </p>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-bold hover:bg-white/80 transition">
            <Play fill="black" className="w-5 h-5" />
            Play
          </button>
          <button className="flex items-center gap-2 bg-gray-500/70 text-white px-6 py-2 rounded font-bold hover:bg-gray-500/50 transition">
            <Info className="w-5 h-5" />
            More Info
          </button>
        </div>
      </div>
    </header>
  );
};

export default Banner;