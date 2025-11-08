// union 

//type alias // custom type

// function combine (num1:number | string,num2:number | string){
//     let result;
//   if(typeof num1 ==="number" && typeof num2 ==="number"){
//     result = num1+num2;
//   } else{
//     result =  num1.toString() + num2.toString();
//   }
//   return result
// }

//   const sum = combine(10,20)
//   const combined = combine("lucky"," bihar")
//   console.log("sum is",sum , "and name is",combined);

  //! literalls

  function combine (num1:number | string,num2:number | string){
    let result;
  if(typeof num1 ==="number" && typeof num2 ==="number"){
    result = num1+num2;
  } else{
    result =  num1.toString() + num2.toString();
  }
  return result
}

  const sum = combine(10,20)
  const combined = combine("lucky"," bihar")
  console.log("sum is",sum , "and name is",combined);