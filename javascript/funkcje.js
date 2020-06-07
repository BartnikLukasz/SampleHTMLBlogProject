
document.addEventListener('DOMContentLoaded', () => {
                for(var i=0; i<=localStorage.length+3; i++){
                    var post = JSON.parse(localStorage.getItem('post'+i));
                if(post!==null) document.getElementById('uzytkownicy').innerHTML+="<li>" + post.name + "</li>";
            }
            
            for(var j=0; j<=localStorage.length+3; j++){
            var post = JSON.parse(localStorage.getItem('post'+j));
            
            if(post!==null && document.getElementById('postMain')!==null){
            document.getElementById('postMain').innerHTML+='<img class="card-img-top" src="images/'+post.adres+'" alt="Card image cap">'+
         ' <div class="card-body">'+
            '<h2 class="card-title" id="tytulMain">'+post.tytul+'</h2>'+
          
            '<a onclick="wyswietlPost('+post.id+')" id="przycisk" class="btn btn-primary">Czytaj dalej &rarr;</a>'+
          '</div>';
            }
        }
            });
            
function dodajPost(){
    
    var f = document.forms["form"].elements;
        var spelniaWarunki = true;

        for (var i = 0; i < f.length; i++) {
            if (f[i].value.length === 0) spelniaWarunki = false;
        }
    
    if(spelniaWarunki){
    
    var post = {};
    var id = sessionStorage.length-1;
    post.name=document.getElementById('podpis').value;
    post.email=document.getElementById('email').value;
    post.tytul=document.getElementById('tytul').value;
    post.tresc=document.getElementById('tresc').value;
    var zdjecie=document.getElementById('zdjecie').value;
    post.adres = zdjecie.replace(/^.*\\/, "");
    
    for(var i=0; i<=localStorage.length; i++){
       var keyName = 'post'+i;
       if(localStorage.getItem(keyName)===null){
        post.id=i;
        localStorage.setItem('post'+i, JSON.stringify(post));
        break;
    }
        }
        
    }else{
        alert("Proszę wypełnić wszystkie pola formularza");
    }
    
}

function edytujPost(){
    
    var f = document.forms["form"].elements;
        var spelniaWarunki = true;

        for (var i = 0; i < f.length; i++) {
            if (f[i].value.length === 0) spelniaWarunki = false;
        }
    
    if(spelniaWarunki){
    
    var id = sessionStorage.length-1;
    var key = id.toString();
    var post = {};
    post.name=document.getElementById('podpis').value;
    post.email=document.getElementById('email').value;
    post.tytul=document.getElementById('tytul').value;
    post.tresc=document.getElementById('tresc').value;
    var zdjecie=document.getElementById('zdjecie').value;
    post.adres = zdjecie.replace(/^.*\\/, "");
    post.id=sessionStorage.getItem('idEdycji'+id);
    localStorage.setItem('post'+sessionStorage.getItem('idEdycji'+id), JSON.stringify(post));
    
    }else{
        alert("Proszę wypełnić wszystkie pola formularza");
    }
}

function sprawdzAutorow(autor){
    for(var i=0; i<localStorage.length; i++){
        var post = JSON.parse(localStorage.getItem('post'+i));
        if(post.name===autor){
            return false;
        }
    }
    return true;
}

function usunPost(id){
    localStorage.removeItem('post'+id);
    alert("Post został usunięty");
}

function wyswietlPost(id){
    document.getElementById('przykladowaKaruzela4').innerHTML="";
    document.getElementById('napis').innerHTML="";
    var post = JSON.parse(localStorage.getItem('post'+id));
        document.getElementById('postMain').innerHTML='<img class="card-img-top" src="images/'+post.adres+'" alt="Card image cap">'+
                '<h3>'+post.tytul+'<small><small><a href="edycja.html" onclick="przejdzDoEdycji('+post.id+')" id="edytuj">Edytuj post</a><a href="#" onclick="usunPost('+post.id+')" id="usun"><p>Usun post</a></small></small></h3>'+ post.tresc +'<br>Autor: '+post.name;
    
  
}

function sprawdzFormularz()
    {
        var f = document.forms["form"].elements;
        var spelniaWarunki = true;

        for (var i = 0; i < f.length; i++) {
            if (f[i].value.length == 0) cansubmit = false;
        }

        if (spelniaWarunki) {
            document.getElementById('zatwierdzenie').disabled = false;
        }
    }

function przejdzDoEdycji(id){
    sessionStorage.setItem('idEdycji'+sessionStorage.length, id);
}

function przejdzDoRegulaminu(){
    
    document.getElementById('main').innerHTML='<h1 class="my-4">Regulamin'+
        '</h1>'+

        '<!-- Blog Post -->'+
        
        '<ul>'+
            '<li>Korzystanie z bloga jak i rejestracja na nim są bezpłatne.</li>'+
            '<li>Wstawiając treść na forum zgadzasz się na późniejsze ich używanie w dowolny sposób przez administratorów jak i pozostałych użytkowników serwisu</li>'+
            '<li>Będąc użytkownikiem możesz dowolnie korzystać z umieszczonych na forum informacji.</li>'+
            '<li>Administracja forum zastrzega sobie prawo do usunięcia posta bez podania przyczyny, zwłaszcza jeżeli:'+
                '<ol>'+
                    '<li>Będzie zawierał nieprawdziwe informacje</li>'+
                    '<li>Będzie obrażał innych użytkowników lub administrację</li>'+
                    '<li>Będzie zawierał treści niezwiązane z tematyką forum</li>'+
                '</ol>'+
            '</li>'+
            '<li>Jeżeli użytkownik będzie umieszczał wyżej wymienione treści w poście lub komentarzach, może zostać usunięty z forum.</li>'+
        '</ul>';

}

function przejdzDoInformacji(){
    
    document.getElementById('main').innerHTML='<h1 class="my-4">O nas'+
        '</h1>'+

        '<!-- Blog Post -->'+
        
        'Jesteśmy grupą pasjonatów podróży dzielącą się naszymi przeżyciami na tym blogu. Jeżeli masz ochotę dołączyć na stałe, śmiało się zarejestruj,'+
        'jeżeli chcesz jedynie podzielić się swoją przygodą, możesz wstawić posta anonimowo. Czekamy na twoje przeżycia!';

}

function przejdzDoKontaktu(){
    
    document.getElementById('main').innerHTML='<h1 class="my-4">Kontakt'+
        '</h1>'+

        '<!-- Blog Post -->'+
        
        '<div class="row">'+
    '<div class="col-sm-6">        '+
        '<div class="card" style="width: 18rem;">'+
  '<img class="card-img-top" src="images/osoba.png" alt="Card image cap">'+
  '<div class="card-body">'+
    '<h5 class="card-title">Łukasz Bartnik</h5>'+
    '<p class="card-text">Założyciel strony <br>Podróżuję od moich najmłodszych lat, uwielbiam góry i wspinaczkę.'+
    '<br> Email: bartnik.luk@gmail.com <br> Telefon: 123456789</p>'+
  '</div>'+
  '<div class="card-body">'+
    '<a href="https://pl-pl.facebook.com/"  class="card-link"><img src="images/fb_icon.png" id="icon" alt="Facebook"></a>'+
    '<a href="https://twitter.com/?lang=pl" class="card-link"><img src="images/twitter-icon.png" id="icon" alt="Twitter"></a>'+
  '</div>'+
'</div>'+
    '</div>'+
    '<div class="col-sm-6">        '+
        '<div class="card" style="width: 18rem;">'+
   '<img class="card-img-top" src="images/osoba.png" alt="Card image cap">'+
  '<div class="card-body">'+
   ' <h5 class="card-title">Jan Kowalski</h5>'+
    '<p class="card-text">Administrator strony od 04.06.2020<br>Lubię długie podróże i medytacje, co łączę na dalekim wschodzie'+
   ' <br> Telefon: 123456789</p>'+
  '</div>'+
  '<div class="card-body">'+
    '<a href="https://pl-pl.facebook.com/"  class="card-link"><img src="images/fb_icon.png" id="icon" alt="Facebook"></a>'+
    '<a href="https://twitter.com/?lang=pl" class="card-link"><img src="images/twitter-icon.png" id="icon" alt="Twitter"></a>'+
  '</div>'+
'</div></div>'+

    '</div>';

}