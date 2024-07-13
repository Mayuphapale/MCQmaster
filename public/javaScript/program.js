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
let javaProgrammingQuestions = [
    {
      question: "Which of the following is not a primitive data type in Java?",
      options: [
        { a: "int" },
        { b: "float" },
        { c: "boolean" },
        { d: "string" }
      ],
      answer: "d"
    },
    {
      question: "What is the size of an int variable in Java?",
      options: [
        { a: "4 bytes" },
        { b: "2 bytes" },
        { c: "8 bytes" },
        { d: "1 byte" }
      ],
      answer: "a"
    },
    {
      question: "Which of the following is used to find and fix bugs in Java programs?",
      options: [
        { a: "JVM" },
        { b: "JRE" },
        { c: "JDK" },
        { d: "JDB" }
      ],
      answer: "d"
    },
    {
      question: "What is the default value of a boolean variable in Java?",
      options: [
        { a: "true" },
        { b: "false" },
        { c: "0" },
        { d: "1" }
      ],
      answer: "b"
    },
    {
      question: "Which keyword is used to create an instance of a class in Java?",
      options: [
        { a: "class" },
        { b: "object" },
        { c: "new" },
        { d: "create" }
      ],
      answer: "c"
    },
    {
      question: "Which of the following is not a Java feature?",
      options: [
        { a: "Object-oriented" },
        { b: "Use of pointers" },
        { c: "Portable" },
        { d: "Dynamic" }
      ],
      answer: "b"
    },
    {
      question: "Which of these cannot be used for a variable name in Java?",
      options: [
        { a: "identifier" },
        { b: "keyword" },
        { c: "variable" },
        { d: "function" }
      ],
      answer: "b"
    },
    {
      question: "What is the extension of Java bytecode files?",
      options: [
        { a: ".java" },
        { b: ".class" },
        { c: ".js" },
        { d: ".byte" }
      ],
      answer: "b"
    },
    {
      question: "Which of the following is not a Java access modifier?",
      options: [
        { a: "public" },
        { b: "private" },
        { c: "protected" },
        { d: "package" }
      ],
      answer: "d"
    },
    {
      question: "Which of these is a reserved word in Java?",
      options: [
        { a: "object" },
        { b: "null" },
        { c: "goto" },
        { d: "array" }
      ],
      answer: "c"
    },
    {
      question: "Which method must be implemented by all threads in Java?",
      options: [
        { a: "start()" },
        { b: "run()" },
        { c: "stop()" },
        { d: "wait()" }
      ],
      answer: "b"
    },
    {
      question: "Which of the following is not an OOP concept in Java?",
      options: [
        { a: "Inheritance" },
        { b: "Encapsulation" },
        { c: "Polymorphism" },
        { d: "Compilation" }
      ],
      answer: "d"
    },
    {
      question: "What is the size of a char variable in Java?",
      options: [
        { a: "1 byte" },
        { b: "2 bytes" },
        { c: "4 bytes" },
        { d: "8 bytes" }
      ],
      answer: "b"
    },
    {
      question: "Which of these is used to access members of a class in Java?",
      options: [
        { a: "." },
        { b: "#" },
        { c: "@" },
        { d: "%" }
      ],
      answer: "a"
    },
    {
      question: "Which of these is an invalid array declaration in Java?",
      options: [
        { a: "int[] arr;" },
        { b: "int arr[];" },
        { c: "int arr[5];" },
        { d: "int[] arr = new int[5];" }
      ],
      answer: "c"
    },
    {
      question: "Which of the following is used to define an abstract method in Java?",
      options: [
        { a: "abstract" },
        { b: "void" },
        { c: "public" },
        { d: "static" }
      ],
      answer: "a"
    },
    {
      question: "Which of these is not a valid way to declare a main method in Java?",
      options: [
        { a: "public static void main(String[] args)" },
        { b: "public void main(String[] args)" },
        { c: "public static void main(String args[])" },
        { d: "static public void main(String[] args)" }
      ],
      answer: "b"
    },
    {
      question: "Which of these keywords is used to define interfaces in Java?",
      options: [
        { a: "interface" },
        { b: "abstract" },
        { c: "implements" },
        { d: "class" }
      ],
      answer: "a"
    },
    {
      question: "Which of the following is not a valid comment in Java?",
      options: [
        { a: "// comment" },
        { b: "/* comment */" },
        { c: "/** comment */" },
        { d: "# comment" }
      ],
      answer: "d"
    },
    {
      question: "Which of these methods is used to perform output in Java?",
      options: [
        { a: "System.out.print()" },
        { b: "System.output()" },
        { c: "System.println()" },
        { d: "System.display()" }
      ],
      answer: "a"
    },
    {
      question: "What does the keyword 'super' refer to in Java?",
      options: [
        { a: "A subclass" },
        { b: "A superclass" },
        { c: "A class variable" },
        { d: "A class method" }
      ],
      answer: "b"
    },
    {
      question: "Which of the following is not a loop construct in Java?",
      options: [
        { a: "for" },
        { b: "while" },
        { c: "do-while" },
        { d: "repeat" }
      ],
      answer: "d"
    },
    {
      question: "Which of these is not a feature of the final keyword in Java?",
      options: [
        { a: "It prevents inheritance" },
        { b: "It prevents method overriding" },
        { c: "It prevents variable reassignment" },
        { d: "It prevents class instantiation" }
      ],
      answer: "d"
    },
    {
      question: "What is the default value of a local variable in Java?",
      options: [
        { a: "null" },
        { b: "0" },
        { c: "false" },
        { d: "Local variables do not have a default value" }
      ],
      answer: "d"
    },
    {
      question: "Which of the following is used to create a thread in Java?",
      options: [
        { a: "Runnable interface" },
        { b: "Thread class" },
        { c: "Both a and b" },
        { d: "None of the above" }
      ],
      answer: "c"
    },
    {
      question: "Which of the following is not a Java keyword?",
      options: [
        { a: "null" },
        { b: "extends" },
        { c: "interface" },
        { d: "implement" }
      ],
      answer: "d"
    },
    {
      question: "Which of the following is not an access modifier in Java?",
      options: [
        { a: "protected" },
        { b: "public" },
        { c: "private" },
        { d: "external" }
      ],
      answer: "d"
    },
    {
      question: "Which of these is used to handle exceptions in Java?",
      options: [
        { a: "try-catch" },
        { b: "catch-throw" },
        { c: "try-throw" },
        { d: "catch-finally" }
      ],
      answer: "a"
    },
    {
      question: "Which of these operators is used to allocate memory in Java?",
      options: [
        { a: "malloc" },
        { b: "alloc" },
        { c: "new" },
        { d: "create" }
      ],
      answer: "c"
    },
    {
      question: "Which of the following is not a method of the String class in Java?",
      options: [
        { a: "length()" },
        { b: "substring()" },
        { c: "split()" },
        { d: "append()" }
      ],
      answer: "d"
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