import * as types from './mutationType'

export const playSong = ({state, commit}, {playlist, index}) => {
  commit(types.SET_FULL_SCREEN, false)
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_PLAYING_STATE, true)
  commit(types.SET_PLAYLIST, playlist)
  commit(types.SET_SEQUENCE_LIST, playlist)
  commit(types.SET_SINGER, playlist[index].artist)
}
export const clearSong = ({state, commit}) => {
  commit(types.SET_FULL_SCREEN, false)
  commit(types.SET_CURRENT_INDEX, -1)
  commit(types.SET_PLAYING_STATE, false)
  commit(types.SET_PLAYLIST, new Array())
  commit(types.SET_SEQUENCE_LIST, new Array())
}