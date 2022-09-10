// https://www.omnicalculator.com/finance/cobb-douglas-production-function

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const v5 = document.getElementById('v5');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const totalproductionRadio = document.getElementById('totalproductionRadio');
const totalfactorproductivityRadio = document.getElementById('totalfactorproductivityRadio');
const laborRadio = document.getElementById('laborRadio');
const outputelasticityoflaborRadio = document.getElementById('outputelasticityoflaborRadio');
const capitalRadio = document.getElementById('capitalRadio');
const outputelasticityofcapitalRadio = document.getElementById('outputelasticityofcapitalRadio');

let totalproduction;
let totalfactorproductivity = v1;
let labor = v2;
let outputelasticityoflabor = v3;
let capital = v4;
let outputelasticityofcapital = v5;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');
const variable5 = document.getElementById('variable5');

totalproductionRadio.addEventListener('click', function() {
  variable1.textContent = 'Total factor productivity';
  variable2.textContent = 'Labor';
  variable3.textContent = 'Output elasticity of labor';
  variable4.textContent = 'Capital';
  variable5.textContent = 'Output elasticity of capital';
  totalfactorproductivity = v1;
  labor = v2;
  outputelasticityoflabor = v3;
  capital = v4;
  outputelasticityofcapital = v5;
  result.textContent = '';
});

totalfactorproductivityRadio.addEventListener('click', function() {
  variable1.textContent = 'Total production';
  variable2.textContent = 'Labor';
  variable3.textContent = 'Output elasticity of labor';
  variable4.textContent = 'Capital';
  variable5.textContent = 'Output elasticity of capital';
  totalproduction = v1;
  labor = v2;
  outputelasticityoflabor = v3;
  capital = v4;
  outputelasticityofcapital = v5;
  result.textContent = '';
});

laborRadio.addEventListener('click', function() {
  variable1.textContent = 'Total production';
  variable2.textContent = 'Total factor productivity';
  variable3.textContent = 'Output elasticity of labor';
  variable4.textContent = 'Capital';
  variable5.textContent = 'Output elasticity of capital';
  totalproduction = v1;
  totalfactorproductivity = v2;
  outputelasticityoflabor = v3;
  capital = v4;
  outputelasticityofcapital = v5;
  result.textContent = '';
});

outputelasticityoflaborRadio.addEventListener('click', function() {
  variable1.textContent = 'Total production';
  variable2.textContent = 'Total factor productivity';
  variable3.textContent = 'Labor';
  variable4.textContent = 'Capital';
  variable5.textContent = 'Output elasticity of capital';
  totalproduction = v1;
  totalfactorproductivity = v2;
  labor = v3;
  capital = v4;
  outputelasticityofcapital = v5;
  result.textContent = '';
});

capitalRadio.addEventListener('click', function() {
  variable1.textContent = 'Total production';
  variable2.textContent = 'Total factor productivity';
  variable3.textContent = 'Labor';
  variable4.textContent = 'Output elasticity of labor';
  variable5.textContent = 'Output elasticity of capital';
  totalproduction = v1;
  totalfactorproductivity = v2;
  labor = v3;
  outputelasticityoflabor = v4;
  outputelasticityofcapital = v5;
  result.textContent = '';
});

outputelasticityofcapitalRadio.addEventListener('click', function() {
  variable1.textContent = 'Total production';
  variable2.textContent = 'Total factor productivity';
  variable3.textContent = 'Labor';
  variable4.textContent = 'Output elasticity of labor';
  variable5.textContent = 'Capital';
  totalproduction = v1;
  totalfactorproductivity = v2;
  labor = v3;
  outputelasticityoflabor = v4;
  capital = v5;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(totalproductionRadio.checked)
    result.textContent = `Total production = ${computetotalproduction().toFixed(2)}`;

  else if(totalfactorproductivityRadio.checked)
    result.textContent = `Total factor productivity = ${computetotalfactorproductivity().toFixed(2)}`;

  else if(laborRadio.checked)
    result.textContent = `Labor = ${computelabor().toFixed(2)}`;

  else if(outputelasticityoflaborRadio.checked)
    result.textContent = `Output elasticity of labor = ${computeoutputelasticityoflabor().toFixed(2)}`;

  else if(capitalRadio.checked)
    result.textContent = `Capital = ${computecapital().toFixed(2)}`;

  else if(outputelasticityofcapitalRadio.checked)
    result.textContent = `Output elasticity of capital = ${computeoutputelasticityofcapital().toFixed(2)}`;
})

// calculation

function computetotalproduction() {
  return Number(totalfactorproductivity.value) * Math.pow(Number(labor.value), Number(outputelasticityoflabor.value)) * Math.pow(Number(capital.value), Number(outputelasticityofcapital.value));
}

function computetotalfactorproductivity() {
  return Number(totalproduction.value) / (Math.pow(Number(labor.value), Number(outputelasticityoflabor.value)) * Math.pow(Number(capital.value), Number(outputelasticityofcapital.value)));
}

function computelabor() {
  return Math.pow(Number(totalproduction.value) / (Number(totalfactorproductivity.value) * Math.pow(Number(capital.value), Number(outputelasticityofcapital.value))), 1 / Number(outputelasticityoflabor.value));
}

function computeoutputelasticityoflabor() {
  return Number(totalproduction.value) - Number(totalfactorproductivity.value) - Number(labor.value) - Number(capital.value) + Number(outputelasticityofcapital.value);
}

function computecapital() {
  return Math.pow(Number(totalproduction.value) / (Number(totalfactorproductivity.value) * Math.pow(Number(labor.value), Number(outputelasticityoflabor.value))), 1 / Number(outputelasticityofcapital.value));
}

function computeoutputelasticityofcapital() {
  return Number(totalfactorproductivity.value) + Number(labor.value) + Number(outputelasticityoflabor.value) + Number(capital.value) - Number(totalproduction.value);
}