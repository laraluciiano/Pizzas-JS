const Pizzas = [
    {
        id: 1,
        nombre: "Napolitana",
        ingredientes: ["Queso mozzarella", "Tomate", "Salsa de tomate"],
        precio: 850,

        image: "https://www.recetasderechupete.com/wp-content/uploads/2015/07/pizza_napolitana_napoletana.jpg",
    },
    {
        id:2,
        nombre: "Champiñones",
        ingredientes: ["Salsa de tomate", "Mozzarella", "Champiñones"],
        precio: 1200,

        image: "https://t1.rg.ltmcdn.com/es/posts/7/9/1/pizza_de_champinones_7197_600.webp",
    },
    {
        id:3,
        nombre: "Provolone",
        ingredientes:["Salsa de tomate", "Mozzarella", "Provolone"],
        precio: 1500,

        image:"https://t2.rg.ltmcdn.com/es/posts/5/0/2/pizza_de_provolone_7205_600.webp",
    },
    {
        id:4,
        nombre: "Espinaca",
        ingredientes:["Salsa de tomate", "Mozzarella", "Espinaca"],
        precio: 700,
        
        image:"https://unareceta.com/wp-content/uploads/2014/05/receta-de-pizza-de-espinacas.jpg",
    },
    {
        id:5,
        nombre:"Cuatro quesos",
        ingredientes: ["Salsa de tomate", "Mozzarella", "Queso Fontina", "Parmesano", "Queso Gorgonzola"],
        precio: 1900,
        
        image:"https://www.recetasderechupete.com/wp-content/uploads/2016/11/pizza_cuatro_quesos-768x527.jpg",
    },
    {
        id: 6,
        nombre: "Primavera",
        ingredientes: ["Salsa de tomate", "Mozzarella","Tomate en rodajas","Huevo duro","Provolone","Oregno"],
        precio: 1700,
        
        image:"https://pizzasargentinas.com/wp-content/uploads/2020/10/pizzza-de-primavera-816x459.jpg",
    }
]

let pizzas = JSON.parse(localStorage.getItem("pizzas")) || [];

const saveToLocalStorage = (pizzas) => {
    return localStorage.setItem("pizza", JSON.stringify(pizzas))
}
 
//EJERCICIO 2

const resultSection = document.getElementById("result-section")
const form = document.getElementById("form")
const input = document.querySelector(".form-input")

const searchPizza = (value) => Pizzas.find((Pizzas) => Pizzas.id === value)

const showEmptyError = () => {
    resultSection.innerHTML = `
      <h2 class="error-text">Por favor ingresar un numero para poder buscar tu pizza.</h2>
      </div>`
}

const renderPizzas = (pizza) => {
    return `
    <div class="pizza-section">
    <img class="pizza-img" src="${ pizza.image }"/>
    <h2 class="pizza-title">${pizza.nombre.toUpperCase()}</h2>
    <p class="pizza-description">Ingredientes: ${pizza.ingredientes.map((i) => i).join(", ")}.</p>
    <h3 class="pizza-price"> Precio: $${pizza.precio} </h3>
    <p class="pizza-p">Busca un numero del 1 al 7 para ver si tenemos tu pizza.</p>
    </div>
    `
}

const renderPizzasList = (pizzaList) => {
    resultSection.innerHTML = pizzaList.map((pizza) => renderPizzas(pizza)).join("");
  };

  const submitSearch = (e) => {
    e.preventDefault()
    const searchValue = input.value;
    if (!searchValue) {
        showEmptyError(searchValue);
        return;
    }
    const searchedPizza = searchPizza(Number(searchValue))

    pizzas = [searchedPizza]
    console.log(pizzas)
    renderPizzasList(pizzas)
    saveToLocalStorage(pizzas)
    // renderResult(searchedPizza);
    // saveToLocalStorage(searchedPizza)
}

const init = () => {
    renderPizzasList(pizzas)
    form.addEventListener("submit", submitSearch)
}

init()

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


