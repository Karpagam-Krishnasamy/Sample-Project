const markSheets=[
  {
      student: 'Sriram',
      rollNo: 11,
      tamil: 80,
      english: 90,
      science: 86,
      maths: 97,
      social: 76,
  },
  {
      student: 'Ram',
      rollNo: 16,
      tamil: 60,
      english: 97,
      science: 56,
      maths: 35,
      social: 76,
      
  },

{
      student: 'sri',
      rollNo: 18,
      tamil: 60,
      english: 90,
      science: 66,
      maths: 93,
      social: 23,
  },
  {
      student: 'mani',
      rollNo: 20,
      tamil: 30,
      english: 70,
      science: 86,
      maths: 73,
      social: 86,
  },
];
const getRank = (studentRecord) => {
let rank=1;
studentRecord.sort((firstRecord, secondRecord ) => secondRecord.total - firstRecord.total);
const result = studentRecord.map(element => ({
    ...element,rank : (element.passOrFail === 'P')?rank++:"-"
  })
    )
totalFail = studentRecord.length - (--rank);
   return result;
};

const getCounts = (studentRecord) => {
  studentRecord["count"] ={};
  studentRecord["count"]["pass"] = studentRecord.length - totalFail;
  studentRecord["count"]["fail"] = totalFail;
  return studentRecord;
};

const passOrFail = (studentRecord) => {
return studentRecord.map(element => ({  
      ...element,passOrFail : (element.tamil <35 || element.english <35 || element.maths<35 || element.science <35 || element.social<35?"F":"P")
})
  );
};
const processMarkSheet = (studentRecord) => {
  return students = studentRecord.map(element=>({
      ...element,total : element.tamil + element.english + element.maths + element.science + element.social
    })
    );
};


const processMarkSheets = (marSheets)=> {
const recordWithTotal = processMarkSheet(marSheets);
const result= passOrFail(recordWithTotal);
return getCounts(getRank(result));
};

console.log(processMarkSheets(markSheets));