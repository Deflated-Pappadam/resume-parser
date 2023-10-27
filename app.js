

const { log } = require('console');
const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('./Ritin-George-Resume.pdf');
 
pdf(dataBuffer).then(function(data) {




const extractData = data.text.split('\n');
// console.log(extractData);
let name;
for(let i =0;i<extractData.length;i++){
    if(extractData[i] != ""){
        console.log("Name :"+extractData[i]);
        name = extractData[i];
        break;
    }
    
}

for(let j=0;j<extractData.length;j++){
  if(extractData[j].includes("@")){
    console.log('Email :'+extractData[j]);
}
}
    
})
.catch(function(error){
console.log(error);
});

const emailRegex = /\S+@\S+.\S+/;


    // console.log(data.numpages);
    // // number of rendered pages
    // console.log(data.numrender);
    // // PDF info
    // console.log(data.info);
    // // PDF metadata
    // console.log(data.metadata); 
    // // PDF.js version
    // // check https://mozilla.github.io/pdf.js/getting_started/
    // console.log(data.version);
    // PDF text
   // Sample text that may contain phone numbers
   const text = "Please contact me at +91 8639816948 or 555.555.5555. My office number is (987) 654-3210.";

   // Regular expression for matching phone numbers
   const phoneRegex = /(\+\d{1,2}\s?)?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}|\(\d{3}\)[-\.\s]?\d{3}[-.\.\s]?\d{4}/g;
   
   // Use match() to extract phone numbers
   const phoneNumbers = text.match(phoneRegex);
   
   if (phoneNumbers) {
     console.log("Phone numbers found in the text:");
     phoneNumbers.forEach((number, index) => {
       console.log(`${index + 1}: ${number}`);
     });
   } else {
     console.log("No phone numbers found in the text.");
   }