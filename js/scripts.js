// UI logic
window.onload = function(){
    const theForm = document.getElementById("theForm");
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
};

// function generateList() {
//     var num = document.getElementById('number').value;
//     var list = document.getElementById('list');
//     list.innerHTML = '';
//     for (var i = 0; i <= num; i++) {
//         var listItem = document.createElement('li');
//         if (i.toString().includes('3')) {
//             listItem.textContent = "Won't you be my neighbor?";
//         } else if (i.toString().includes('2')) {
//             listItem.textContent = 'Boop!';
//         } else if (i.toString().includes('1')) {
//             listItem.textContent = 'Beep!';
//         } else {
//             listItem.textContent = i;
//         }
//         list.appendChild(listItem);
//     }
// }

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
};