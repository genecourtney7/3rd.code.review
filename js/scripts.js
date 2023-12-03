// UI logic
window.onload = function(){
  const theForm = document.getElementById("theForm");
  const resetBtn = document.getElementById("reset");

  theForm.addEventListener("submit", function(event){
    event.preventDefault();
    const userInputtedNumber = parseInt(document.getElementById("number").value);
    var list = document.getElementById('list');
    const translatedArray = generateList(userInputtedNumber);
        
    translatedArray.forEach(function(arrayItem){
      var listItem = document.createElement('li');
      listItem.textContent = arrayItem;
      list.appendChild(listItem);
    });
  });

  resetBtn.addEventListener("click", function(){
    var list = document.getElementById('list');
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  });
};


// business logic
function generateList(number) {
  const userInputtedNumber = number;

  const translatedArray = [];
  for (var i = 0; i <= userInputtedNumber; i++) {
    if (i.toString().includes('3')) {
      translatedArray.push("Won't you be my neighbor?");
    } else if (i.toString().includes('2')) {
      translatedArray.push("Boop");
    } else if (i.toString().includes('1')) {
      translatedArray.push("Beep");
    } else {
      translatedArray.push(i);
    }   
  }
  return translatedArray;
}