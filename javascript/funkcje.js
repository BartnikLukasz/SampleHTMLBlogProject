function rejestruj(){
    var user = {};
    user.name=document.getElementById('nazwaUzytkownika').value;
    user.email=document.getElementById('email').value;
    user.pass=document.getElementById('haslo').value;
    
    localStorage.setItem('user'+localStorage.length, JSON.stringify(user));
}


document.addEventListener('DOMContentLoaded', () => {
                for(var i=0; i<localStorage.length; i++){
                    var user = JSON.parse(localStorage.getItem('user'+i));
                document.getElementById('uzytkownicy').innerHTML+="<li>" + user.name + "</li>";
            }
            });

function przejdzDoPostu(){
}
