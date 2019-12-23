function getRandomIndex(l, r) {
  return Math.floor(Math.random() * (r - l + 1) + l)
}

function swap(arr, a, b){
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function shuffle(arr) {
  arr.forEach((val, i) => {
    let randomIndex = getRandomIndex(0, i)
    swap(arr, randomIndex, i)
  })
  return arr
}

export default shuffle