export const  incrNumb=(num)=>{
   return{
    type: "INCREMENT",
    payload : num
   }
};
export const decrNumb=(num)=> {
   return {
      type: "DECREMENT",
      payload : num
   };
}