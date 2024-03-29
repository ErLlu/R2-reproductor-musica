export const areSameSong = (song, songTitle) => {
    return song.title === songTitle;
};
export const addSong = (song, songs) => {
    songs.push(song);
};
export const isPlaylistFull = (songs) => {
    return songs.length >= 4;
};
export const getErrorMessage = (errorCode) => {
    switch (errorCode) {
        case "exists":
            return "La canción ya existe";
        case "limit":
            return "La playlist está llena";
        default:
            return "Código de error desconocido";
    }
};
export const getSongsCount = (songs) => {
    return songs.length;
};
export const removeSongByPosition = (songs, position) => {
    if (position < 0) {
        position = 0;
    }
    songs.splice(position, 1);
};
export const setCurrentSong = (song) => {
    song.isCurrent = true;
};
export const getNextSongPosition = (songs, currentSongPosition) => {
    let nextSongPosition;
    nextSongPosition = currentSongPosition + 1;
    if (nextSongPosition >= songs.length) {
        nextSongPosition = 0;
    }
    return nextSongPosition;
};
export const isCurrentSong = (song) => {
    return song.isCurrent;
};
//# sourceMappingURL=songs.js.map