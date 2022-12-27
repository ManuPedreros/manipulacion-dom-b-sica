const h1 = document.querySelector('h1');
const h2 = document.getElementById('unH2');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
//Tambien podemos usar document.getElementByClassName... en cuyo caso no debemos incluir el punto (identificardor de classe)
const pid = document.querySelector('#pid');
//Tambien podemos usar document.getElementById... en cuyo caso no debemos incluir el # (identificardor del Id)
const input = document.querySelector('input');
//Para la sección de escuchando eventos creamos las variables necesarias y vinculamos con lo elementos de html que vamos a usar, todo esto se llama seleccionar los elementos
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

console.log({
    h1,
    h2,
    p,
    parrafito,
    pid,
    input,
});

console.log(input.value);

//Modificar una etiqueta, modifica el html completo
h1.innerHTML = "Cambiando el contenido <br> de título";
//Modificar la etiqueta pero solo como texto
h2.innerText = "Cambiando el contenido <br> de título";
//Para leer o acceder a los atributos del elemento y ver su valor
h2.getAttribute('id');
//Modificar el valor de un atributo, en este caso una clase
h1.setAttribute('class', 'rojo');
//Si queremos modificar específicamente las clases de un elemento
// h1.classList.add('rojo');//Agrega una clase
// h1.classList.remove('rojo');//Elimina una clae
// h1.classList.toggle('rojo');//Agrega o elimina dependiendo si existe o no
// h1.classList.contains('verde')//Es como un condicional que nos devuelve true o false dependiendo si el elemento tiene o no la clase
//Para modificar el valor de un input usamos el atributo value directamente sin necesidad del getAttribute o setAttribute
input.value = "456";

//Para crear un elemento html
const img = document.createElement('img');//Creamos una variable con el nuevo elemento
img.setAttribute('src', 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');//Asignamos las propiedades necesarias al nuevo elemento
img.setAttribute('width', '200px');
pid.innerHTML = "";//Con esto borra el contenido del elemento e introducimos una cadena de texto vacia a un elemento
pid.append(img);//Insertamos la imagen dentro de un elemento existente, append no borra el contenido del elemento sino que adiciona lo nuevo, appendChild es igual

function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    pResult.innerHTML = "Resultado: " + sumaInputs;
    //alert(input1.value + input2.value);
}

btnCalcular.addEventListener('click', btnOnClick);