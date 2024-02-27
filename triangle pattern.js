
rowNumber = 5;

for (let a = 0; a < rowNumber; a++) {
     let star = '';
     let space ='';
     
for (let c = 0; c<rowNumber-a;c++) {
          space +=' ';
      }
     for (let b = 0; b <= a; b++) {
          star +='* ';
     }
     
     console.log(space+star);
}
 