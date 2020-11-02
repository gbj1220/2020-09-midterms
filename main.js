// Your code below.
const isValidPassword = function (str) {
  return str.length < 12 || str.includes('.') || str.includes(' ') ? false : true
}

const onlyCs = function (percentage) {
  // const letterGrade = 
  return percentage.filter((percent) => percent >= 70 && percent <= 79 ? true : false)
}

const countBs = function (percentage) {
  newArr = [];
  percentage.filter((percent) => percent >= 80 && percent <= 89 ? newArr.push(percent) : false)
  let counter = 0;
  for (percent of percentage) {
    if (percent >= 80 && percent <= 89) {
      counter++
    }
  } return counter
}
const lastIndexOfPunctuation = function (str) {
  const punc = ['?!.']
  
  
  for (values of str) {}
  if (str.includes('?')) {
    return str.lastIndexOf('?')
  
  }else if (str.includes('!')) {
    return str.lastIndexOf('!')
  
  }else if (str.includes('.')) {
    return str.lastIndexOf('.')
  
  }else if (str.includes(punc)) {
    return str.lastIndexOf(punc)
  
  }else{
    return str.lastIndexOf()
  }
}












// Our code below. Don't touch!


if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof onlyCs === 'undefined') {
  onlyCs = undefined;
}

if (typeof countBs === 'undefined') {
  countBs = undefined;
}

if (typeof lastIndexOfPunctuation === 'undefined') {
  lastIndexOfPunctuation = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof getCenturies === 'undefined') {
  getCenturies = undefined;
}



module.exports = {
  isValidPassword,
  onlyCs,
  countBs,
  lastIndexOfPunctuation,
  deleteMiddleLetters,
  getCenturies,
}
