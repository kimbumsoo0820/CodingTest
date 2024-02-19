function solution(name, yearning, photo) {
  let scoreArr = [];
  photo.forEach((data, photoIndex) => {
    let sum = 0;
    data.forEach((photoName) => {
      let findIndex = name.findIndex((x) => x === photoName);
      if (findIndex >= 0) {
        sum = sum + yearning[findIndex];
      }
    });
    scoreArr[photoIndex] = sum;
  });
  var answer = scoreArr;
  return answer;
}
