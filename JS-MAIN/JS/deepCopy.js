const obj = {
    name:"Hem",
    age:26,
    marks:{
        maths:100,
        physics:100,
        chemisty:100,
    },
    arr:[1,2,3],
    abc:{
        def:{
            demo:"demo"
        }
    }
}




const deepClone = (obj) => {
    if(obj===null || typeof obj !== "object"){
        return obj;
    }

    const clone = Array.isArray(obj) ? [] : {};

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            clone[key]=deepClone(obj[key]);
        }
    }
    return clone;
}
// const obj1 = structuredClone(obj); 
const obj1 = deepClone(obj);
obj1.abc.def.demo="demo1";
console.log(obj,obj1);