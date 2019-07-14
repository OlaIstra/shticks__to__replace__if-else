//----------------
// To create more readble "if ... else " code
//----------------

// 1. to use Array.includes()

const checkPhoneModel = (model) => {
  const models = ['iphone', 'samsung'];

  if(models.includes(model)) { 
    console.log('model valid');
  }
}

checkPhoneModel('samsung'); // outputs 'model valid'

// 2. to use Array.every()

const phones = [
  { model: 'iphone', color: "black" },
  { model: 'samsung', color: "white" },
  { model: 'honor', color: "red" }
];

const checkEveryModel = (model) => {
  return phones.every(phone => phone.model === model);
}

console.log(checkEveryModel('iphone')); // outputs false

// 3. to use Array.find()

const findEveryModel = (model) => {
  return phones.find(phone => phone.model !== model) === undefined;
}

console.log(checkEveryModel('iphone')); // outputs false

// 4. to use Array.some()

const checkForAnyModel = (model) => {
  return phones.some(phone => phone.model === model);
}

// 5. to use destructurization
const checkModel = ({model, year} = {}) => {
  if(!model && !color) return 'No phone';
  if(!model) return 'No phone model';
  if(!color) return 'No phone color';

  return `Phone model: ${model}; Color: ${year};`;
}

// 6. to use Object literals

const carState = {
  usa: ['Ford', 'Dodge'],
  france: ['Renault', 'Peugeot'],
  italy: ['Fiat']
};

const getCarsByState = (state) => {
  return carState[state] || [];
}

console.log(getCarsByState()); // outputs []
console.log(getCarsByState('usa')); // outputs ['Ford', 'Dodge']
