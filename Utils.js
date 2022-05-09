class Utils {
  static randomize(arr) {
    let arrCopy = arr.length;
    let randomizeArray = [];
    for (let i = 0; i < arrCopy; i++) {
      let rand = Math.floor(Math.random() * arr.length);
      randomizeArray.push(arr[rand]);
      arr.splice(rand, 1);
    }
    return randomizeArray;
  }
}
