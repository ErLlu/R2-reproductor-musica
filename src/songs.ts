import { Song } from "./songsData";

export const areSameSong = (song: Song, songTitle: string): boolean => {
  return song.title === songTitle;
};

export const addSong = (song: Song, songs: Song[]): void => {
  songs.push(song);
};

export const isPlaylistFull = (songs: Song[]): boolean => {
  return songs.length >= 4;
};

export const getErrorMessage = (errorCode: string): string => {
  switch (errorCode) {
    case "exists":
      return "La canción ya existe";
    case "limit":
      return "La playlist está llena";
    default:
      return "Código de error desconocido";
  }
};

export const getSongsCount = (songs: Song[]): number => {
  return songs.length;
};

export const removeSongByPosition = (songs: Song[], position: number): void => {
  if (position < 0) {
    position = 0;
  }
  songs.splice(position, 1);
};

export const setCurrentSong = (song: Song): void => {
  song.isCurrent = true;
};

export const getNextSongPosition = (
  songs: Song[],
  currentSongPosition: number
) => {
  let nextSongPosition: number;
  nextSongPosition = currentSongPosition + 1;
  if (nextSongPosition >= songs.length) {
    nextSongPosition = 0;
  }

  return nextSongPosition;
};

export const isCurrentSong = (song: Song): boolean => {
  return song.isCurrent;
};
