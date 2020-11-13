"use strict";
class LemonadeStand {
  constructor(lemons, gallonsOfWater, cupsOfSugar, emptyGlasses, price) {
    this.lemons = lemons;
    this.gallonsOfWater = gallonsOfWater;
    this.cupsOfSugar = cupsOfSugar;
    this.emptyGlasses = emptyGlasses;
    this.price = price;    
    this.glassesOfLemonade = 0;
    this.income = 0.0;
  }
  
  makeLemonade() {
    if (this.lemons >= 6 && this.gallonsOfWater >= 1 
      && this.cupsOfSugar >= 1 && this.emptyGlasses >= 8)    {
      this.lemons -= 6;
      this.gallonsOfWater--;
      this.cupsOfSugar--;
      this.emptyGlasses -= 8;
      this.glassesOfLemonade += 8;
      return 8;
    } else {
      return 0;
    }
  }
  
  sellLemonade() {
    if (this.glassesOfLemonade >= 1) {
      this.glassesOfLemonade--;
      this.income += this.price;
      return 1;
    } else {
      this.makeLemonade();
      if (this.glassesOfLemonade >=1) {
        this.glassesOfLemonade--;
        this.income += this.price;
        return 1;
      } else {
        return 0;
      }
    }
  }
  
  showIngredients()
  {
    
    let newArticle = document.createElement('article');
    
    let newH1 = document.createElement("h2");
    let newText = document.createTextNode('Inventory');
    newH1.appendChild(newText);
    newArticle.appendChild(newH1);    

    let newTable = document.createElement('table');   
    let newRow = document.createElement('tr');
    let newData = document.createElement('td'); 
    newText = document.createTextNode("Bananas");
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newData = document.createElement('td');
    newText=document.createTextNode(this.lemons);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newTable.appendChild(newRow)

    newRow = document.createElement('tr');
    newData = document.createElement('td');
    newText = document.createTextNode("Water");
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newData = document.createElement('td');
    newText = document.createTextNode(this.gallonsOfWater);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newTable.appendChild(newRow)

    newRow = document.createElement('tr');
    newData = document.createElement('td');
    newText = document.createTextNode("Sugar");
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newData = document.createElement('td');
    newText = document.createTextNode(this.cupsOfSugar);
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newTable.appendChild(newRow)

    newRow = document.createElement('tr');
    newData = document.createElement('td');
    newText = document.createTextNode("Empty Glasses");
    newData.appendChild(newText);
    newRow.appendChild(newData);
    newData = document.createElement('td');
    newText = document.createTextNode(this.emptyGlasses);
    newData.appendChild(newText);

    newRow.appendChild(newData);
    newTable.appendChild(newRow)

    newArticle.appendChild(newTable);
    let body = document.getElementsByTagName('body')[0]; 
    body.appendChild(newArticle);    
  }
  showAdmin()
  {   
    let newArticle = document.createElement('article');
    let newH1 = document.createElement("h2");
    let newText = document.createTextNode('Admin');
    newH1.appendChild(newText);
    newArticle.appendChild(newH1);    
    
    let newUl = document.createElement("ul");
	
	let li = document.createElement("li");
    newText = document.createTextNode(
      `Price per Glass: $${this.price.toFixed(2)}`);
    li.appendChild(newText);
    newUl.appendChild(li);
    
    li = document.createElement("li");
    newText = document.createTextNode(
      `Glasses of Bananade: ${this.glassesOfLemonade}`);
    li.appendChild(newText);
    newUl.appendChild(li);
    
    li = document.createElement("li");
    newText = document.createTextNode(
      `Income: $${this.income.toFixed(2)}`);
    li.appendChild(newText);
    newUl.appendChild(li);
    
    newArticle.appendChild(newUl);
    
    let body = document.getElementsByTagName('body')[0]; 
    body.appendChild(newArticle);
  }  
  sellMoreLemonade(glassesRequested) {
    
    //Can only sell 8 at a time.
    if (glassesRequested > 8) glassesRequested = 8;
    
    //If we don't have enough, make some more.
    if (this.glassesOfLemonade < glassesRequested) 
      this.makeLemonade();
    
    if (this.glassesOfLemonade < glassesRequested) {
      //We dont have enough and we have tried to make more so
      //there must not be enough ingredients. 
      //Sell the glasses we have
      this.income += this.price * this.glassesOfLemonade;
      let temp = glassesOfLemonade;
      this.glassesOfLemonade = 0;
      return temp;
      
    } else { 
      //We do have enough.  Sell the requested amount.
      this.glassesOfLemonade -= glassesRequested;
      this.income += this.price * glassesRequested;
      return glassesRequested;
    }    
  }
}

function initAdd() {
	$('.hide_me').on('click', showInput).on('keyup blur', addValue);
}
function addValue(e) {
	if (e.keyCode == 13 || e.keyCode==10){
		if (this.id == "numLemons") {
			ls.lemons += +this.value;
			updateInventory("Bananas", +ls.lemons, 6);
			$('.hide_me').hide();

		}
	}
	if (e.keyCode == 13 || e.keyCode==10){
		if (this.id == "numGallonsOfWater") {
			ls.gallonsOfWater += +this.value;
			updateInventory("Water", +ls.gallonsOfWater, 1);
			$('.hide_me').hide();

		}
	}
	if (e.keyCode == 13 || e.keyCode==10){
		if (this.id == "numCupsOfSugar") {
			ls.cupsOfSugar += +this.value;
			updateInventory("Sugar", +ls.cupsOfSugar, 1);
			$('.hide_me').hide();

		}
	}
	if (e.keyCode == 13 || e.keyCode==10){
		if (this.id == "numEmptyGlasses") {
			ls.emptyGlasses += +this.value;
			updateInventory("Empty Glasses", +ls.emptyGlasses, 8);
			$('.hide_me').hide();

		}
	}
	if (this.id == 'numPrice') {
        ls.price = +this.value;
        updateAdmin("Price per Glass: $", ls.price.toFixed(2));
        $('.hide_me').hide();

    }
}

function updateAll() {
	updateInventory("Bananas", ls.lemons, 6);
	updateInventory("Water", ls.gallonsOfWater, 1);
	updateInventory("Sugar", ls.cupsOfSugar, 1);
	updateInventory("Empty Glasses", ls.emptyGlasses, 8);
	updateAdmin("Glasses of Bananade: ",  ls.glassesOfLemonade);
    updateAdmin("Income: $", ls.income.toFixed(2));
}

function initButtons() {
	let buttons = $('button');
	buttons[0].addEventListener("click",()=>{ls.makeLemonade(); updateAll();}, false);
	buttons[1].addEventListener("click",()=>{ls.sellLemonade(); updateAll();}, false);
	buttons[2].addEventListener("click", ()=>{ls.sellMoreLemonade(8); updateAll();}, false); 
}	
function updateInventory(name, value, min) {
	
		const tbl = document.querySelector("table");
		const tds = tbl.getElementsByTagName("td");
			
		for (let el of tds) {
			if (el.innerHTML == name) {
				el.nextSibling.innerHTML = value;
				if( value < min) {
					el.style.backgroundColor="pink";
					el.nextSibling.style.backgroundColor="pink";
				}
			}				
		}
		
		
	}
function updateAdmin(str, value) {
	const unList = document.querySelector('ul');
	const nodeList = unList.getElementsByTagName('li');
	
	for (let ele of nodeList) {
		if (ele.innerHTML.indexOf(str) >= 0) {
			ele.innerHTML = str + value;
		}
	}
}
function showInput(e){
	$('.hide_me').slideUp(500);
	$(this).slideDown(500);
	this.value="";
	this.style.display='inline';
	this.focus();
}

function initSpans() {
	let spans = $('span');
	for (let ele of spans) {
		$('span').on('mouseover', function () {
			ele.style.color='purple';
			ele.previousSibling.previousSibling.src='../images/plus_dark.png';
		});
	}
	for (let ele of spans) {
		$('span').on('mouseout', function () {
			ele.style.color='blue';
			ele.previousSibling.previousSibling.src='../images/plus_light.png';
		});
		
	}
}

let ls = new LemonadeStand(20,10,10,10, 2.0);

function init() {  	
	ls.showAdmin();  
	ls.showIngredients();  
	$('.hide_me').hide();
	initAdd();
	initButtons();
	initSpans();
}
$(function() {
    init();
});


