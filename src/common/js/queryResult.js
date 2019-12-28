class Result {
  constructor({artists, playlists, songs}) {
    artists && (this.artists = artists)
    playlists && (this.playlists = playlists)
    this.songs = songs
  }
}

export function createResult(data) {
  const res = {
    artists: data[0].artists,
    playlists: data[0].playlists,
    songs: data[1].songs
  }
  return new Result(res)
}