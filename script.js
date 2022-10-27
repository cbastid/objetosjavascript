/* Desafío 1
Escribe una función que acepte un array de objetos de estudiantes, como se muestra a continuación.
 Imprime todos los nombres de los estudiantes y sus cohortes */

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];


function imrprime(estudiante) {
    console.log(estudiante);
}

imrprime(students);

/* Desafio 2 
Escribe una función que acepte un objeto de usuarios divididos en trabajadores y directores,
 y muestra el número de caracteres por el nombre del trabajador/director, como se muestra a
  continuación, y registra la información a la consola. */
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function sumauser(element) {
    
    console.log("EMPLOYEES")
    for(let i = 0; i < element.employees.length; i++) {
        let sumemp = 0;
        sumemp = element.employees[i].first_name.length + element.employees[i].last_name.length;
        console.log(i + 1 + " - " + element.employees[i].first_name + " - " + element.employees[i].last_name + " - " + sumemp);

    }
    
}

sumauser(users);

