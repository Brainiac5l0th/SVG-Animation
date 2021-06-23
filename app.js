const ab = document.querySelectorAll('#logo path')

for (let i = 0; i < ab.length; i++) {
  console.log(`the path is ${i} and length is ${ab[i].getTotalLength()}`);
}