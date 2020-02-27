function sum(){
    var a = document.getElementById('texto-entrada')
    var arr = a.innerText.split('')
     var suma = {}
     arr.forEach(function(letra){
       letra= letra.toLowerCase()
       if  (letra >= 'a' && letra <= 'z') {
       if (suma[letra]) {
             suma[letra] +=1;
           }
           else {
             suma[letra] = 1;
           }}
     }); return suma
};
   function crear_p_with_srtong() {
     var p = document.createElement('p')
     var strong =document.createElement('strong')
     var span = document.createElement('span')
     var strong1 =document.createElement('strong')
     var span1 = document.createElement('span')
     p.appendChild(strong)
     p.appendChild(span)
     p.appendChild(strong1)
     p.appendChild(span1)
     return p
   }
     function text_counter(){
           var aa = document.getElementById('texto-entrada')
           var arrr = aa.innerText.replace(/\W/g,' ').toLowerCase().split(' ')
           palabras ={}
           arrr.forEach(function(word){
             if (palabras[word]) {
                   palabras[word] +=1;
                 }
                 else {
                   palabras[word] = 1;
                 }
           }); return palabras
      };
      function each_element(collection,p1,p2){
        for(llave in collection){
         paragraph = crear_p_with_srtong();
         llave_name=document.createTextNode(p1)
         llave_name1=document.createTextNode(llave)
         sum_name=document.createTextNode(p2)
         sum_name1=document.createTextNode(collection[llave])
         paragraph.children[0].appendChild(llave_name)
         paragraph.children[1].appendChild(llave_name1)
         paragraph.children[2].appendChild(sum_name)
         paragraph.children[3].appendChild(sum_name1)
         document.getElementById('resultados').appendChild(paragraph)
           }
         }
         var suma = sum();
         each_element(suma, "Letra: ", " Candidad: ");
         var resul2 = text_counter();
          each_element(resul2, "Word: ", " Candidad:") ;
















