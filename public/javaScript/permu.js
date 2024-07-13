let a="a^2+2ab+b^2";
let b="a^2-2ab+b^2";
let c="a^2+2ab-b^2";
let d="a^2-2ab-b^2";

// let ResultValue.AnsArray=[]
let noQuestion=24;
let currentQuestion=0;
let mark=0;
let wrong=0;
let missQuestion=0;
// let noAns=0;
// let minute;
// let secound;
const ResultValue={
    Mark:0,
    wrong:0,
    Miss:0,
    AnsArray:[String]
}

// 0-> seen  1->give ResultValue.AnsArray  -1=> not seen
for(let i=0;i<noQuestion;i++){
    ResultValue.AnsArray[i]="-1";
}
//  let obj2=run();
//  console.log(obj2)
let permutationCombinationQuestions = [
    {
      question: "In how many different ways can the letters of the word 'LEADER' be arranged?",
      options: [
        { a: "360" },
        { b: "720" },
        { c: "1440" },
        { d: "240" }
      ],
      answer: "b"
    },
    {
      question: "In how many ways can 5 boys and 3 girls be arranged in a row so that all girls are together?",
      options: [
        { a: "20160" },
        { b: "43200" },
        { c: "40320" },
        { d: "120960" }
      ],
      answer: "b"
    },
    {
      question: "How many 3-digit numbers can be formed using the digits 1, 2, 3, 4, and 5 without repetition?",
      options: [
        { a: "60" },
        { b: "120" },
        { c: "20" },
        { d: "80" }
      ],
      answer: "a"
    },
    {
      question: "How many different ways are there to arrange the letters in the word 'COMPUTER'?",
      options: [
        { a: "40320" },
        { b: "20160" },
        { c: "120960" },
        { d: "5040" }
      ],
      answer: "a"
    },
    {
      question: "In how many ways can a committee of 4 people be selected out of 10 people?",
      options: [
        { a: "210" },
        { b: "120" },
        { c: "50" },
        { d: "252" }
      ],
      answer: "a"
    },
    {
      question: "How many ways can you choose 3 balls from a box of 5 red and 4 blue balls?",
      options: [
        { a: "56" },
        { b: "20" },
        { c: "84" },
        { d: "24" }
      ],
      answer: "c"
    },
    {
      question: "In how many ways can the letters of the word 'MATHEMATICS' be arranged?",
      options: [
        { a: "4989600" },
        { b: "1360800" },
        { c: "2721600" },
        { d: "5040" }
      ],
      answer: "a"
    },
    {
      question: "How many ways can a president, a vice president, and a treasurer be chosen from 10 candidates?",
      options: [
        { a: "720" },
        { b: "120" },
        { c: "7200" },
        { d: "1000" }
      ],
      answer: "a"
    },
    {
      question: "How many different ways are there to arrange 6 boys and 4 girls in a line?",
      options: [
        { a: "1209600" },
        { b: "3628800" },
        { c: "50400" },
        { d: "10080" }
      ],
      answer: "b"
    },
    {
      question: "In how many ways can 4 students be chosen from a class of 15?",
      options: [
        { a: "1365" },
        { b: "455" },
        { c: "3003" },
        { d: "816" }
      ],
      answer: "a"
    },
    {
      question: "How many ways can the letters in the word 'ALGORITHM' be arranged?",
      options: [
        { a: "40320" },
        { b: "3628800" },
        { c: "181440" },
        { d: "5040" }
      ],
      answer: "a"
    },
    {
      question: "How many ways can 5 students be chosen from a class of 20?",
      options: [
        { a: "15504" },
        { b: "7315" },
        { c: "27405" },
        { d: "2925" }
      ],
      answer: "a"
    },
    {
      question: "How many ways can 3 boys and 2 girls be chosen from a group of 6 boys and 4 girls?",
      options: [
        { a: "120" },
        { b: "60" },
        { c: "210" },
        { d: "180" }
      ],
      answer: "c"
    },
    {
      question: "How many different ways are there to arrange the letters in the word 'BINARY'?",
      options: [
        { a: "720" },
        { b: "144" },
        { c: "360" },
        { d: "5040" }
      ],
      answer: "a"
    },
    {
      question: "How many ways can 3 girls and 2 boys be chosen from a group of 5 girls and 4 boys?",
      options: [
        { a: "100" },
        { b: "60" },
        { c: "30" },
        { d: "40" }
      ],
      answer: "b"
    },
    {
      question: "How many ways can the letters in the word 'MONITOR' be arranged?",
      options: [
        { a: "5040" },
        { b: "2520" },
        { c: "720" },
        { d: "1440" }
      ],
      answer: "a"
    },
    {
      question: "In how many ways can 7 people be arranged in a row?",
      options: [
        { a: "5040" },
        { b: "2520" },
        { c: "720" },
        { d: "1440" }
      ],
      answer: "a"
    },
    {
      question: "How many ways can a committee of 5 people be selected from a group of 12?",
      options: [
        { a: "792" },
        { b: "462" },
        { c: "924" },
        { d: "520" }
      ],
      answer: "a"
    },
    {
      question: "How many ways can 3 boys and 2 girls be chosen from a group of 7 boys and 6 girls?",
      options: [
        { a: "196" },
        { b: "315" },
        { c: "150" },
        { d: "300" }
      ],
      answer: "b"
    },
    {
      question: "How many different ways are there to arrange the letters in the word 'PYTHON'?",
      options: [
        { a: "720" },
        { b: "1440" },
        { c: "360" },
        { d: "5040" }
      ],
      answer: "a"
    },
    {
      question: "In how many ways can a team of 4 people be chosen from a group of 10?",
      options: [
        { a: "210" },
        { b: "120" },
        { c: "50" },
        { d: "252" }
      ],
      answer: "a"
    },
    {
      question: "How many ways can 2 boys and 2 girls be chosen from a group of 5 boys and 4 girls?",
      options: [
        { a: "45" },
        { b: "60" },
        { c: "30" },
        { d: "20" }
      ],
      answer: "b"
    },
    {
      question: "How many different ways are there to arrange the letters in the word 'NUMBERS'?",
      options: [
        { a: "5040" },
        { b: "2520" },
        { c: "720" },
        { d: "1440" }
      ],
      answer: "a"
    },
    {
      question: "In how many ways can a committee of 3 people be selected from a group of 15?",
      options: [
        { a: "455" },
        { b: "120" },
        { c: "2730" },
        { d: "525" }
      ],
      answer: "a"
    },
    {
      question: "How many ways can 4 boys and 3 girls be chosen from a group of 6 boys and 5 girls?",
      options: [
        { a: "350" },
        { b: "200" },
        { c: "400" },
        { d: "300" }
      ],
      answer: "a"
    },
    {
      question: "How many different ways are there to arrange the letters in the word 'VARIABLE'?",
      options: [
        { a: "40320" },
        { b: "10080" },
        { c: "5040" },
        { d: "20160" }
      ],
      answer: "a"
    },
    {
      question: "In how many ways can 5 people be arranged in a row?",
      options: [
        { a: "120" },
        { b: "24" },
        { c: "720" },
        { d: "60" }
      ],
      answer: "a"
    },
    {
      question: "How many ways can 3 girls and 2 boys be chosen from a group of 8 girls and 5 boys?",
      options: [
        { a: "560" },
        { b: "350" },
        { c: "280" },
        { d: "210" }
      ],
      answer: "a"
    },
    {
      question: "How many different ways are there to arrange the letters in the word 'SCIENCE'?",
      options: [
        { a: "5040" },
        { b: "1440" },
        { c: "720" },
        { d: "2520" }
      ],
      answer: "a"
    }
  ];
  
  // You can now integrate this array into your existing quiz system
  
  
  // You can now integrate this array into your existing quiz system
  
  
// let obj=[{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a-b)^2",option:[a,b,c,b],ans:1},{question:"a^2+b^2",option:[a,b,c,b],ans:3},{question:"a^2-b^2",option:[a,b,c,b],ans:4},{question:(a+b)^2,option:[a,b,c,b],ans:2},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0},{question:"(a+b)^2",option:[a,b,c,b],ans:0}];
console.log(obj.length)

   
  
let question=document.getElementById("question");
let option0=document.getElementById("option0");
let option1=document.getElementById("option1");
let option2=document.getElementById("option2");
let option3=document.getElementById("option3");

let radio=document.getElementsByClassName("radio");
let td=document.getElementsByClassName("td-q");
let submit=document.getElementById("submit");
td[0].style.backgroundColor="red";


//Timer
let LimtSec = 60;
let LimtMin = 19;
let y;
document.getElementById("minute").innerHTML=LimtMin;
function incrementCount() {
    if(LimtSec===0){
      LimtSec=60;
      LimtMin--;
      document.getElementById("minute").innerHTML=LimtMin;
    }
    if(LimtMin===-1){
        result(true);
        clearInterval(y);
        return;
    }
      LimtSec--;
    document.getElementById("secound").innerHTML=LimtSec;

}
 y= setInterval(incrementCount, 1000);

//dispaly the Question and Opstion

display(currentQuestion);
function display(i){
    question.textContent=obj[i].question;
    option0.textContent=obj[i].option[0].a;
    option1.textContent=obj[i].option[1].b;
    option2.textContent=obj[i].option[2].c;
    option3.textContent=obj[i].option[3].d;
}

//Next Question
document.getElementById("next").addEventListener("click",function(){
    console.log("helow")
    currentQuestion++;
    display(currentQuestion);
    console.log(ResultValue.AnsArray[currentQuestion]);
    cleraRadio();
});


//Pervious Question
document.getElementById("prev").addEventListener("click",function(){
    console.log("helow")
    currentQuestion--;
    display(currentQuestion);
    cleraRadio();
   
});

//Slelect Question from Multi-Question Area
for (let i = 0; i <td.length ; i++) {
    td[i].addEventListener("click",function(){
    td[i].textContent=i+1;
    currentQuestion=i;
    display(i);
    cleraRadio();

    })
}


//radio button
console.log(radio)
let prev;
let x=true;
for(let i=0;i<radio.length;i++){
    radio[i].addEventListener("click",function(){

        if(x){
            radio[i].checked=true;
            x=false;
            prev=radio[i].id;
        }
        else{
            document.getElementById(prev).checked=false
            prev=radio[i].id;
           
        }

        if(radio[i].checked){
            switch (i) {
              case 0:
                ResultValue.AnsArray[currentQuestion]="a";
                break;
                case 1:
                  ResultValue.AnsArray[currentQuestion]="b";
                  break;
                  case 2:
                    ResultValue.AnsArray[currentQuestion]="c";
                    break;
                    case 3:
                      ResultValue.AnsArray[currentQuestion]="d";
                      break;
            
              default:
                break;
            }
            td[currentQuestion].style.backgroundColor="green";
            console.log(ResultValue.AnsArray[currentQuestion]);
        }
        else{
            ResultValue.AnsArray[currentQuestion]="-1";
            td[currentQuestion].style.backgroundColor="red";
        }
    });
}

//next redio clear (unCheked)
function cleraRadio(){
    x=true;
    if(ResultValue.AnsArray[currentQuestion]==="-1"){
        td[currentQuestion].style.backgroundColor="red";
        for (let i = 0; i < 4; i++) {
            radio[i].checked=false;
        }
    }
    else{
        console.log("bskjjhd")
        radio[ResultValue.AnsArray[currentQuestion]].checked=true;
    }
}

//Submit
submit.addEventListener("click",function(){
      var txt;
      if (confirm("Are you sure to submit the pepar")) {
        txt = true;
      } else {
        txt = false;
      }
     result(txt);
})


function  result(val){
    
  if(val){
     for (let i = 0; i < noQuestion; i++) {
          if(ResultValue.AnsArray[i]===obj[i].answer){
            ResultValue.Mark++;
          }
          else if(ResultValue.AnsArray[i]==="-1"){
            ResultValue.Miss++;
          }
          else{
            ResultValue.wrong++;
          }
      }
     
      console.log(ResultValue)
     

      fetch("http://localhost:3000/posts",{

        method: 'POST',

        body :JSON.stringify(ResultValue),
        headers: {
         'Content-Type': 'application/json',
        }

      }).then(function(res){
        return res.json();
      }).then(function(data){
        console.log('Success:',+data);
      })

    }
    else{
        console.log("continue...")
    }
}

async function run() {
  console.log("i am ain feach data")
  let res = await fetch("https://localhost:3000/data");
  let data = await res.json();
  console.log(data);
  return data;
}