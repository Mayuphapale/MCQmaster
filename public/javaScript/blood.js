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
let bloodRelationQuestions = [
    {
        question: "Pointing to a photograph, a man said, 'I have no brother or sister but that man's father is my father's son.' Whose photograph was it?",
        options: [
            { a: "His own photograph" },
            { b: "His son's photograph" },
            { c: "His father's photograph" },
            { d: "His nephew's photograph" }
        ],
        answer: "b"
    },
    {
        question: "A's father is B's son. C is B's brother. How is A related to C?",
        options: [
            { a: "Nephew" },
            { b: "Son" },
            { c: "Brother" },
            { d: "Father" }
        ],
        answer: "d"
    },
    {
        question: "X is the brother of Y. Y is the sister of Z. Z is the father of W. How is W related to X?",
        options: [
            { a: "Nephew" },
            { b: "Niece" },
            { c: "Brother" },
            { d: "Sister" }
        ],
        answer: "a"
    },
    {
        question: "P is the mother of Q. Q is the son of R. R is the brother of S. How is S related to P?",
        options: [
            { a: "Son" },
            { b: "Daughter" },
            { c: "Nephew" },
            { d: "Niece" }
        ],
        answer: "c"
    },
    {
        question: "A is the father of B. B is the sister of C. C is the daughter of D. How is D related to B?",
        options: [
            { a: "Mother" },
            { b: "Father" },
            { c: "Grandfather" },
            { d: "Grandmother" }
        ],
        answer: "c"
    },
    {
        question: "Rajesh introduces a man as the son of the brother of his mother. How is the man related to Rajesh?",
        options: [
            { a: "Nephew" },
            { b: "Son" },
            { c: "Uncle" },
            { d: "Father" }
        ],
        answer: "a"
    },
    {
        question: "Pointing to a photograph, a woman said, 'This man's son's sister is my mother-in-law.' How is the woman's husband related to the man in the photograph?",
        options: [
            { a: "Son" },
            { b: "Grandson" },
            { c: "Brother" },
            { d: "Nephew" }
        ],
        answer: "a"
    },
    {
        question: "If A is the brother of B; B is the sister of C; and C is the father of D, how is D related to A?",
        options: [
            { a: "Nephew" },
            { b: "Niece" },
            { c: "Son" },
            { d: "Daughter" }
        ],
        answer: "a"
    },
    {
        question: "Introducing a man, a woman said, 'He is the only son of my mother's father.' How is the man related to the woman?",
        options: [
            { a: "Brother" },
            { b: "Son" },
            { c: "Nephew" },
            { d: "Uncle" }
        ],
        answer: "b"
    },
    {
        question: "Pointing to a girl in a photograph, a man said, 'She is the only daughter of my father-in-law's only son.' How is the girl's mother related to the man?",
        options: [
            { a: "Daughter" },
            { b: "Niece" },
            { c: "Sister" },
            { d: "Mother-in-law" }
        ],
        answer: "d"
    },
    {
        question: "If A + B means A is the brother of B; A - B means A is the sister of B; A * B means A is the father of B; and A / B means A is the mother of B, which of the following means M is the niece of P?",
        options: [
            { a: "P / N - M" },
            { b: "P + M - N" },
            { c: "P - M + N" },
            { d: "P * N / M" }
        ],
        answer: "c"
    },
    {
        question: "If A is the brother of B, B is the sister of C, and C is the father of D, how is D related to A?",
        options: [
            { a: "Nephew" },
            { b: "Niece" },
            { c: "Son" },
            { d: "Daughter" }
        ],
        answer: "a"
    },
    {
        question: "Pointing to a photograph, a woman said, 'This man's son's sister is my mother-in-law.' How is the woman's husband related to the man in the photograph?",
        options: [
            { a: "Son" },
            { b: "Grandson" },
            { c: "Brother" },
            { d: "Nephew" }
        ],
        answer: "a"
    },
    {
        question: "If A is the brother of B; B is the sister of C; and C is the father of D, how is D related to A?",
        options: [
            { a: "Nephew" },
            { b: "Niece" },
            { c: "Son" },
            { d: "Daughter" }
        ],
        answer: "a"
    },
    {
        question: "Introducing a man, a woman said, 'He is the only son of my mother's father.' How is the man related to the woman?",
        options: [
            { a: "Brother" },
            { b: "Son" },
            { c: "Nephew" },
            { d: "Uncle" }
        ],
        answer: "b"
    },
    {
        question: "Pointing to a girl in a photograph, a man said, 'She is the only daughter of my father-in-law's only son.' How is the girl's mother related to the man?",
        options: [
            { a: "Daughter" },
            { b: "Niece" },
            { c: "Sister" },
            { d: "Mother-in-law" }
        ],
        answer: "d"
    },
    {
        question: "If A + B means A is the brother of B; A - B means A is the sister of B; A * B means A is the father of B; and A / B means A is the mother of B, which of the following means M is the niece of P?",
        options: [
            { a: "P / N - M" },
            { b: "P + M - N" },
            { c: "P - M + N" },
            { d: "P * N / M" }
        ],
        answer: "c"
    },
    {
        question: "If A is the brother of B, B is the sister of C, and C is the father of D, how is D related to A?",
        options: [
            { a: "Nephew" },
            { b: "Niece" },
            { c: "Son" },
            { d: "Daughter" }
        ],
        answer: "a"
    },
    {
        question: "Pointing to a photograph, a woman said, 'This man's son's sister is my mother-in-law.' How is the woman's husband related to the man in the photograph?",
        options: [
            { a: "Son" },
            { b: "Grandson" },
            { c: "Brother" },
            { d: "Nephew" }
        ],
        answer: "a"
    },
    {
        question: "If A is the brother of B; B is the sister of C; and C is the father of D, how is D related to A?",
        options: [
            { a: "Nephew" },
            { b: "Niece" },
            { c: "Son" },
            { d: "Daughter" }
        ],
        answer: "a"
    },
    {
        question: "Introducing a man, a woman said, 'He is the only son of my mother's father.' How is the man related to the woman?",
        options: [
            { a: "Brother" },
            { b: "Son" },
            { c: "Nephew" },
            { d: "Uncle" }
        ],
        answer: "b"
    },
    {
        question: "Pointing to a girl in a photograph, a man said, 'She is the only daughter of my father-in-law's only son.' How is the girl's mother related to the man?",
        options: [
            { a: "Daughter" },
            { b: "Niece" },
            { c: "Sister" },
            { d: "Mother-in-law" }
        ],
        answer: "d"
    },
    {
        question: "If A + B means A is the brother of B; A - B means A is the sister of B; A * B means A is the father of B; and A / B means A is the mother of B, which of the following means M is the niece of P?",
        options: [
            { a: "P / N - M" },
            { b: "P + M - N" },
            { c: "P - M + N" },
            { d: "P * N / M" }
        ],
        answer: "c"
    },
    {
        question: "If A is the brother of B, B is the sister of C, and C is the father of D, how is D related to A?",
        options: [
            { a: "Nephew" },
            { b: "Niece" },
            { c: "Son" },
            { d: "Daughter" }
        ],
        answer: "a"
    },
    {
        question: "Pointing to a photograph, a woman said, 'This man's son's sister is my mother-in-law.' How is the woman's husband related to the man in the photograph?",
        options: [
            { a: "Son" },
            { b: "Grandson" },
            { c: "Brother" },
            { d: "Nephew" }
        ],
        answer: "a"
    },
    {
        question: "If A is the brother of B; B is the sister of C; and C is the father of D, how is D related to A?",
        options: [
            { a: "Nephew" },
            { b: "Niece" },
            { c: "Son" },
            { d: "Daughter" }
        ],
        answer: "a"
    },
    {
        question: "Introducing a man, a woman said, 'He is the only son of my mother's father.' How is the man related to the woman?",
        options: [
            { a: "Brother" },
            { b: "Son" },
            { c: "Nephew" },
            { d: "Uncle" }
        ],
        answer: "b"
    },
    {
        question: "Pointing to a girl in a photograph, a man said, 'She is the only daughter of my father-in-law's only son.' How is the girl's mother related to the man?",
        options: [
            { a: "Daughter" },
            { b: "Niece" },
            { c: "Sister" },
            { d: "Mother-in-law" }
        ],
        answer: "d"
    },
    {
        question: "If A + B means A is the brother of B; A - B means A is the sister of B; A * B means A is the father of B; and A / B means A is the mother of B, which of the following means M is the niece of P?",
        options: [
            { a: "P / N - M" },
            { b: "P + M - N" },
            { c: "P - M + N" },
            { d: "P * N / M" }
        ],
        answer: "c"
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