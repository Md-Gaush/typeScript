// object ,Array ,tupple,Enum

const person: { // object types
    firstName: string;
    age: number;
    xyz:{
         address:string; // nested types
    };
    skills:string[]; // array types
    skills1:number[]
} = {
    firstName: "lucky",
    age: 21,
    xyz:{
        address:"bihar"
    },
    skills:["react js" , "node js"],
    skills1:[12 , 13],
}
let details : string[];
details = ['hindi','english']

let details1 : any[]; // any loose every power thing of ts
details1 = ['hindi','english',2,true]


// console.log(person)

// tuple
const person1 : {
    name:string;
    age:number;
    skills:string[];
    product:[number,string] // fixed array for tuple
} = {
    name : "lucky",
    age:24,
    skills:["React","node"],
    product:[10,"Macbook M3"]
}

