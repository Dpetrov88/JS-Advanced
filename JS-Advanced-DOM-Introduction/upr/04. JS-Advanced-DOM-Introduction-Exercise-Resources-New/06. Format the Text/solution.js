function solve() {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  output.innerHTML = ""
  let arr = input.split(".").filter(x => x.length > 0);

  for (let i = 0; i < arr.length; i+= 3) {
    let result = [];
    for ( let x = 0; x < 3; x++) {
      if (arr[i + x]) {
        result.push(arr[i + x])
      }
    }
   let finText = result.join(". ") + ".";
   output.innerHTML += `<p>${finText}</p>`;
}
  }
  