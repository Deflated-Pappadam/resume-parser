const { log } = require('console');
const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('./Ritin-George-Resume.pdf');




const pdfText = "helo ther my name is Ferwin and I am from Mar Baselios College Of Engineering and Technology";

// Regular expression to match and capture the college name
const collegeRegex = /from\s(.+?)(\s|$)/i;
const match = pdfText.match(collegeRegex);

if (match && match[1]) {
  const collegeName = match[1].trim();
  console.log("College Name:", collegeName);
} else {
  console.log("College name not found in the text.");
}





// pdf(dataBuffer).then(function(data) {

// const extractData = data.text.split('\n');
// let name;
// for(let i =0;i<extractData.length;i++){
//     if(extractData[i] != ""){
//         console.log("Name :"+extractData[i]);
//         name = extractData[i];
//         break;
//     }
    
// }

// const emailRegex = /\S+@\S+.\S+/;

// let emailArr;

// for(let i =0;i<extractData.length;i++){
//   if(extractData[i]){
//      emailArr = extractData[i].toLowerCase().match(emailRegex);
//   }
// }
// console.log(emailArr);


    
// })
// .catch(function(error){
// console.log(error);
// })



