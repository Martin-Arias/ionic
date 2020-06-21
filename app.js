const productName = document.querySelector('#productName');
const productPrice = document.querySelector('#productPrice');
const buttonSave = document.querySelector('#button-save');
const buttonCancel = document.querySelector('#button-cancel');
const productList = document.querySelector('#product-list');
const dangerLabel = document.querySelector('#danger-label');
const totalPrice = document.querySelector('#total')


let total = 0;



const createNewProduct = (name, price) => {   //Crea un nuevo producto
  const ionCard = document.createElement('ion-card');
  const newProductItem = document.createElement('ion-card-content');
  newProductItem.textContent = name + ': $' + price;
  ionCard.appendChild(newProductItem);
  productList.appendChild(ionCard);
}

const clearInputs = () =>{
  productName.value = '';
  productPrice.value = '';
}

const presentAlert = () =>{

  const alert = document.createElement('ion-alert')
  alert.header = 'Datos Incorrectos';
  alert.subHeader = 'Por favor verifica los datos';
  alert.message = 'Nombre o precio invalido';
  alert.buttons = ['Aceptar'];

  document.body.appendChild(alert);

  return alert.present();

}


const isEmpty = str => !str.trim().length;


buttonSave.addEventListener('click',() => {

 const name = productName.value;
 const price = productPrice.value;

  if (isEmpty(name) || price <= 0 || isEmpty(price)) {
    console.log('Datos no validos');
   
    presentAlert();
    // dangerLabel.innerHTML="Datos incorrectos!";
    // setTimeout(() => {
    //   dangerLabel.innerHTML ='';
    // }, 3000);
    
    return;
  }

 createNewProduct(name,price);

 total += +price;

 totalPrice.textContent = total
 
 clearInputs(); 

})

buttonCancel.addEventListener('click',clearInputs);