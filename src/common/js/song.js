class Song {
  constructor({
    id,
    name,
    album,
    artist,
    albumId,
    albumPic
  }){
    this.id = id
    this.name = name
    this.album = album
    this.artist = artist
    this.albumId = albumId
    this.albumPic = albumPic
  }
}

export function createSong(data) {
  return new Song({
    id: data.id,
    name: data.name,
    album: data.al.name,
    artist: data.ar[0].name,
    albumId: data.al.id,
    albumPic: data.al.picUrl
  })
}