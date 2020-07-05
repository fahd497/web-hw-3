const languages=["html","css","javascript","java"]
const languages2 =3;


console.log("مرحبا بك في برنامج توظيف المبرمجين, يرجى الاجابة عن الأسئلة التالية")

let name1= prompt("ما اسمك؟");
let name3= prompt("كم عمرك؟");
let name4= prompt("كم عدد السنوات الخبرة لديك؟ ");
console.log("لغات البرمجة");
console.log("1."+languages[0]);
console.log("2."+languages[1]);
console.log("3."+languages[2]);
console.log("4."+languages[3]);
let host1= prompt("اختر لغة تتقنها من لغات البرمجة المذكورةبادخال رقمها");


let host2=prompt("اختر لغة اخرى");

if(
name3 >25 &&
name3 <40 &&
name4 > 3 &&
(host1== languages2 || host2==languages2)

){
console.log("تهانينا, تم قبولك يا"+' '+name1);
} else{


    console.log("نأسف انت لست رائعا بالشكل الكافي لتعمل معنا.");
}
 

//  المهمة الثانية 
// 


function logger(temp_array){
    for (let i =0; i < temp_array.length ;i++){
        console.log(temp_array[i])
    }
}
//  let array=[1,2,3];
// logger(array);



 

 function nnok(temp_array){
for (let i =0;i<temp_array.length;i++){
    cee_temp.push(parseInt((temp_array[i] -32)*(5/9)));
}
    return cee_temp;
   
}

//  nnok(feh_temp)

 function mkj(temp_array,min){
for(let i =0; i<temp_array.length; i++){

    if(temp_array[i]> min){
        hot.push(temp_array[i]);
    }
}
return hot;
 }

 let feh_temp=[32,70,99.106];
 let cee_temp=[];
 let hot=[];
let thresshold=70;
function jklm(ook_arra,min){
    logger( nnok(mkj(ook_arra,min)));
}
jklm(feh_temp,thresshold)


// التمرين الثالث



let csd=[];
 function Calculator(){
    let quiz= document.getElementById("input").value;

    let midterm = document.getElementById("input1").value;
    
    
    let  finaltest = document.getElementById("input2").value;
    
    
    let oral= document.getElementById("input3").value;

    


  let quiz1= Number(quiz);
  let midterm1= Number(midterm);
  let  finaltest1 = Number(finaltest);
  let oral1=  Number(oral);
  let u7u=((quiz1 /10)+ (midterm1/25)+ (finaltest1 /50)+(oral1 /15 ));
  
  console.log(u7u);
//   return(u7u);
if(
    u7u >= 90 
  
)
    {

console.log(u7u+" A")

    
}
  else if(
    u7u >= 80 
)
    {

console.log(u7u+" B")

    
}
else if(
    u7u >=70 
   
)
    {

console.log(u7u+" C")

    
}
else if(
    u7u >= 60 
    // u7u <70
)
    {

console.log(u7u+" C")

    
}
else
{

    console.log(u7u+" f")
}

 }
 
