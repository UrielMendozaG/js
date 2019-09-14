//arrow functions come with ECM6

//Syntax

(param1, param2) => {
  statements;
};

(param1, param2) => expression; //asume que hay un return

(param1, param2) => {
  return expression;
}; //return explicito

//cuando hay un solo parametro es opcional poner parentesis
singleParam1 => {
  statements;
};
singleParam1 => {
  statements;
};

//cuando no hay parametros se deben poner los parentesis
() => {
  statemens;
};
() => expression;
() => {
  return expression;
};

(param1, param2, paramN) => {
  statemens;
};
//EXAMPLES

const myArr = [20, 20];

const arrowFunction = array => array[0]; //20

const suma = (a, b) => a + b;

console.log(suma(2, 3)); // 5

const esPositivo = num => {
  if (num > 0) return "positivo";
  else if (num < 0) return "negativo";
  else return "es 0";
};

console.log(esPositivo(0)); //es 0

const mayorEdad = num => {
  if (num >= 18) {
    return "es mayor";
  } else {
    return "es menor";
  }
};

console.log(mayorEdad(12)); //menor

array = [1, 2, 3, 4, 5];

array.forEach(element => {
  //2,4,6,8,10
  console.log(element * 2);
});

const multiply = (a, b) => a * b;

console.log(multiply(5, 5)); //25

//person

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
  }, 1000);
}

var p = new Person ();


console.log(p.age)

//en funciones flecha este caso cambia la variable
//de persona y no la global

const par = (a,b,c) => {
    
} 