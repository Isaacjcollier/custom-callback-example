var num = [5, 7, 8, 10]


function max (arr, callback) {
  var maxValue = arr[0]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i]
    }
  } return callback(maxValue)
}

function min () {
  return 'not doing anything'
}
module.exports = {
  max: max,
  min: min
}
