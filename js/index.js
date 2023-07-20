// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`

  const mushrooms = document.querySelector('.mushroom');
  if (state.mushrooms) {
    mushrooms.style.visibility = 'visible';
  } else {
    mushrooms.style.visibility = 'hidden';
  }
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  const greenPeppers = document.querySelector('.green-pepper');
  if (state.greenPeppers) {
    greenPeppers.style.visibility = 'visible';
  } else {
    greenPeppers.style.visibility = 'hidden';
  }
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const sauce = document.querySelector('.sauce');
  sauce.classList.toggle('sauce-white', state.whiteSauce);
  //aqui pruebo con toggle ya que si existe la borra y sino la añade. viene a ser como el condicional usado anteriormente. o eso creo
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  const crust = document.querySelector('.crust');
  crust.classList.toggle('crust-gluten-free', state.glutenFreeCrust);
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  const mushroomButton = document.querySelector('.btn.btn-mushrooms');
  const greenPepperButton = document.querySelector('.btn.btn-green-peppers');
  const sauceButton = document.querySelector('.btn.btn-sauce');
  const crustButton = document.querySelector('.btn.btn-crust');
}
//aqui selecione los botones del los champiñones y pimientos pongos 2 veces .btn por ejemplo que hay mas abajo aunque no termino de comprenderlo ya que es .btn btn-...

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  
  const totalPrice = document.querySelector('.total-price');

  let total = 10;

  if (state.pepperoni) {
    
    total + 1;
  }
  else{total}

  if (state.mushrooms) {
    
    total + 1;
  }
  else{total}

  if (state.greenPeppers) {
    
    total + 0.75;
  }

  if (state.whiteSauce) {
    
    total + 3;
  }
  else{total}

  if (state.glutenFreeCrust) {
    
    total + 5;
  }
  else{total}
  totalPrice = total++;
  //lo habia hecho con una const de priceList y queryselector +total. pero sentia como si se estuviera sumando 2 veces ya que tenia que añadir la variable total puesto que empieza por 10
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;})

    // Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
    mushroomButton.addEventListener("click",(renderMushrooms = () => {
        state.mushrooms = !state.mushrooms;
      })
    );
    // Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
    greenPepperButton.addEventListener("click",(renderGreenPeppers = () => {
        state.greenPeppers = !state.greenPeppers;
      })
    );
    // Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
    sauceButton.addEventListener("click",(renderWhiteSauce = () => {
        state.whiteSauce = !state.whiteSauce;
      })
    );
    // Iteration 2: Add click event listener on `<button class="btn btn-crust">`
    crustButton.addEventListener("click",(renderGlutenFreeCrust = () => {
        state.glutenFreeCrust = !state.glutenFreeCrust;
      })
    );

    renderEverything();
  
