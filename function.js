// ................ Create a function that will return children, teenagers, young people, old people from the age

let Name = prompt('Your name Please?');
let age = prompt('Your age Please?');


const stageOfLife = (age , Name) =>{

    if(age>=7 && age<=14){
        stage = `Hi ${Name} Your are  Children`;
    }else if(age>=14 && age<=21){
        stage = `Hi ${Name} Your are  teenagers`;
    }else if(age>=21 && age<=35){
        stage = `Hi ${Name} Your are  Young`;
    }else if(age>=35 && age<=49){
        stage = `Hi ${Name} Your are  Matured`;
    }else if(age>=49 && age<=63){
        stage = `Hi ${Name} Your are  senior`;
    } else if(age>=63 && age<=98){
        stage = `Hi ${Name} Your are old`;
    }else{
        stage = `Your are the superhero !!!`;
    }
    return stage;
}

console.log(stageOfLife(age, Name));














// ..............Create a function that will return the area of a rectangle, square, triangle
/*
let shape_type =prompt('Your shape type?')
let value_1 =prompt('area value 1??')
let value_2 =prompt('area value 2??')


const areaCal=(shape_type,value_1,value_2=null)=>{
    let shape ="";
    let area ="";
    switch(shape_type){
        case 'rectangle':
            shape = 'Ractangle';
            area=(value_1*value_2);
            break;
         case 'square':
            shape = 'Square';
            area=(value_1*value_1);
            break;
        case 'triangle':
            shape = 'Triangle';
            area=(0.5*value_1*value_2);
            break;
        default:
            shape = 'Undifinde';
            area = 'null';
    }
return `the area of ${shape} is ${area}`;
}

console.log(areaCal(shape_type,value_1,value_2))
  */













// .................GPA, CGPA, GRADE function for result publishing



/* 


let stu_name = prompt('Your name please?');
let stu_class = prompt('Your class name please?');
let stu_roll = prompt('Your Roll please?');
let bn = prompt('Put the mark of Bangla');
let en= prompt('Put the mark of English');
let math = prompt('Put the mark of Math');
let sc= prompt('Put the mark of Science');
let rel= prompt('Put the mark of Religion');


const getGpa=(mark)=>{
 if(mark<=0 && mark<=32){
    gpa = '';
 }else if(mark>=33 && mark<=39){
    gpa = '1';
 }else if(mark>=40 && mark<=49){
    gpa = '2';
 }else if(mark>=50 && mark<=59){
    gpa = '3';
 }else if(mark>=60 && mark<=69){
    gpa = '3.5';
 }else if(mark>=70 && mark<=79){
    gpa = '4';
 }else if(mark>=80 && mark<=100){
    gpa = '5';
 }else{
     gpa ='Invalid Number'
 }
return gpa;


}




const getGrade=(mark)=>{

    let grade ="";
    if(mark<=0 && mark<=32){
       grade = 'F';
    }else if(mark>=33 && mark<=39){
       grade = 'D';
    }else if(mark>=40 && mark<=49){
       grade = 'C';
    }else if(mark>=50 && mark<=59){
       grade = 'B';
    }else if(mark>=60 && mark<=69){
       grade = 'A-';
    }else if(mark>=70 && mark<=79){
       grade = 'A';
    }else if(mark>=80 && mark<=100){
       grade = 'A+';
    }else{
        grade ='Invalid Number'
    }
   return grade;
   
   
   }


   console.log(
    `
    Result Sheet

    Name:    ${stu_name};
    Class:    ${stu_class};
    Roll:    ${stu_roll};
    Name:    ${stu_name};


    --------------------------------------------------------------------------------------------
    Subject              Mark        GPA                 Grade               CGPA
    Bangla               ${bn}       ${getGpa(bn)}       ${getGrade(bn)}
    English               ${en}       ${getGpa(en)}       ${getGrade(en)}
    Math               ${math}       ${getGpa(math)}       ${getGrade(math)}     
    Science               ${sc}       ${getGpa(sc)}       ${getGrade(sc)}
    Religion               ${rel}       ${getGpa(rel)}       ${getGrade(rel)}

   


`
)
 */













// // ...................Create an age calculator function

/* let C_Name =prompt('Your name Please?');
    let Birth_year =prompt('Put Your Birth Year');


const ageCal=()=>{
    
    return ` Hi ${C_Name} ,Your age is ${2022-Birth_year} Years  old`

}

console.log(ageCal())


 */

















//................ Create a BMI function for health

/* let C_name =prompt('Your name please?');
let weight = Number(prompt('Your weight(kg) please ?'));
let height =Number( prompt('Your height(feet) please?'));
let lbs=weight*2.20462
let inches=height*12

let bmi =703*lbs/(inches*inches);  

const BMI_result=(bmi)=>{
    let result;

    if (bmi>=18.5 && bmi<=24.5){
       result=`Hi ${C_name} Yor are Normal and Your Health is Minimal`;
   }else  if (bmi>=25 && bmi<=29.9){
    result=`Hi ${C_name} Yor are overweight and Your Health is increased`;
   }else  if (bmi>=30 && bmi<=34.9){
    result=`Hi ${C_name} Yor are obese and Your Health is High`;
   }else  if (bmi>=35 && bmi<=39.9){
       result=`Hi ${C_name} Yor are severely obese and Your Health is very hHigh`;
   }else if(bmi>40){
    result=`Hi ${C_name} Yor are Morbidly obese and Your Health is very extremely High`;
   }
      
   return result;
}

console.log(BMI_result(bmi));









 */























//................ Create a currency converter function from taka to USD, CAD, POUND, EURO etc





let taka=Number(prompt('How much taka ?'));
let convert=prompt('convert to usd/cad/pound/euro?');



/* const converter=(taka,convert)=>{
    

    if(convert=='usd'){
        result=`${taka} taka = ${taka*0.012} USD`
    }else if(convert=='cad'){
        result=`${taka} taka = ${taka*0.014} CAD`
    }else if(convert=='pound'){
        result=`${taka} taka = ${taka*0.0088} POUND`
    }else if(convert=='euro'){
        result=`${taka} taka = ${taka*0.011} EURO`
    }else{
        result =`plese inter the valid number`
    }
    return result;
}

console.log(converter(taka,convert));


 */




