const state = {
  singer: {},
  playing: false, // 当前是否播放
  fullScreen: false,  // 当前是否全屏播放
  playlist: [], // 播放列表
  sequenceList: [],  // 顺序播放列表
  currentIndex: -1, // 当前播放歌曲索引
  mode: 'sequence'
}

export default state
