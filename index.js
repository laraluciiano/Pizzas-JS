const Pizzas = [
    {
        id: 1,
        nombre: "Napolitana",
        ingredientes: ["Queso mozzarella", "Tomate", "Salsa de tomate"],
        precio: 850
    },
    {
        id:2,
        nombre: "Champiñones",
        ingredientes: ["Salsa de tomate", "Mozzarella", "Champiñones"],
        precio: 1200
    },
    {
        id:3,
        nombre: "Provolone",
        ingredientes:["Salsa de tomate", "Mozzarella", "Provolone"],
        precio: 1500
    },
    {
        id:4,
        nombre: "Espinaca",
        ingredientes:["Salsa de tomate", "Mozzarella", "Espinaca"],
        precio: 700
    },
    {
        id:5,
        nombre:"Cuatro quesos",
        ingredientes: ["Salsa de tomate", "Mozzarella", "Queso Fontina", "Parmesano", "Queso Gorgonzola"],
        precio: 1900
    },
    {
        id: 6,
        nombre: "Primavera",
        ingredientes: ["Salsa de tomate", "Mozzarella","Tomate en rodajas","Huevo duro","Provolone","Oregno"],
        precio: 1700
    }
]
 
//EJERCICIO 2

const resultSection = document.getElementById("result-section")
const form = document.getElementById("form")
const input = document.querySelector(".form-input")

const searchPizza = (value) => Pizzas.find((Pizzas) => Pizzas.id === value)

const showEmptyError = () => {
    resultSection.innerHTML = `
      <div class="showerrordiv">
      <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
      <h2 class="error-text">Por favor ingresar un numero para poder buscar tu pizza.</h2>
      </div>`
}

const renderResult = (Pizzas) => {
    if (!Pizzas) {
      resultSection.innerHTML = `
      <div class="pizza-section">
      <h2 class="error">No pudimos encontrar tu pizza </h2>
      <p class="error-p">Proba con otro numero.</p>
      </div>`
    } else {
      resultSection.innerHTML = `
      <div class="pizza-section">
      <h2 class="pizza-title">${Pizzas.nombre.toUpperCase()}</h2>
      <p class="pizza-description">Ingredientes: ${Pizzas.ingredientes.join(", ")}.</p>
      <h3 class="pizza-price"> Precio: $${Pizzas.precio} </h3>
      </div>
      `
    }
}
 
//EJERCICIO 1

// Pizzas impar

for (let index = 0; index < 6; index++) {
    if (Pizzas[index].id % 2 != 0) {
        console.log("La pizza de " + Pizzas[index].nombre + " tiene el ID impar " + Pizzas[index].id);
    }
}

// Pizza valor menor $600

const Pizza600 = Pizzas.some ((Pizzas) => Pizzas.precio < 600)

Pizza600 ? console.log("Hay alguna pizza que salga menos de $600") : console.log("No hay ninguna pizza menor a $600")


//Nombre y precio
for (let index = 0; index < 6; index++) {

    console.log("La pizza " + Pizzas[index].nombre + " tiene un valor de: $" + Pizzas[index].precio);

}

// Ingredientes

for (let index = 0; index < 6; index++) {

    console.log("La pizza " + Pizzas[index].nombre + " tiene los siguientes ingredientes:");

for (let index1 = 0; index1 < 3; index1++) {

    console.log(Pizzas[index].ingredientes[index1]);
    
}}


