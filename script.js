// task1
// const task1 = (array1,array2) =>{
//     return [ array1[0] + array2[0], array1[1] + array2[1]]
// }
// console.log(task1([2,4], [1,3]))

// task2
// const task2 = array =>{
//     return array.map((item) => item* 2)
// }
// console.log(task2([1,2,3,4,5]))

// task4
// const task4 = array =>{
//     return array.map((item) => `<div>${item}</div>`)
// }
// console.log(task4([1,2]))

// task5
// const task5 = array =>{
//    return array.filter((item) => item.length % 2 === 0)
// }
// console.log(task5(['ab','abc','abcd']))

// task6
// const task6 = array =>{
//     return array.map((item) => item * 2).filter((item) => item % 10 === 0)
// }
// console.log(task6([1,2,3,7,10,5]))

// task7
// const task7 = array =>{
//     return array.filter((item) => item)
// }
// console.log(task7([true,false,true,true]))

// task8
// const task8 = array =>{
//     return array.filter((item) => typeof item === 'boolean')
// }
// console.log(task8([true, false, true,true, undefined, true, undefined]))

// task9
// const task9 = array =>{
//     return array.reduce((acc,item) => acc + item,0)
// }
// console.log(task9([1,2,3,4,5]))

// task10
// const task10 = array =>{
//     return array.reduce((acc, item) => acc && item,true )
// }
// console.log(task10([true,true,true,true]))

// task14
// const task14 = array =>{
//     return array.reduce((acc,item) =>{
//        return (acc + item)
//     },0) / array.length
// }
// console.log(task14([4, 6]))

// task15
// const task15 = (array1,array2) =>{
//     return array1.reduce((acc,item) => item(acc),array2)
// }
// console.log(task15([ (a) => a + 1, (a) => a * 2 ], 5))

