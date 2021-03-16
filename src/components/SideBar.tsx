import { useEffect, useState } from 'react';
import { Button } from './Button';

import { GenreResponseProps } from '../App';

interface ISideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

export function SideBar({ genres, selectedGenreId, handleClickButton } : ISideBarProps) {
  return (
    <nav className="sidebar">
          <span>Watch<p>Me</p></span>

          <div className="buttons-container">
            {genres.map(genre => (  
              <Button
                id={String(genre.id)}
                title={genre.title}
                iconName={genre.name}
                onClick={() => handleClickButton(genre.id)}
                selected={selectedGenreId === genre.id}
              />
            ))}
          </div>
    </nav>
  )
}