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
let obj = [
    {
      question: "The following bar chart shows the number of students enrolled in different courses at a university. Analyze the chart and answer the following questions.",
      chart:"",
      subquestions: [
        {
          question: "How many students are enrolled in the Computer Science course?",
          options: [
            { a: "150" },
            { b: "200" },
            { c: "250" },
            { d: "300" }
          ],
          answer: "c"
        },
        {
          question: "Which course has the highest number of students enrolled?",
          options: [
            { a: "Mathematics" },
            { b: "Computer Science" },
            { c: "Biology" },
            { d: "Physics" }
          ],
          answer: "b"
        },
        {
          question: "What is the total number of students enrolled in all the courses combined?",
          options: [
            { a: "800" },
            { b: "1000" },
            { c: "1200" },
            { d: "1400" }
          ],
          answer: "c"
        }
      ]
    },
    {
      question: "The pie chart below shows the distribution of the budget of a company. Examine the chart and answer the questions.",
      chart: "https://www.example.com/piechart1.jpg",
      subquestions: [
        {
          question: "What percentage of the budget is allocated to Marketing?",
          options: [
            { a: "10%" },
            { b: "20%" },
            { c: "30%" },
            { d: "40%" }
          ],
          answer: "c"
        },
        {
          question: "If the total budget is $500,000, how much is allocated to Research and Development?",
          options: [
            { a: "$100,000" },
            { b: "$150,000" },
            { c: "$200,000" },
            { d: "$250,000" }
          ],
          answer: "a"
        },
        {
          question: "Which two sectors combined have the largest share of the budget?",
          options: [
            { a: "Marketing and Sales" },
            { b: "Research and Development and Operations" },
            { c: "Operations and Marketing" },
            { d: "Sales and Research and Development" }
          ],
          answer: "b"
        }
      ]
    },
    {
      question: "The table below shows the sales data of a company for four quarters. Review the table and answer the questions.",
      table: `
        | Quarter | Product A | Product B | Product C |
        |---------|-----------|-----------|-----------|
        | Q1      | 500       | 300       | 200       |
        | Q2      | 600       | 400       | 250       |
        | Q3      | 700       | 350       | 300       |
        | Q4      | 800       | 450       | 400       |
      `,
      subquestions: [
        {
          question: "What is the total sales for Product A in all quarters?",
          options: [
            { a: "2600" },
            { b: "2700" },
            { c: "2800" },
            { d: "2900" }
          ],
          answer: "c"
        },
        {
          question: "In which quarter did Product B have the highest sales?",
          options: [
            { a: "Q1" },
            { b: "Q2" },
            { c: "Q3" },
            { d: "Q4" }
          ],
          answer: "d"
        },
        {
          question: "What is the combined sales of Product C in Q1 and Q4?",
          options: [
            { a: "600" },
            { b: "700" },
            { c: "800" },
            { d: "900" }
          ],
          answer: "c"
        }
      ]
    },
    {
      question: "The following line chart shows the monthly temperatures of a city. Analyze the chart and answer the questions.",
      chart: "https://www.example.com/linechart1.jpg",
      subquestions: [
        {
          question: "What is the highest recorded temperature in the chart?",
          options: [
            { a: "30°C" },
            { b: "35°C" },
            { c: "40°C" },
            { d: "45°C" }
          ],
          answer: "b"
        },
        {
          question: "Which month shows the lowest temperature?",
          options: [
            { a: "January" },
            { b: "February" },
            { c: "March" },
            { d: "December" }
          ],
          answer: "d"
        },
        {
          question: "What is the average temperature for the months shown?",
          options: [
            { a: "25°C" },
            { b: "27.5°C" },
            { c: "30°C" },
            { d: "32.5°C" }
          ],
          answer: "b"
        }
      ]
    },
    {
      question: "The bar chart below represents the annual sales of a product over five years. Analyze the chart and answer the questions.",
      chart: "https://www.example.com/barchart2.jpg",
      subquestions: [
        {
          question: "In which year were the highest sales recorded?",
          options: [
            { a: "2015" },
            { b: "2016" },
            { c: "2017" },
            { d: "2018" }
          ],
          answer: "d"
        },
        {
          question: "What is the total sales over the five years?",
          options: [
            { a: "2500 units" },
            { b: "3000 units" },
            { c: "3500 units" },
            { d: "4000 units" }
          ],
          answer: "c"
        },
        {
          question: "Which year saw the lowest sales?",
          options: [
            { a: "2014" },
            { b: "2015" },
            { c: "2016" },
            { d: "2017" }
          ],
          answer: "a"
        }
      ]
    },
    {
      question: "The pie chart below shows the market share of different companies in the smartphone industry. Examine the chart and answer the questions.",
      chart: "https://www.example.com/piechart2.jpg",
      subquestions: [
        {
          question: "Which company has the largest market share?",
          options: [
            { a: "Company A" },
            { b: "Company B" },
            { c: "Company C" },
            { d: "Company D" }
          ],
          answer: "a"
        },
        {
          question: "What percentage of the market is held by Company C?",
          options: [
            { a: "15%" },
            { b: "25%" },
            { c: "35%" },
            { d: "45%" }
          ],
          answer: "b"
        },
        {
          question: "If the total market size is 1,000,000 units, how many units does Company B hold?",
          options: [
            { a: "100,000" },
            { b: "200,000" },
            { c: "300,000" },
            { d: "400,000" }
          ],
          answer: "c"
        }
      ]
    },
    {
      question: "The table below shows the population growth in a city over five years. Review the table and answer the questions.",
      table: `
        | Year | Population |
        |------|------------|
        | 2015 | 1,000,000  |
        | 2016 | 1,050,000  |
        | 2017 | 1,100,000  |
        | 2018 | 1,150,000  |
        | 2019 | 1,200,000  |
      `,
      subquestions: [
        {
          question: "What is the population growth rate from 2015 to 2016?",
          options: [
            { a: "4%" },
            { b: "5%" },
            { c: "6%" },
            { d: "7%" }
          ],
          answer: "b"
        },
        {
          question: "What is the total population increase over the five years?",
          options: [
            { a: "200,000" },
            { b: "250,000" },
            { c: "300,000" },
            { d: "350,000" }
          ],
          answer: "c"
        },
        {
          question: "In which year did the population reach 1,150,000?",
          options: [
            { a: "2016" },
            { b: "2017" },
            { c: "2018" },
            { d: "2019" }
          ],
          answer: "c"
        }
      ]
    },
    {
      question: "The bar chart below shows the production of different crops in a region. Analyze the chart and answer the questions.",
      chart: "https://www.example.com/barchart3.jpg",
      subquestions: [
        {
          question: "Which crop has the highest production?",
          options: [
            { a: "Wheat" },
            { b: "Rice" },
            { c: "Corn" },
            { d: "Barley" }
          ],
          answer: "b"
        },
        {
          question: "What is the total production of all the crops combined?",
          options: [
            { a: "800 tons" },
            { b: "900 tons" },
            { c: "1000 tons" },
            { d: "1100 tons" }
          ],
          answer: "c"
        },
        {
          question: "Which crop has the lowest production?",
          options: [
            { a: "Wheat" },
            { b: "Rice" },
            { c: "Corn" },
            { d: "Barley" }
          ],
          answer: "d"
        }
      ]
    },
    {
      question: "The line chart below shows the monthly sales of a product over a year. Analyze the chart and answer the questions.",
      chart: "https://www.example.com/linechart2.jpg",
      subquestions: [
        {
          question: "Which month had the highest sales?",
          options: [
            { a: "January" },
            { b: "March" },
            { c: "July" },
            { d: "December" }
          ],
          answer: "d"
        },
        {
          question: "What is the total sales for the year?",
          options: [
            { a: "1200 units" },
            { b: "1500 units" },
            { c: "1800 units" },
            { d: "2000 units" }
          ],
          answer: "c"
        },
        {
          question: "Which month saw the lowest sales?",
          options: [
            { a: "February" },
            { b: "April" },
            { c: "June" },
            { d: "August" }
          ],
          answer: "a"
        }
      ]
    },
    {
      question: "The pie chart below represents the expenditure of a family in different categories. Examine the chart and answer the questions.",
      chart: "https://www.example.com/piechart3.jpg",
      subquestions: [
        {
          question: "Which category has the largest expenditure?",
          options: [
            { a: "Rent" },
            { b: "Food" },
            { c: "Education" },
            { d: "Entertainment" }
          ],
          answer: "a"
        },
        {
          question: "What percentage of the expenditure is on Food?",
          options: [
            { a: "10%" },
            { b: "20%" },
            { c: "30%" },
            { d: "40%" }
          ],
          answer: "c"
        },
        {
          question: "If the total expenditure is $5000, how much is spent on Education?",
          options: [
            { a: "$500" },
            { b: "$1000" },
            { c: "$1500" },
            { d: "$2000" }
          ],
          answer: "b"
        }
      ]
    },
    {
      question: "The table below shows the annual rainfall in different cities over five years. Review the table and answer the questions.",
      table: `
        | Year | City A | City B | City C |
        |------|--------|--------|--------|
        | 2015 | 100 cm | 150 cm | 200 cm |
        | 2016 | 110 cm | 140 cm | 210 cm |
        | 2017 | 120 cm | 130 cm | 220 cm |
        | 2018 | 130 cm | 120 cm | 230 cm |
        | 2019 | 140 cm | 110 cm | 240 cm |
      `,
      subquestions: [
        {
          question: "Which city had the highest rainfall in 2017?",
          options: [
            { a: "City A" },
            { b: "City B" },
            { c: "City C" },
            { d: "All cities had the same rainfall" }
          ],
          answer: "c"
        },
        {
          question: "What is the total rainfall in City A over the five years?",
          options: [
            { a: "500 cm" },
            { b: "550 cm" },
            { c: "600 cm" },
            { d: "650 cm" }
          ],
          answer: "d"
        },
        {
          question: "In which year did City B have the lowest rainfall?",
          options: [
            { a: "2015" },
            { b: "2016" },
            { c: "2017" },
            { d: "2019" }
          ],
          answer: "d"
        }
      ]
    }
  ];
  
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