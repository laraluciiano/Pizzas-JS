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
