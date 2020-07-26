var przycisk = document.getElementById('button');
let name = document.getElementById('name');
let surname = document.getElementById('surname');
let phone = document.getElementById('phone');



    przycisk.onclick = function(){

        name.textContent = document.getElementById('imie').value;
        console.log(name);

        surname.textContent = document.getElementById('nazwisko').value;
        console.log(surname);

        phone.textContent = document.getElementById('telefon').value;
        console.log(phone);
      
    }


    