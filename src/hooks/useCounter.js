import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  const increment = (value = 1) => {
    setCounter((current) => current + value); // El current permite tomar guardar el estado anterior para ejecutar la funcion varia veces
  };
  const decrement = (value = 1) => {
    if (counter === 0) return;
    setCounter((current) => current - value); //
  };
  const reset = () => {
    setCounter(initialState);
  };
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

// function fitsInOneBox(boxes) {
//   const count = { l: [], w: [], h: [] }
//   for(let i = 0; i < boxes.length; i++){
//     if (count.l.includes(boxes[i].l) || count.w.includes(boxes[i].w) || count.h.includes(boxes[i].h)) {
//       return false
//     }
//     count.l.push(boxes[i].l)
//     count.l.push(boxes[i].w)
//     count.l.push(boxes[i].h)
//   }
  
  
//   return true
// }


// function fitsInOneBox(boxes ) {
//   const order = boxes.map(e => {
//     let newArray = Object.values(e)
//     return newArray
//   })
  
//   const newArray = order.sort()
//  if((newArray[0][0] < newArray[1][0] && newArray[1][0] < newArray[2][0]) &&  (newArray[0][1] < newArray[1][1] && newArray[1][1] < newArray[2][1]) && (newArray[0][2] < newArray[1][2] && newArray[1][2] < newArray[2][2])){
//    return true
//  }
  
  
//   return false
// }



// const boxes = [
//   { l: 1, w: 1, h: 1 },
//   { l: 3, w: 3, h: 3 },
//   { l: 2, w: 2, h: 2 }
// ]


// const boxes = [
//   { l: 1, w: 1, h: 1 },
//   { l: 2, w: 2, h: 2 },
//   { l: 3, w: 1, h: 3 }
// ]

// fitsInOneBox(boxes)
// fitsInOneBox([
//   { l: 1, w: 1, h: 1 },
//   { l: 2, w: 2, h: 2 }
// ])





