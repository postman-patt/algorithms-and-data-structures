// sampleArray = ['coding', 'crackers', 'edabit', 'celebration']

// const longestWord = (sampleArray) => {
//   const invalidLetters = ['k', 'm', 'v', 'w', 'x']

//   const validWords = sampleArray.filter((item) => {
//     const word = item.split('')
//     const isInvalid = word.some((letter) => {
//       isTrue = invalidLetters.some((invalidLetter) => letter === invalidLetter)

//       if (isTrue) {
//         return true
//       }
//     })

//     if (isInvalid !== true) {
//       return item
//     }
//   })

//   const longest = validWords.sort((a, b) => {
//     return b.length - a.length
//   })[0]

//   if (longest) {
//     console.log(longest)
//   } else {
//     console.log('')
//   }
// }
// longestWord(sampleArray)
//---------------------------------------------------------------------------

// const sumDigProd = (num1, num2) => {
//   sumTotal = num1 + num2
//   sumNum1 = +sumTotal.toString().split('')[0]
//   sumNum2 = +sumTotal.toString().split('')[1]

//   const prodNums = (num1, num2) => {
//     total = num1 * num2
//     prodNum1 = +total.toString().split('')[0]
//     prodNum2 = +total.toString().split('')[1]

//     if (prodNum1 && prodNum2) {
//       prodNums(prodNum1, prodNum2)
//     } else {
//       console.log(prodNum1)
//     }
//   }

//   prodNums(sumNum1, sumNum2)
// }
// sumDigProd(16, 28)

// const sumDigProd = (...args) => {
//   const sumTotal = args.reduce((total, num) => {
//     return total + num
//   })

//   const arrayTotal = sumTotal
//     .toString()
//     .split('')
//     .map((x) => +x)

//   const prodNums = (array) => {
//     if (array.length === 1) {
//       console.log(array[0])
//     } else {
//       prodTotal = array.reduce((total, num) => {
//         return total * num
//       })

//       const arrayProdTotal = prodTotal
//         .toString()
//         .split('')
//         .map((x) => +x)
//       prodNums(arrayProdTotal)
//     }
//   }

//   prodNums(arrayTotal)
// }
// sumDigProd(8, 16, 89, 3)

//------------------------------------------------------------------

// const primalStrength = (n) => {
//   const isPrime = (n) => {
//     for (i = 2; i < n; i++) {
//       if (n % i === 0) {
//         return false
//       }
//       return true
//     }
//   }

//   const primeBefore = (num) => {
//     for (i = num; num < i >= 0; i--) {
//       let prime = true
//       for (j = 2; j < i; j++) {
//         if (i % j == 0 && i !== j) {
//           prime = false
//           break
//         }
//       }
//       if (prime == true && i !== num) {
//         return i
//       }
//     }
//   }

//   const primeAfter = (num) => {
//     for (i = num; i; i++) {
//       let prime = true
//       for (j = 2; j < i; j++) {
//         if (i % j == 0 && i !== j) {
//           prime = false
//           break
//         }
//       }
//       if (prime == true && i !== num) {
//         return i
//       }
//     }
//   }

//   if (isPrime(n)) {
//     const primeBeforeNum = primeBefore(n)
//     const primeAfterNum = primeAfter(n)

//     switch (true) {
//       case n - primeBeforeNum > primeAfterNum - n:
//         console.log('Strong')
//         break
//       case n - primeBeforeNum < primeAfterNum - n:
//         console.log('Weak')
//         break
//       case n - primeBeforeNum == primeAfterNum - n:
//         console.log('Balanced')
//         break
//     }
//   } else {
//     console.log('Not a prime....')
//   }
// }

// primalStrength(22)

//---------------------------------------------------------------

// const doubleSwap = (string, c1, c2) => {
//   const arrayString = string.split('')
//   const newArrayString = arrayString.map((char) => {
//     switch (true) {
//       case char == c1:
//         return c2
//       case char == c2:
//         return c1
//       default:
//         return char
//     }
//   })

//   const newString = newArrayString.reduce((string, char) => {
//     return (string += char)
//   })

//   console.log(newString)
// }

// doubleSwap('random w#rds writt&n h&r&', '#', '&')

//---------------------------------------------------------------

// const isAstonishing = (num) => {
//   if (num < 9) {
//     console.log('Number cannot be partitioned')
//   } else {
//     const partition = (num) => {
//       let partitions = []
//       const number = num.toString()
//       for (i = 1; i < number.length; i++) {
//         const p1 = +number.slice(0, i)
//         const p2 = +number.slice(i)
//         partitions.push({ p1, p2 })
//       }
//       return partitions
//     }

//     const count = (num1, num2) => {
//       let num = 0
//       for (i = num1; i <= num2; i++) {
//         num += i
//       }
//       return num
//     }

//     const partitions = partition(num)

//     let valid = false
//     let pos = false
//     partitions.forEach((part) => {
//       switch (true) {
//         case part.p1 > part.p2:
//           if (count(part.p2, part.p1) == num) {
//             valid = true
//             pos = 'BA-Astonishing'
//           }
//         case part.p2 > part.p1:
//           if (count(part.p1, part.p2) == num) {
//             valid = true
//             pos = 'AB-Astonishing'
//           }
//         default:
//       }
//     })

//     console.log(pos)
//   }
// }

// isAstonishing(2665444422)

//-------------------------------------------------------------------

// const sampleArray = [1, 1, 1, 1, -3, -4]

// const isPositiveDominant = (array) => {
//   const uniqueOnly = Array.from(new Set(array))

//   let posCount = 0
//   let negCount = 0

//   for (i = 0; i < uniqueOnly.length; i++) {
//     if (uniqueOnly[i] > 0 && uniqueOnly[i] !== 0) {
//       posCount += 1
//     } else if (uniqueOnly[i] < 0 && uniqueOnly[i] !== 0) {
//       negCount += 1
//     }
//   }

//   switch (true) {
//     case posCount > negCount:
//       console.log('Positive Dominant')
//       break
//     case negCount > posCount:
//       console.log('Negative Dominant')
//       break
//     default:
//       console.log('Balanced')
//       break
//   }
// }

// isPositiveDominant(sampleArray)

//--------------------------------------------------------------

// const trackRobot = (...args) => {
//   const directions = [...args]
//   const dirNorthSouth = []
//   const dirEastWest = []

//   for (i = 0; i < directions.length; i++) {
//     if (i % 2 == 0 || i == 0) {
//       dirNorthSouth.push(directions[i])
//       dirEastWest.push(directions[i + 1])
//     }
//   }

//   const trueNorthSouth = dirNorthSouth
//     .filter((element) => {
//       return element !== undefined
//     })
//     .map((dir, index) => {
//       if ((index + 1) % 2 == 0 && index !== 0) {
//         return -dir
//       } else {
//         return dir
//       }
//     })
//     .reduce((total, item) => {
//       return (total += item)
//     })

//   const trueEastWest = dirEastWest
//     .filter((element) => {
//       return element !== undefined
//     })
//     .map((dir, index) => {
//       if ((index + 1) % 2 == 0 && index !== 0) {
//         return -dir
//       } else {
//         return dir
//       }
//     })
//     .reduce((total, item) => {
//       return (total += item)
//     })

//   console.log([trueEastWest, trueNorthSouth])
// }

// trackRobot(-10, 20, 10)
// trackRobot(20, 30, 10, 40)
// trackRobot(0, 0)

//---------------------------------------------------------

// const balance = (str) => {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz'

//   const firstSplit = str.slice(0, Math.floor(str.length / 2)).split('')
//   const secondSplit = str
//     .slice(-Math.floor(str.length / 2), str.length)
//     .split('')

//   const num1 = firstSplit
//     .map((letter) => {
//       const index = alphabet.indexOf(letter) + 1
//       return index
//     })
//     .reduce((total, value) => (total += value))

//   const num2 = secondSplit
//     .map((letter) => {
//       const index = alphabet.indexOf(letter) + 1
//       return index
//     })
//     .reduce((total, value) => (total += value))

//   if (num1 === num2) {
//     return console.log(true)
//   } else {
//     return console.log(false)
//   }
// }
// balanced('zips')
// balanced('brake')
// balance('gfrffewfg')

//----------------------------------------------------------------

// const overlap = (s1, s2) => {
//   const s1ToLower = s1.toLowerCase()
//   const s2ToLower = s2.toLowerCase()

//   switch (true) {
//     case s2.length >= s1.length:
//       const isIndex = s2ToLower.indexOf(s1ToLower)
//       if (s2.length - isIndex == s1.length) {
//         return console.log(true)
//       }
//     case s2.length <= s1.length:
//       const index = s1ToLower.indexOf(s2ToLower)
//       if (s1.length - index == s2.length) {
//         return console.log(true)
//       }
//     default:
//       return console.log(false)
//   }
// }

// overlap('ABC', "Ican'tsingmyABC")
//--------------------------------------------------------------------

//"function name() {}" ➞ "const name = () => {dfefe}"

// const convertFn = (str) => {
//   let arrow = /=>/
//   const checkArrow = arrow.test(str)

//   if (checkArrow) {
//     let arrowFn = str.split(' ')
//     let params = str.match(/\((.*?)\)/)[0]
//     let fn = str.slice(str.indexOf('{'))
//     let regFn = `function ${arrowFn[1] + params} ${fn}`
//     return console.log(regFn)
//   } else {
//     let regFnName = str.match(/\ (.*?)\(/)[1]
//     let params = str.match(/\((.*?)\)/)[0]
//     let fn = str.slice(str.indexOf('{'))
//     let arrowFn = `const ${regFnName} = ${params} => ${fn}`
//     return console.log(arrowFn)
//   }
// }

// convertFn('function(){}')

//------------------------------------------------------------
// const sampleArray = [1, 2, 3, 4, 3, 2, 1, 2, 5]

// const windowMaxes = (array, windowLength) => {
//   const maxNums = []
//   for (i = 0; i < array.length - windowLength + 1; i++) {
//     let maxNum = 0
//     console.log(i)
//     for (j = i; j < i + windowLength; j++) {
//       if (array[j] > maxNum) {
//         maxNum = array[j]
//       }
//     }
//     maxNums.push(maxNum)
//   }
//   return maxNums
// }

// console.log(windowMaxes(sampleArray, 3))

//----------------------------------------------

// const sampleArray = ['1a', 'a', '2b', 'b']

// const numInStr = (array) => {
//   const numsArray = []
//   const re = /(\d)/

//   array.forEach((string) => {
//     const isValid = re.test(string)
//     if (isValid) {
//       numsArray.push(string)
//     }
//   })

//   return numsArray
// }

// console.log(numInStr(sampleArray))

//------------------------------------------

// const additivePersistence = (num) => {
//   var count = 0

//   const recursion = (n) => {
//     const numToArray = n.toString().split('').map(Number)
//     if (numToArray.length === 1) {
//       return
//     } else {
//       count++
//       const totalNums = numToArray.reduce((a, b) => {
//         return a + b
//       })
//       recursion(totalNums)
//     }
//   }

//   recursion(num)

//   return count
// }

// console.log(additivePersistence(1679583))

//--------------------------------------------

// const f1 = (str) => {
//   const f2 = () => {
//     return str
//   }

//   return f2
// }

// const fn = f1('apple')

// console.log(fn())

//---------------------------------------------

// const isExactlyThree = (n) => {
//   let count = 0

//   for (i = 2; i <= n / 2; i++) {
//     if (count <= 1) {
//       if (n % i == 0) {
//         count += 1
//       }
//     } else {
//       return console.log('no')
//     }
//   }
//   if (count == 1) {
//     console.log('yes')
//   }
// }

// isExactlyThree(48)

//---------------------------------------------

// const sampleString = 'How the Avocado Became the Fruit of the Global Trade'

// const getHashTags = (string) => {
//   const array = string.split(' ').sort((a, b) => {
//     return b.length - a.length
//   })
//   const result = []
//   let i = 0
//   while (i < 3) {
//     if (array[i]) {
//       result.push('#' + array[i])
//     }
//     i++
//   }
//   return result
// }

// console.log(getHashTags(sampleString))
// console.log(
//   getHashTags(
//     'Why You Will Probably Pay More for Your Christmas Tree This Year'
//   )
// )
// console.log(getHashTags('Hey Parents, Surprise, Fruit Juice Is Not Fruit'))
// console.log(getHashTags('Visualizing Science'))

//------------------------------------------------------------------

// const sampleString = '3[a]2[c]'

// const stringBuilder = (string) => {
//   const regex = /(\d)\[([^\[\]]+)\]/
//   if (regex.test(string)) {
//     const match = regex.exec(string)
//     const newString = string.replace(regex, match[2].repeat(Number(match[1])))
//     return stringBuilder(newString)
//   } else {
//     return string
//   }
// }

// console.log(stringBuilder(sampleString))

//------------------------------------------------------------------

// const final = (r, c, k) => {
//   const matrix = []
//   for (i = 0; i < r; i++) {
//     const row = []
//     for (j = 0; j < c; j++) {
//       row.push(0)
//     }
//     matrix.push(row)
//   }

//   k.forEach((item) => {
//     regex = /(\d+)([cr])/g
//     const match = regex.exec(item)

//     if (match[2] === 'r') {
//       for (i = 0; i < c; i++) {
//         matrix[Number(match[1])][i] += 1
//       }
//     } else {
//       for (i = 0; i < r; i++) {
//         matrix[i][Number(match[1])] += 1
//       }
//     }
//   })

//   return matrix
// }

// console.log(final(3, 3, ['2r', '2c', '1r', '0c']).join('\n'))
// console.log(final(2, 2, ['0c']).join('\n'))
// console.log(final(3, 3, ['1c', '2c', '2c', '3c', '3c', '3c']).join('\n'))
// console.log(final(3, 3, []).join('\n'))

//---------------------------------------------------------

// function syllable(word) {
//   return word.split(/(?=[^aeiouy][aeiouy])(?!.e$)/)
// }

// console.log(syllable('pancake'))

//----------------------------------------------------

// const lcm = (arrayNums) => {
//   let highestNum = arrayNums.sort((a, b) => a - b)[arrayNums.length - 1]

//   if (
//     arrayNums.every((x) => {
//       return highestNum % x == 0
//     })
//   ) {
//     return highestNum
//   } else {
//     for (i = 2; i > 0; i++) {
//       if (
//         arrayNums.every((x) => {
//           return (highestNum * i) % x == 0
//         })
//       ) {
//         return highestNum * i
//       }
//     }
//   }
// }
// console.log(lcm([1, 2, 3, 4, 5, 6, 7, 8, 9]))
// console.log(lcm([5, 7, 11, 35, 55, 77]))
// console.log(lcm([5]))
// console.log(lcm([5, 7, 11]))

//------------------------------------------------------------

// const sampleArray = ['oven', 'envier', 'erase', 'serious']
// const s2 = ['move', 'over', 'very']
// const s3 = ['to', 'ops', 'psy', 'syllable']
// const s4 = ['aaa', 'bbb', 'ccc', 'ddd']

// const join = (array) => {
//   let joined = array[0]
//   let overlap = []

//   dance: for (i = 0; i < array.length - 1; i++) {
//     for (j = 0; j < array[i].length; j++) {
//       if (array[i + 1].indexOf(array[i].slice(j)) == 0) {
//         overlap.push(array[i].length - j)
//         joined += array[i + 1].slice(array[i].length - j)
//         continue dance
//       }
//     }
//     joined += array[i + 1]
//     overlap.push(0)
//   }

//   const result = [
//     joined,
//     overlap.sort((a, b) => {
//       return a - b
//     })[0],
//   ]
//   return result
// }
// console.log(join(sampleArray))
// console.log(join(s2))
// console.log(join(s3))
// console.log(join(s4))

//----------------------------------------------------------------

// const distance = (str) => {
//   const arrayStr = str.split('')
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   const posVowels = []
//   const result = []

//   dance: for (i = 0; i < arrayStr.length; i++) {
//     for (j = 0; j < vowels.length; j++) {
//       if (arrayStr[i] == vowels[j]) {
//         posVowels.push(i)
//         continue dance
//       }
//     }
//   }

//   for (i = 0; i < arrayStr.length; i++) {
//     let count = []
//     for (j = 0; j < posVowels.length; j++) {
//       count.push(Math.abs(i - posVowels[j]))
//     }
//     result.push(
//       count.sort((a, b) => {
//         return a - b
//       })[0]
//     )
//   }

//   return result
// }

// distance('aaaaa')
// distance('babbb')
// distance('abcdabcd')
// distance('shopper')

//---------------------------------------------------------

// const m1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]

// const m2 = [
//   [5, 1, 9, 11],
//   [2, 4, 8, 10],
//   [13, 3, 6, 7],
//   [15, 14, 12, 16],
// ]

// const rotate = (matrix) => {
//   for (i = matrix.length - 1; i >= 0; i--) {
//     dance: for (j = 0; j < matrix.length; j++) {
//       matrix[j].push(matrix[i].shift())
//       continue dance
//     }
//   }
// }

// console.log(m1)
// rotate(m1)
// console.log(m1)
// console.log(rotate(m2))
// console.log(rotate([[1]]))

//-----------------------------------------------------------------------

// const longestCommonPrefix = (array) => {
//   const sorted = array.sort((a, b) => {
//     return a.length - b.length
//   })

//   for (i = sorted[0].length; i > 0; i--) {
//     if (
//       sorted.every((item) => {
//         return item.indexOf(array[0].slice(0, i)) == 0
//       })
//     ) {
//       return array[0].slice(0, i)
//     }
//   }
//   return ''
// }

// longestCommonPrefix(['flower', 'flow', 'flight'])

//----------------------------------------------------------------------------

// const checkPattern = (array, string) => {
//   const arrayStr = string.split('')
//   const unique = new Set(arrayStr)
//   const dupPos = []

//   unique.forEach((item) => {
//     let count = []
//     for (j = 0; j < arrayStr.length; j++) {
//       if (item == arrayStr[j]) {
//         count.push(j)
//       }
//     }
//     dupPos.push(count)
//   })

//   let result = true

//   dupPos.forEach((item) => {
//     for (i = 0; i < item.length; i++) {
//       let array1 = array[item[0]]
//       let array2 = array[item[i]]

//       let isValid = array1.every(function (element, index) {
//         return element === array2[index]
//       })

//       if (isValid === false) {
//         result = false
//         return
//       }
//     }
//   })

//   return result
// }

// console.log(
//   checkPattern(
//     [
//       [1, 1],
//       [2, 2],
//       [1, 1],
//       [2, 2],
//     ],
//     'ABAB'
//   )
// )
// console.log(
//   checkPattern(
//     [
//       [1, 2],
//       [1, 3],
//       [1, 4],
//       [1, 2],
//     ],
//     'ABCA'
//   )
// )

// console.log(
//   checkPattern(
//     [
//       [1, 2],
//       [1, 2],
//       [1, 2],
//       [1, 2],
//     ],
//     'AABA'
//   )
// )

//------------------------------------------------------------------

// function checkPattern(arr, pattern) {
//   var dict = {}
//   for (var i in pattern) {
//     if (dict[pattern[i]]) {
//       if (dict[pattern[i]].join(',') != arr[i].join(',')) {
//         return false
//       }
//     } else {
//       dict[pattern[i]] = arr[i]
//     }
//   }
//   for (var i in dict) {
//     for (var j in dict) {
//       if (i != j && dict[i].join(',') == dict[j].join(',')) {
//         return false
//       }
//     }
//   }
//   return true
// }

// const a1 = [
//   [11, 2],
//   [1, 12],
//   [2, 2],
// ]

// console.log(checkPattern(a1, 'AAB'))

//------------------------------------------------------------------------

// const isConsecutive = (num) => {
//   dance: for (i = 1; i <= num.length / 2; i++) {
//     if (num.length % i == 0) {
//       let re = new RegExp(`.{1,${i}}`, 'g')
//       let numSplit = num.match(re)
//       console.log(numSplit)

//       for (j = 0; j < numSplit.length - 1; j++) {
//         if (Math.abs(Number(numSplit[j]) - Number(numSplit[j + 1])) !== 1) {
//           continue dance
//         }
//       }
//       return true
//     }
//   }

//   return false
// }

// console.log(isConsecutive('131618225055'))
// console.log(isConsecutive('123124125'))
// console.log(isConsecutive('32332432536'))
// console.log(isConsecutive('326325324323'))
// console.log(isConsecutive('667666'))
// console.log(isConsecutive('999897959493'))
// console.log(isConsecutive('273274273274'))

//-----------------------------------------------------------------

// const words = [
//   'a',
//   'after',
//   'all',
//   'an',
//   'and',
//   'are',
//   'as',
//   'by',
//   'continued',
//   'deadlines',
//   'doubly',
//   'fish',
//   'for',
//   'go',
//   'happen',
//   'happened',
//   'i',
//   'illusion',
//   'is',
//   'long',
//   'love',
//   'lunchtime',
//   'make',
//   'moment',
//   'noise',
//   'nothing',
//   'of',
//   'or',
//   'people',
//   'problem',
//   'second',
//   'so',
//   'summarize',
//   'summary',
//   'thanks',
//   'the',
//   'then',
//   'they',
//   'time',
//   'to',
//   'whooshing',
// ]

// const cleave = (str, words) => {
//   let j = 0
//   let result = []
//   dance: for (i = 0; i <= str.length; i++) {
//     const slice = str.slice(j, i)
//     for (k = 0; k < words.length; k++) {
//       if (
//         slice ==
//         words.sort((a, b) => {
//           return b.length - a.length
//         })[k]
//       ) {
//         j = i
//         result.push(slice)
//         continue dance
//       }
//     }
//   }
//   if (result.join('').length !== str.length) {
//     return 'Cleaving stalled: Word not found'
//   } else {
//     return result
//   }
// }

// console.log(
//   words.sort((a, b) => {
//     return b.length - a.length
//   })
// )
// const cleave = (str, words) => {
//   const separator = '_'

//   words
//     .sort((a, b) => b.length - a.length)
//     .forEach((word, i) => {
//       str = str.replace(new RegExp(word, 'g'), `${i}${separator}`)
//     })

//   console.log(str)
//   return /[a-z]/i.test(str)
//     ? 'Cleaving stalled: Word not found'
//     : str
//         .slice(0, -1)
//         .split(separator)
//         .map((i) => words[i])
//         .join(' ')
// }

// console.log(cleave('solongandthanksforallthefish', words))

//-----------------------------------------------------

// function flatten(r) {
//   const arr = []
//   for (const x of r) arr.push(...(Array.isArray(x) ? flatten(x) : [x]))
//   return arr
// }

// console.log(flatten([['hello1', ['hello5']], 'hello2', ['hello3']]))

//-----------------------------------------------------

// const modulo = (num1, num2) => {
//   let result = Math.abs(num1) - Math.abs(num2)
//   switch (true) {
//     case result < 0:
//       return num1
//     case result === 0:
//       return 0
//     default:
//       if (num1 < 0) {
//         return modulo(-result, num2)
//       } else {
//         return modulo(result, num2)
//       }
//   }
// }

// console.log(modulo(-51, -4))

// console.log(modulo(1024, 7))

// ----------------------------------------------------

// const invert = (arr) => {
//   let result = []

//   for (i in arr) {
//     let arr1 = []
//     for (j in arr[i]) {
//       let arr2 = []
//       for (k in arr[i][j]) {
//         var color = 255 - arr[i][j][k]
//         switch (true) {
//           case color > 255:
//             arr2.push(255)
//             break
//           case color < 0:
//             arr2.push(0)
//             break
//           default:
//             arr2.push(color)
//             break
//         }
//       }
//       arr1.push(arr2)
//     }
//     result.push(arr1)
//   }
//   return result
// }

// console.log(
//   invert([
//     [
//       [255, 255, 255],
//       [255, 255, 255],
//     ],
//     [
//       [255, 255, 255],
//       [255, 255, 255],
//     ],
//   ])
// )

// console.log(
//   invert([
//     [
//       [0, 0, 255],
//       [0, 0, 0],
//       [0, 0, 157],
//       [100, 229, 4],
//     ],
//     [
//       [100, 0, 3],
//       [1, 100, 0],
//       [0, 10, 0],
//       [0, 168, 0],
//     ],
//     [
//       [16, 30, 0],
//       [0, 125, 0],
//       [15, 0, 9],
//       [0, 139, 0],
//     ],
//     [
//       [200, 2, 0],
//       [0, 125, 0],
//       [0, 0, 9],
//       [0, 200, 0],
//     ],
//   ])
// )

// console.log(
//   invert([
//     [
//       [0, 255, 255],
//       [256, 255, 255],
//     ],
//     [
//       [255, -1, 255],
//       [255, 255, 255],
//     ],
//   ]),
//   [
//     [
//       [255, 0, 0],
//       [0, 0, 0],
//     ],
//     [
//       [0, 255, 0],
//       [0, 0, 0],
//     ],
//   ]
// )

//--------------------------------------------------

// const pokerHandRanking = (hand) => {
//   const cardNums = []
//   const suits = []

//   for (i in hand) {
//     cardNums.push(hand[i].slice(0, -1))
//     suits.push(hand[i].slice(-1))
//   }

//   let isRoyalFlush = () => {}
//   // if(cardNums.sort() == )

// }

// // pokerHandRanking(['10h', 'Jh', 'Qh', 'Ah', 'Kh'])

// const test1 = () => {
//   return true
// }

// const test2 = () => {
//   console.log('test2 ran')
//   return ''
// }

// const test = () => test1() && test2() && 'Royal Flush'

// const a = test1() && test2() && 'Royal Flush'
// console.log(a)

// ----------------------------------------------------

// const longest_substring = (str) => {
//   let realResult = []
//   for (j = 0; j < str.length; j++) {
//     let result = []

//     for (i = j; i < str.length; i++) {
//       const isValid = result.every((item) => {
//         return item !== str[i]
//       })

//       if (isValid) {
//         result.push(str[i])
//       } else {
//         realResult.push(result.length)
//         break
//       }
//       realResult.push(result.length)
//     }
//   }

//   if (str !== '') {
//     return realResult.sort((a, b) => {
//       return b - a
//     })[0]
//   } else {
//     return 0
//   }
// }

// console.log(longest_substring(' '))

// --------------------------------------------------------

// const sampleArray = [
//   { brand: 'NARS', name: 'Cosmetics Voyageur Pallete' },
//   { brand: 'NARS', name: 'Cosmetics Voyageur Pallete' },
//   { brand: 'Urban Decay', name: 'Naked Honey Pallete' },
//   { brand: 'Stila', name: 'Stay All Day Liquid Lipstick' },
//   { brand: 'Stila', name: 'Stay All Day Liquid Lipstick' },
//   { brand: 'Stila', name: 'Stay All Day Liquid Lipstick' },
// ]

// const simplify = (arr) => {
//   let result = []
//   for (i in arr) {
//     const isInResult = result.every((item) => {
//       return item.brand !== arr[i].brand && item.name !== arr[i].name
//     })
//     if (isInResult) {
//       result.push({ ...arr[i], count: 1 })
//     } else {
//       const objectIndex = result.findIndex((item) => {
//         return item.brand === arr[i].brand && item.name === arr[i].name
//       })

//       result[objectIndex].count += 1
//     }
//   }

//   return result
// }

// simplify(sampleArray)

// ----------------------------------------------------------------

// const isPalindrome = (string) => {
//   const specialChar = /([^A-Z a-z])/g
//   const whitespace = /\s+/g

//   const newString = string
//     .replace(specialChar, '')
//     .replace(whitespace, '')
//     .toLowerCase()

//   switch (true) {
//     case string.length == 1:
//       return true
//     case newString[0] !== newString[newString.length - 1]:
//       return false
//     case newString[0] == newString[newString.length - 1] &&
//       newString.length == 2:
//       return true
//     default:
//       return isPalindrome(newString.slice(1, newString.length - 1))
//   }
// }

// console.log(isPalindrome('Step on no pets!'))

// -------------------------------------------------------------------

// const numThenChar = (arr) => {
//   const numChar = arr.reduce((a, b) => {
//     return a.concat(b)
//   })

//   const nums = []
//   const chars = []

//   for (i in numChar) {
//     if (typeof numChar[i] === 'number') {
//       nums.push(numChar[i])
//     } else {
//       chars.push(numChar[i])
//     }
//   }

//   let sortedNumChar = nums
//     .sort((a, b) => {
//       return a - b
//     })
//     .concat(chars.sort())

//   let result = []

//   for (i in arr) {
//     let subresult = []
//     for (j in arr[i]) {
//       subresult.push(sortedNumChar.shift())
//     }
//     result.push(subresult)
//   }

//   return result
// }

// numThenChar([
//   [1, 2, 4, 3, 'a', 'b'],
//   [6, 'c', 5],
//   [7, 'd'],
//   ['f', 'e', 8],
// ])

// -------------------------------------------------------------

// const resist = (net) => {
//   const re = /\[([^\[\]\(\)]+)\]|\(([^\[\]\(\)]+)\)/

//   const match = net.match(re)

//   let result = 0

//   switch (true) {
//     case match == null:
//       return parseFloat(Number(net).toFixed(1))
//     case match[0][0] == '(':
//       result += JSON.parse(`[${match[2]}]`).reduce((acc, num) => {
//         return (acc += num)
//       })
//       break
//     case match[0][0] == '[':
//       result +=
//         1 /
//         JSON.parse(`${match[0]}`).reduce((acc, num) => {
//           return (acc += 1 / num)
//         }, 0)
//       break
//   }

//   return resist(net.replace(re, result.toString()))
// }
// console.log(resist('(10, [20, 30])'))
// console.log(resist('[10, (20, 30)]'))

// ----------------------------------------------------------

// const sample = [-1, -9, 0, 8, -76, 5, 3]

// const maxSum = (arrNums) => {
//   let count = 0
//   for (i = 0; i < arrNums.length; i++) {
//     for (j = i + 1; j <= arrNums.length; j++) {
//       var checkNum = arrNums.slice(i, j).reduce((a, b) => {
//         return (a += b)
//       })
//       if (checkNum > count) {
//         count = checkNum
//       }
//     }
//   }

//   return count
// }

// console.log(maxSum(sample))

// --------------------------------------------------------

// const polybius = (text) => {
//   const cipher = [
//     ['a', 'b', 'c', 'd', 'e'],
//     ['f', 'g', 'h', 'i', 'k'],
//     ['l', 'm', 'n', 'o', 'p'],
//     ['q', 'r', 's', 't', 'u'],
//     ['v', 'w', 'x', 'y', 'z'],
//   ]
//   let result = ''

//   const isNum = /^[\d\s]+$/.test(text)

//   if (isNum) {
//     const splitNums = [...text.matchAll(/[\d].|\s+/g)]

//     for (i in splitNums) {
//       var row = Number(splitNums[i][0].split('')[0])
//       var col = Number(splitNums[i][0].split('')[1])
//       if (row !== 0) {
//         result += cipher[row - 1][col - 1]
//       } else {
//         result += splitNums[i][0]
//       }
//     }
//   } else {
//     const newText = text.toLowerCase().replace(/j/g, 'i')
//     dance: for (i in newText) {
//       for (j in cipher) {
//         for (k in cipher[j]) {
//           if (newText[i].toLowerCase() === cipher[j][k]) {
//             var row = Number(j) + 1
//             var col = Number(k) + 1
//             result += row.toString() + col.toString()
//             continue dance
//           }
//         }
//       }
//       if (newText[i] == ' ') {
//         result += ' '
//       }
//     }
//   }

//   return result
// }

// console.log(
//   polybius('just because i dont care doesnt mean that i dont understand')
// )

// Disregard punctuation, but keep spaces - Expected: '24454344 12151311454315 24 14343344 13114215 143415433344 32151133 44231144 24 14343344 45331415424344113314', instead got: '454344 12151311454315 24 14343344 13114215 143415433344 32151133 44231144 24 14343344 45331415424344113314'

// -----------------------------------------------------------------------

// const classifyRug = (rug) => {
//   const isHorizontalSymmetric = () => {
//     let result = true
//     for (i = 0; i < Math.floor(rug.length / 2); i++) {
//       let j = rug.length - 1 - i

//       const isValid = rug[i].every((char, index) => {
//         return char == rug[j][index]
//       })

//       if (!isValid) {
//         result = false
//         break
//       }
//     }
//     return result
//   }

//   const isVerticalSymetric = () => {
//     let result = true
//     for (i = 0; i < rug.length; i++) {
//       for (j = 0; j <= Math.floor(rug[i].length / 2); j++) {
//         let k = rug[i].length - 1 - j
//         if (rug[i][j] !== rug[i][k]) {
//           result = false
//           break
//         }
//       }
//     }
//     return result
//   }

//   switch (true) {
//     case isVerticalSymetric() && isHorizontalSymmetric():
//       return 'perfect'
//     case isHorizontalSymmetric():
//       return 'horizontally symmetric'
//     case isVerticalSymetric():
//       return 'vertically symmetric'
//     default:
//       return 'imperfect'
//   }
// }

// const sample = [
//   ['a', 'b', 'a'],
//   ['b', 'b', 'b'],
//   ['a', 'b', 'a'],
//   ['a', 'b', 'a'],
// ]

// const sample2 = [
//   ['a', 'a', 'b'],
//   ['a', 'a', 'a'],
//   ['b', 'a', 'a'],
// ]
// console.log(classifyRug(sample2))

// ---------------------------------------------------------

// const convert = (s, numRows) => {
//   if (numRows == 1) {
//     return s
//   }
//   let result = []
//   for (i = 0; i < numRows; i++) {
//     result[i] = []
//   }
//   count = 0
//   countup = true
//   for (i = 0; i < s.length; i++) {
//     if (countup) {
//       result[count].push(s[i])
//       count++
//       if (count == numRows - 1) {
//         countup = false
//       }
//     } else {
//       result[count].push(s[i])
//       count--
//       if (count == 0) {
//         countup = true
//       }
//     }
//   }

//   return result.flat().join('')
// }

// console.log(convert('PAYPALISHIRING', 1))

// -----------------------------------------------------------

// const sampleObject = {
//   0: { age: 18, name: 'john', marks: '400' },
//   1: { age: 17, name: 'julie', marks: '400' },
//   2: { age: 16, name: 'Robin', marks: '200' },
//   3: { age: 16, name: 'Bella', marks: '300' },
//   4: { age: 16, name: 'john', marks: '250' },
//   5: { age: 15, name: 'julie', marks: '250' },
// }

// const getObject = (obj) => {
//   const result = {}
//   let count = 0
//   dance: for (x in obj) {
//     for (y in result) {
//       if (obj[x].marks == result[y].marks) {
//         if (obj[x].age > result[y].age) {
//           result[y].name = obj[x].name
//           result[y].age = obj[x].age
//         }
//         continue dance
//       }
//     }
//     result[count] = obj[x]
//     count += 1
//   }

//   return result
// }

// getObject(sampleObject)

// -------------------------------------------------------

// const makeBox = (num) => {
//   let result = []

//   for (i = 0; i < num; i++) {
//     let subResult = ''
//     if (i == 0 || i == num - 1) {
//       subResult += '#'.repeat(num)
//       console.log(subResult)
//     } else {
//       subResult += '#' + ' '.repeat(num - 2) + '#'
//     }
//     result.push(subResult)
//   }
//   return result
// }

// console.log(makeBox(5))

// -------------------------------------------------------

// const majorityVote = (votes) => {
//   let result = {}
//   for (i in votes) {
//     if (!result[votes[i]]) {
//       result[votes[i]] = 1
//     } else {
//       result[votes[i]] += 1
//     }
//   }

//   for (x in result) {
//     if (result[x] > votes.length / 2) {
//       return x
//     }
//   }
//   return null
// }

// console.log(majorityVote([]))

// --------------------------------------------------------

// const maxPossible = (num1, num2) => {
//   const n1 = num1
//     .toString()
//     .split('')
//     .map((item) => {
//       return Number(item)
//     })

//   const n2 = num2
//     .toString()
//     .split('')
//     .map((item) => {
//       return Number(item)
//     })
//     .sort((a, b) => {
//       return b - a
//     })

//   for (i in n1) {
//     if (n2[0] > n1[i]) {
//       n1[i] = n2.shift()
//     }
//   }

//   return Number(n1.join(''))
// }

// maxPossible(9132, 5564)
// maxPossible(8732, 91255)

// ------------------------------------------------------------

// const minPalindromeSteps = (string) => {
//   for (i = 0; i < string.length; i++) {
//     let isMiniPalindrome = true
//     if (string[string.length - 1] == string[i]) {
//       let k = 0
//       for (j = i; j < string.length; j++) {
//         if (string[j] !== string[string.length - 1 - k]) {
//           isMiniPalindrome = false
//         }
//         k++
//       }
//     } else {
//       isMiniPalindrome = false
//     }

//     if (isMiniPalindrome) {
//       return i
//     }
//   }
// }

// // console.log(minPalindromeSteps('race'))
// console.log(minPalindromeSteps('mada'))
// console.log(minPalindromeSteps('racecar'))

// ------------------------------------------------------------

// sampleRoads = {
//   graph: {
//     directed: false,
//     nodes: [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
//     edges: [
//       {
//         source: 0,
//         target: 1,
//         metadata: {
//           distance: 5,
//         },
//       },
//       {
//         source: 1,
//         target: 3,
//         metadata: {
//           distance: 9,
//         },
//       },
//       {
//         source: 3,
//         target: 2,
//         metadata: {
//           distance: 6,
//         },
//       },
//       {
//         source: 2,
//         target: 4,
//         metadata: {
//           distance: 3,
//         },
//       },
//       {
//         source: 4,
//         target: 3,
//         metadata: {
//           distance: 8,
//         },
//       },
//       {
//         source: 4,
//         target: 0,
//         metadata: {
//           distance: 2,
//         },
//       },
//     ],
//   },
// }

// const sampleRoads = {
//   graph: {
//     directed: false,
//     nodes: [
//       { id: 0 },
//       { id: 1 },
//       { id: 2 },
//       { id: 3 },
//       { id: 4 },
//       { id: 5 },
//       { id: 6 },
//       { id: 7 },
//       { id: 8 },
//       { id: 9 },
//     ],
//     edges: [
//       {
//         source: 1,
//         target: 6,
//         label: 'Oak Street',
//         metadata: {
//           distance: 5,
//         },
//       },
//       {
//         source: 6,
//         target: 8,
//         label: 'Oak Street',
//         metadata: {
//           distance: 6,
//         },
//       },
//       {
//         source: 8,
//         target: 9,
//         label: 'Oak Street',
//         metadata: {
//           distance: 11,
//         },
//       },
//       {
//         source: 8,
//         target: 7,
//         label: 'Robin Way',
//         metadata: {
//           distance: 3,
//         },
//       },
//       {
//         source: 7,
//         target: 4,
//         label: 'Robin Way',
//         metadata: {
//           distance: 5,
//         },
//       },
//       {
//         source: 6,
//         target: 7,
//         label: 'Mountain Road',
//         metadata: {
//           distance: 8,
//         },
//       },
//       {
//         source: 7,
//         target: 9,
//         label: 'Mountain Road',
//         metadata: {
//           distance: 9,
//         },
//       },
//       {
//         source: 4,
//         target: 3,
//         label: 'National Street',
//         metadata: {
//           distance: 6,
//         },
//       },
//       {
//         source: 1,
//         target: 0,
//         label: 'Sunrise Drive',
//         metadata: {
//           distance: 4,
//         },
//       },
//       {
//         source: 0,
//         target: 3,
//         label: 'Short Street',
//         metadata: {
//           distance: 3,
//         },
//       },
//       {
//         source: 5,
//         target: 4,
//         label: 'Rickety Creek',
//         metadata: {
//           distance: 7,
//         },
//       },
//       {
//         source: 4,
//         target: 0,
//         label: 'Rickety Creek',
//         metadata: {
//           distance: 5,
//         },
//       },
//       {
//         source: 9,
//         target: 5,
//         label: 'Uphill Grove',
//         metadata: {
//           distance: 6,
//         },
//       },
//       {
//         source: 5,
//         target: 2,
//         label: 'Uphill Grove',
//         metadata: {
//           distance: 5,
//         },
//       },
//       {
//         source: 2,
//         target: 3,
//         label: 'Uphill Grove',
//         metadata: {
//           distance: 7,
//         },
//       },
//     ],
//   },
// }

// const navigator = (road, start, end) => {
//   const { edges } = road.graph
//   const { nodes } = road.graph
//   var table = {}
//   var visited = []
//   var unvisited = []

//   // Populate unvisited nodes
//   for (x in nodes) {
//     unvisited.push(nodes[x].id)
//   }

//   // Populate Table
//   for (i in nodes) {
//     table[nodes[i].id] = { shortestDistance: Infinity, path: null }
//   }

//   // Instantiate starting node distance as 0
//   table[start].shortestDistance = 0

//   // Visit neighbouring nodes
//   while (unvisited.length > 0) {
//     // Get node with shortest distance
//     var currentNode = Object.keys(table)
//       .filter((x) => {
//         for (a in unvisited) {
//           if (x == unvisited[a]) {
//             return true
//           }
//         }
//       })
//       .sort((a, b) => {
//         return table[a].shortestDistance - table[b].shortestDistance
//       })[0]

//     for (q in edges) {
//       var dist =
//         table[currentNode].shortestDistance + edges[q].metadata.distance

//       //If source/target match current node and corresponding source/target distance + current node shortest distance is less than target/source shortest distance in the table then add to table
//       if (
//         edges[q].source == currentNode &&
//         dist < table[edges[q].target].shortestDistance
//       ) {
//         table[edges[q].target].shortestDistance = dist
//         table[edges[q].target].path = currentNode
//       } else if (
//         edges[q].target == currentNode &&
//         dist < table[edges[q].source].shortestDistance
//       ) {
//         table[edges[q].source].shortestDistance = dist
//         table[edges[q].source].path = currentNode
//       }
//     }

//     visited.push(currentNode)

//     unvisited.splice(
//       unvisited.findIndex((id) => {
//         return id == currentNode
//       }),
//       1
//     )
//   }

//   //We use the visited array to determine the path taken.
//   //Shortets path taken = everything before the its position within the visited array
//   //For the starting point, this would be null

//   var path = [end]
//   for (i in Object.keys(table)) {
//     if (path[0] == start) {
//       break
//     } else {
//       path.unshift(table[path[0]].path)
//     }
//   }

//   return {
//     distance: Number(table[end].shortestDistance),
//     path: path.map((z) => {
//       return Number(z)
//     }),
//   }
// }

// console.log(navigator(sampleRoads, 6, 2))

//--------------------------------------------------------------

// const largestIsland = (map) => {
//   let visitedNodes = []
//   let result = []
//   let count = 0

//   const adj = ([x, y]) => {
//     let adjNodes = []
//     for (i = -1; i <= 1; i++) {
//       for (j = -1; j <= 1; j++) {
//         if (
//           x + i < map.length &&
//           x + i >= 0 &&
//           y + j < map[x].length &&
//           y + j >= 0 &&
//           map[x + i][y + j] == 1
//         ) {
//           adjNodes.push([x + i, y + j])
//         }
//       }
//     }

//     return adjNodes
//   }

//   const dfs = (node) => {
//     let adjacentNodes = adj(node)
//     let visited = visitedNodes.some((a) => {
//       return a.every((b, index) => {
//         return b == [node[0], node[1]][index]
//       })
//     })

//     if (visited) {
//       return
//     } else {
//       count += 1
//       visitedNodes.push(node)
//       for (x in adjacentNodes) {
//         dfs(adjacentNodes[x])
//       }
//     }
//   }

//   for (i in map) {
//     for (j in map[i]) {
//       var currentNode = [Number(i), Number(j)]
//       //Check if [i, j] is in visitedNodes
//       var isVisited = visitedNodes.some((a) => {
//         return a.every((b, index) => {
//           return b == [i, j][index]
//         })
//       })

//       //Find unvisited nodes
//       if (map[i][j] == 1 && !isVisited) {
//         //Run DFS
//         dfs(currentNode)
//         result.push(count)
//         count = 0
//       }
//     }
//   }

//   return result.sort((a, b) => {
//     return b - a
//   })[0]
// }

// const map1 = [
//   [0, 1, 0],
//   [0, 1, 1],
//   [0, 1, 1],
// ]

// const map2 = [
//   [1, 0, 0],
//   [0, 0, 0],
//   [0, 0, 1],
// ]

// const map3 = [
//   [1, 0, 0],
//   [1, 0, 0],
//   [1, 0, 1],
// ]

// const map4 = [
//   [1, 0, 0, 0],
//   [1, 0, 0, 1],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
// ]

// const map5 = [
//   [1, 0, 0, 0],
//   [1, 0, 0, 1],
//   [1, 0, 1, 1],
//   [1, 0, 0, 1],
//   [1, 0, 1, 1],
//   [1, 0, 0, 0],
//   [1, 0, 0, 1],
//   [1, 0, 1, 1],
//   [1, 0, 0, 1],
//   [1, 0, 1, 1],
// ]
// console.log(largestIsland(map5))
// largestIsland(map2)
// largestIsland(map3)
// largestIsland(map4)

// --------------------------------------------------------------------

// const threeSum = (nums) => {
//   let result = []
//   for (i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length - 1; j++) {
//       if (nums[i] + nums[i + 1] + nums[j] == 0) {
//         result.push([nums[i], nums[i + 1], nums[j]])
//       }
//     }
//   }

//   return result
// }

// const threeSum = (nums) => {
//   let result = []

//   const sortNums = nums.sort((a, b) => {
//     return a - b
//   })

//   for (i = 0; i < sortNums.length; i++) {
//     if (i > 0 && sortNums[i] == sortNums[i - 1]) {
//       continue
//     }

//     var left = i + 1
//     var right = nums.length - 1

//     while (left < right) {
//       let threeSum = sortNums[i] + sortNums[left] + sortNums[right]

//       if (threeSum > 0) {
//         right -= 1
//       } else if (threeSum < 0) {
//         left += 1
//       } else {
//         result.push([sortNums[i], sortNums[left], sortNums[right]])
//         left += 1
//         while (sortNums[left] == sortNums[left - 1] && left < right) {
//           left += 1
//         }
//       }
//     }
//   }

//   return result
// }

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// console.log(threeSum([0, 0, 0, 0]))

// ---------------------------------------------------------

// // don't change this code
// class Node {
//   constructor(v) {
//     this.val = v
//     this.next = null
//   }
// }
// class LinkedList {
//   constructor(a) {
//     this.head = null
//     this.tail = null
//     if (!!a) {
//       a.forEach((v) => {
//         this.insertTail(v)
//       })
//     }
//   }
//   insertHead(v) {
//     let nn = new Node(v)
//     nn.next = this.head
//     if (!this.tail) {
//       this.tail = nn
//     }
//     this.head = nn
//   }
//   insertTail(v) {
//     if (!this.head) return this.insertHead(v)
//     let nn = new Node(v)
//     this.tail.next = nn
//     this.tail = nn
//   }
//   print() {
//     let o = [],
//       node = this.head
//     while (node) {
//       o.push(node.val)
//       node = node.next
//     }
//     return o
//   }
// }
// // okay, you can change stuff below this line. Have fun!

// const list1 = new LinkedList([1, 2, 3, 4, 5, 6])
// const list2 = new LinkedList([8, 6, 7, 5, 3, 0, 9])
// const list3 = new LinkedList([1, 1, 3, 8])
// const list4 = new LinkedList(['a', 'b', 'c', 'e'])
// const list5 = new LinkedList(['r', 'a', 'c', 'e', 'c', 'a', 'r'])
// const list6 = new LinkedList([1])

// const reverseLinkedList = (linkedlist) => {
//   var current = linkedlist.head
//   var next = null
//   var temp_next = linkedlist.head.next
//   while (true) {
//     current.next = next
//     // head.next = null | node2.next = head
//     next = current
//     // next = head |next = node2

//     if (temp_next == null) {
//       break
//     }
//     current = temp_next
//     // current = node2 | current = node3

//     temp_next = temp_next.next
//     // temp_next = node3 | temp_next = node4
//   }

//   ;[linkedlist.head, linkedlist.tail] = [linkedlist.tail, linkedlist.head]

//   return linkedlist.print()
// }

// console.log(reverseLinkedList(list6))
// console.log(list6)

// ------------------------------------------------------------------

// const products = [
//   { number: 1, price: 100, name: 'Orange juice' },
//   { number: 2, price: 200, name: 'Soda' },
//   { number: 3, price: 150, name: 'Chocolate snack' },
//   { number: 4, price: 250, name: 'Cookies' },
//   { number: 5, price: 180, name: 'Gummy bears' },
//   { number: 6, price: 500, name: 'Condoms' },
//   { number: 7, price: 120, name: 'Crackers' },
//   { number: 8, price: 220, name: 'Potato chips' },
//   { number: 9, price: 80, name: 'Small snack' },
// ]

// const vendingMachine = (products, money, code) => {
//   //Binary Search
//   let start = 0,
//     end = products.length - 1

//   let res

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2)
//     if (code == products[mid].number) {
//       res = mid
//       break
//     } else if (code > products[mid].number) {
//       start = mid + 1
//     } else {
//       end = mid - 1
//     }
//   }

//   console.log(res)
//   const coins = [500, 200, 100, 50, 20, 10]
//   if (res >= 0) {
//     if (products[res].price > money) {
//       return 'Not enough money for this product'
//     } else {
//       let change = []
//       let changeSum = money - products[res].price
//       while (changeSum > 0) {
//         for (i in coins) {
//           if (coins[i] <= changeSum) {
//             changeSum -= coins[i]
//             change.push(coins[i])
//             break
//           }
//         }
//       }
//       return {
//         product: products[res].name,
//         change: change.sort((a, b) => {
//           return b - a
//         }),
//       }
//     }
//   } else {
//     return 'Enter a valid product number'
//   }
// }

// console.log(vendingMachine(products, 100, 1))

// --------------------------------------------------------------

// const security = (txt) => {
//   let re = /T([^G$T]+)\$|\$([^G$T]+)T/g
//   let result = re.test(txt)

//   if (result) {
//     return 'ALARM!'
//   } else {
//     return 'Safe'
//   }
// }

// console.log(
//   security('xxxxTTxGxx$xxTxxx'),
//   security('xxTxxG$xxxx$xxxx'),
//   security('TTxxxx$xxGxx$Gxxx')
// )

// ----------------------------------------------------------

// const doubleSwap = (str, c1, c2) => {
//   var res = ''

//   for (i in str) {
//     switch (true) {
//       case str[i] == c1:
//         res += c2
//         break
//       case str[i] == c2:
//         res += c1
//         break
//       default:
//         res += str[i]
//     }
//   }

//   return res
// }

// console.log(
//   doubleSwap('aabbccc', 'a', 'b'),
//   doubleSwap('128 895 556 788 999', '8', '9'),
//   doubleSwap('random w#rds writt&n h&r&', '#', '&')
// )

// ------------------------------------------------------------

// let errorLog = {}

// let promise = new Promise((resolve, reject) => {
//   throw new Error('Something failed')
// }).catch((err) => {
//   return (errorLog = err)
// })

//You must return in order for the promise status == 'fulfilled' -- the test checks for this

// -------------------------------------------------------------

// const getSubsets = (nums, target) => {
//   return nums
//     .reduce((a, c) => a.concat(a.map((b) => [...b, c])), [[]])
//     .filter((x) => {
//       if (
//         x.reduce((a, b) => {
//           return a + b
//         }, 0) == target
//       ) {
//         return x
//       }
//     })
//     .sort((k, j) => {
//       if (k.length == j.length) {
//         for (i in k) {
//           if (k[i] - j[i] != 0) {
//             return k[i] - j[i]
//           }
//         }
//       } else {
//         return k.length - j.length
//       }
//     })
// }
// console.log(getSubsets([-1, 0, 1, 2], 2), getSubsets([1, 2, 3, 4], 5))

// ---------------------------------------------------------------

// const isWristband = (pattern) => {
//   const isHorizontal = (x) => {
//     return x.every((z) => {
//       return z.every((color) => {
//         return color == z[0]
//       })
//     })
//   }

//   const isVertical = (x) => {
//     console.log(x)
//     return x[0].every((a, index) => {
//       return x.every((b) => {
//         return b[index] == a
//       })
//     })
//   }

//   const isDiagonalRight = (q) => {
//     return q.every((w, index1) => {
//       if (index1 !== q.length - 1) {
//         var rotated = w.slice(1, w.length)
//         return rotated.every((m, n) => {
//           return q[index1 + 1][n] == m
//           // }
//         })
//       } else {
//         return true
//       }
//     })
//   }

//   const isDiagonalLeft = (p) => {
//     return p.every((a, index) => {
//       if (index !== p.length - 1) {
//         var rotated = a.slice(0, a.length - 1)
//         return rotated.every((m, n) => {
//           return p[index + 1][n + 1] == m
//         })
//       } else {
//         return true
//       }
//     })
//   }

//   let res = [
//     isDiagonalLeft(pattern),
//     isDiagonalRight(pattern),
//     isHorizontal(pattern),
//     isVertical(pattern),
//   ]
//   return res
// }

// // console.log(
// //   isWristband([
// //     ['A', 'B'],
// //     ['A', 'B'],
// //     ['A', 'B'],
// //   ])
// // )

// console.log(
//   isWristband([
//     ['A', 'B', 'C'],
//     ['C', 'A', 'B'],
//     ['B', 'C', 'A'],
//     ['A', 'B', 'C'],
//   ])
// )

// // Diagonal Right
// console.log(
//   isWristband([
//     ['A', 'B', 'C'],
//     ['B', 'C', 'A'],
//     ['C', 'A', 'B'],
//     ['A', 'B', 'A'],
//   ])
// )

// console.log(
//   isWristband([
//     ['A', 'B', 'C'],
//     ['B', 'C', 'D'],
//     ['C', 'D', 'E'],
//     ['D', 'E', 'E'],
//   ])
// )

// -------------------------------------------------------------------

// const groupAnagrams = (arr) => {
//   let result = []

//   while (arr.length > 0) {
//     let subResult = []

//     let j = 0
//     while (j < arr.length) {
//       let reverse = arr[0].split('').sort().join('')
//       let word = arr[j].split('').sort().join('')
//       if (j != 0 && word == reverse) {
//         subResult.push(arr.splice(j, 1)[0])
//         j -= 1
//       }
//       j += 1
//     }

//     subResult.push(arr.shift())

//     result.push(subResult)
//   }

//   return result
// }

// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
// console.log(groupAnagrams(['']))
// console.log(groupAnagrams([''])

// const groupAnagrams = (arr) => {
//   const hashMap = new Map()

//   for (i in arr) {
//     let sortStr = arr[i].split('').sort().join('')
//     if (hashMap.has(sortStr)) {
//       hashMap.set(sortStr, [...hashMap.get(sortStr), arr[i]])
//     } else {
//       hashMap.set(sortStr, [arr[i]])
//     }
//   }

//   return Array.from(hashMap.values())
// }

// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
// console.log(groupAnagrams(['']))
// console.log(groupAnagrams(['', '', '']))

// -------------------------------------------------------------------

// const findFrequent = (list) => {
//   const item = new Map()

//   for (i in list) {
//     if (item.has(list[i])) {
//       item.set(list[i], item.get(list[i]) + 1)
//     } else {
//       item.set(list[i], 1)
//     }
//   }

//   let res = []

//   for (x of item.entries()) {
//     res.push(x)
//   }
//   return res.sort((a, b) => {
//     return b[1] - a[1]
//   })[0][0]
// }

// console.log(findFrequent([3, 7, 3]))
// console.log(findFrequent([null, 'hello', true, null]))

// ---------------------------------------------------------------------

// class Battleship {
//   constructor(scheme, input) {
//     this.scheme = scheme
//     this.input = input
//     this.hit = 0
//     this.score = 0
//     this.sunkCruisers = 0
//     this.bo = this.buildboard()
//   }

//   buildboard() {
//     var bo = [
//       ['○', '○', '○', '○', '○'],
//       ['○', '○', '○', '○', '○'],
//       ['○', '○', '○', '○', '○'],
//       ['○', '○', '○', '○', '○'],
//       ['○', '○', '○', '○', '○'],
//     ]

//     for (var i in this.scheme) {
//       var y = this.scheme[i].charCodeAt(0) - 65
//       var x = Number(this.scheme[i][1]) - 1
//       bo[y][x] = '●'
//     }

//     for (var h in this.input) {
//       var y = this.input[h].charCodeAt(0) - 65
//       var x = Number(this.input[h][1]) - 1
//       if (bo[y][x] == '●') {
//         bo[y][x] = '☀'
//         this.hit += 1
//         this.score += 1
//       } else {
//         bo[y][x] = '☼'
//       }
//     }

//     for (var m in this.input) {
//       var y = this.input[m].charCodeAt(0) - 65
//       var x = Number(this.input[m][1]) - 1
//       if (bo[y][x] == '☀' && this.adj([x, y], bo)) {
//         this.sunkCruisers += 1 / 2
//         this.score += 1
//       }
//     }

//     return bo
//   }

//   adj(pos, bo) {
//     let x = pos[0]
//     let y = pos[1]
//     var left = x - 1 >= 0 ? bo[y][x - 1] : 0
//     var right = x + 1 < bo[y].length ? bo[y][x + 1] : 0
//     var bottom = y + 1 < bo.length ? bo[y + 1][x] : 0
//     var top = y - 1 >= 0 ? bo[y - 1][x] : 0

//     if (left == '☀' || right == '☀' || top == '☀' || bottom == '☀') {
//       return true
//     } else {
//       return false
//     }
//   }

//   board() {
//     return this.bo
//   }

//   hits() {
//     return this.hit
//   }

//   points() {
//     return this.score
//   }

//   sunk() {
//     return this.sunkCruisers
//   }
// }

// const s1 = ['A1', 'C1', 'B2', 'B3', 'D2', 'E2', 'E4', 'E5', 'A5']
// const input1 = ['A1', 'B2', 'C3', 'D4', 'E5', 'E4']
// const s2 = ['A1', 'C1', 'B2', 'B3', 'D2', 'E2', 'E4', 'E5', 'A5']
// const input2 = ['A1', 'B2', 'C3', 'D4', 'E5', 'E4']
// const s3 = ['A2', 'A4', 'C1', 'C2', 'E3', 'C4', 'C5', 'D3', 'E5']
// const input3 = ['A1', 'B1', 'D1', 'E1', 'A3', 'A4']
// const s4 = ['A1', 'B1', 'D1', 'E1', 'A3', 'A4', 'D3', 'E4', 'D5']
// const input4 = ['A2', 'B4', 'C1', 'D3', 'E5', 'A5']
// const b2 = new Battleship(s4, input3)
// const b3 = new Battleship(s1, input1)

// console.log(b2)
// console.log(b3)

// -------------------------------------------------------------------

// const snake = (n) => {
//   total = n * n

//   var count = 0
//   let snake = 1
//   while (true) {
//     snake *= 2
//     if (snake > total) {
//       break
//     }
//     count += 1
//   }

//   return count
// }

// console.log(snake(3), snake(6), snake(24))

// ------------------------------------------------------------------------------

// const scoreIt = (s) => {
//   res = 0

//   count = 0

//   num = ''

//   for (i in s) {
//     switch (true) {
//       case s[i] == '(':
//         res += Number(num) * count
//         num = ''
//         count += 1
//         break
//       case s[i] == ')':
//         res += Number(num) * count
//         num = ''
//         count -= 1
//         break
//       case !isNaN(s[i]):
//         num += s[i]
//     }
//   }

//   return res
// }

// console.log(scoreIt('4(123)'))

// ------------------------------------------------------------------

// const compareVersion = (version1, version2) => {
//   const v1 = version1.split('.')
//   const v2 = version2.split('.')

//   var sim1 = ''
//   var sim2 = ''

//   for (i in v1.length > v2.length ? v1 : v2) {
//     const rev1 = v1[i] ? Number(v1[i]) : 0
//     const rev2 = v2[i] ? Number(v2[i]) : 0

//     sim1 += String(rev1)
//     sim2 += String(rev2)
//   }

//   switch (true) {
//     case Number(sim1) > Number(sim2):
//       return 1
//     case Number(sim1) < Number(sim2):
//       return -1
//     default:
//       return 0
//   }
// }

// console.log(compareVersion('1.01', '1.001'))

// console.log(compareVersion('1.0', '1.0.0'))

// console.log(compareVersion('0.1', '1.1'))

// console.log(compareVersion('1.0.1', '1'))

// console.log(compareVersion('7.5.2.4', '7.5.3'))

// -------------------------------------------------------------

// function climbingStairs(cost) {
//   for (i = 2; i < cost.length; i++) {
//     cost[i] += Math.min(cost[i - 1], cost[i - 2])
//     console.log(cost)
//   }
//   return Math.min(...cost.slice(-2))
// }

// console.log(climbingStairs([1, 2, 3, 4, 1, 5, 6, 3, 8]))

// --------------------------------------------------------------

// const isLandPerimeter = (grid) => {
//   let count = 0
//   for (i = 0; i < grid.length; i++) {
//     for (m = 0; m < grid[i].length; m++) {
//       if (grid[i][m] == 1) {
//         // Check Left
//         if (m - 1 < 0) {
//           count += 1
//         } else if (grid[i][m - 1] == 0) {
//           count += 1
//         }

//         //Check Right
//         if (m + 1 > grid[i].length - 1) {
//           count += 1
//         } else if (grid[i][m + 1] == 0) {
//           count += 1
//         }

//         //Check top
//         if (i - 1 < 0) {
//           count += 1
//         } else if (grid[i - 1][m] == 0) {
//           count += 1
//         }

//         //Check Bottom
//         if (i + 1 > grid.length - 1) {
//           count += 1
//         } else if (grid[i + 1][m] == 0) {
//           count += 1
//         }
//       }
//     }
//   }
//   return count
// }

// console.log(
//   isLandPerimeter([
//     [0, 1, 0, 0],
//     [1, 1, 1, 0],
//     [0, 1, 0, 0],
//     [1, 1, 0, 0],
//   ])
// )

// ------------------------------------------------------------------

// const restoreIPaddress = (s) => {
//   //Backtracking
//   let res = []

//   let N = s.length

//   const backtrack = (temp, pos, dot) => {
//     console.log(temp, pos, dot)

//     if (pos > N) {
//       return
//     }

//     if (pos == N && dot == 4) {
//       res.push(temp)
//       return
//     }

//     if ((pos == N && dot < 4) || (pos < N && dot == 4)) {
//       return
//     }

//     if (s[pos] == '0') {
//       backtrack(temp.concat([s.slice(pos, pos + 1)]), pos + 1, dot + 1)
//       return
//     }

//     //trying 1, 2 and 3 numbers
//     backtrack(temp.concat([s.slice(pos, pos + 1)]), pos + 1, dot + 1)
//     backtrack(temp.concat([s.slice(pos, pos + 2)]), pos + 2, dot + 1)

//     if (Number(s.slice(pos, pos + 3)) <= 255) {
//       backtrack(temp.concat([s.slice(pos, pos + 3)]), pos + 3, dot + 1)
//     }
//   }

//   backtrack([], 0, 0)

//   return res
// }

// console.log(restoreIPaddress('25525511135'))

// --------------------------------------------------------

// const gridPos = (pos) => {
//   let combos = []

//   for (i = 0; i < pos[0]; i++) {
//     combos.push('Up')
//   }

//   for (x = 0; x < pos[1]; x++) {
//     combos.push('Left')
//   }

//   const permutations = combos.reduce(
//     (a, c) => a.concat(a.map((b) => [...b, c])),
//     [[]]
//   )

//   let result = []

//   const permute = (arr, m = []) => {
//     if (arr.length === 0) {
//       result.push(m)
//     } else {
//       for (let i = 0; i < arr.length; i++) {
//         let curr = arr.slice()
//         let next = curr.splice(i, 1)
//         permute(curr.slice(), m.concat(next))
//       }
//     }
//   }

//   permute(combos)

//   return combos.length
// }

// console.log(gridPos([1, 1]))

// ---------------------------------------------------------

// const gridPos = (pos) => {
//   const fact = (num, count = 1) => {
//     if (num == 0) {
//       return count
//     }

//     count *= num

//     return fact(num - 1, count)
//   }

//   return fact(pos[0] + pos[1]) / fact(pos[1]) / fact(pos[0])
// }

// console.log(gridPos([1, 1]))

// ---------------------------------------------------------

// const simple_increment = (n, iterations, step) => {
//   let pos = String(n).length - 1

//   while (iterations != 0) {
//     // Move pointer

//     let trans = step % String(n).length
//     pos =
//       pos - trans < 0 ? String(n).length - Math.abs(pos - trans) : pos - trans

//     n += 10 ** pos

//     iterations -= 1
//   }
//   return n
// }

// console.log(simple_increment(99, 99, 99))
// console.log(simple_increment(1673, 2, 16))

// -------------------------------------------------------------

// const findAndRemove = (obj) => {
//   for (const [key, value] of Object.entries(obj)) {
//     for (const [key2, value2] of Object.entries(value)) {
//       if (isNaN(value2)) {
//         delete obj[key][key2]
//       } else {
//         obj[key][key2] = Number(value2)
//       }
//     }
//   }

//   return obj
// }

// console.log(
//   findAndRemove({
//     kitchen: {
//       ['gold spoons']: '900',
//       piano: '550',
//       notes: 'ga0r76ba22g4e',
//     },
//     cellar: {
//       reminder: 'dog',
//       bottle: '750',
//     },
//   })
// )

// ----------------------------------------------------------
//Definition for singly-linked list.
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val
//   this.next = next === undefined ? null : next
// }

// const addTwoNumbers = (n1, n2) => {
//   var num1 = []
//   var num2 = []

//   let node1 = n1
//   while (true) {
//     num1.push(String(node1.val))
//     if (node1.next == null) {
//       break
//     }
//     node1 = node1.next
//   }

//   let node2 = n2
//   while (true) {
//     num2.push(String(node2.val))
//     if (node2.next == null) {
//       break
//     }
//     node2 = node2.next
//   }

//   const sum = String(
//     Number(num1.reverse().join('')) + Number(num2.reverse().join(''))
//   ).split('')

//   let i = 0
//   let resNode = null
//   while (i < sum.length) {
//     newNode = new ListNode(Number(sum[i]), resNode)

//     resNode = newNode

//     i++
//   }

//   console.log(sum)

//   return resNode
// }

// l1 = [2, 4, 3]
// l2 = [5, 6, 4]

//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const addTwoNumber = (l1, l2) => {
  var n1 = l1
  var n2 = l2
  let node = new ListNode()
  const start = node
  while (true) {
    if (!n1 && !n2) {
      return start
    }
    var val1 = !n1 ? 0 : n1.val
    var val2 = !n2 ? 0 : n2.val

    var sum = val1 + val2

    n1 = n1 ? n1.next : null
    n2 = n2 ? n2.next : null

    if (sum >= 10 || node.val + sum == 10) {
      node.val = (node.val + sum) % 10
      node.next = new ListNode(1)
    } else {
      node.val += sum
      if (!n1 && !n2) {
        return start
      } else {
        node.next = new ListNode()
      }
    }

    node = node.next
  }
}

var s3 = new ListNode(3)
var s2 = new ListNode(4, s3)
var s1 = new ListNode(2, s2)
var m3 = new ListNode(4)
var m2 = new ListNode(6, m3)
var m1 = new ListNode(5, m2)

console.log(addTwoNumber(s1, m1))
