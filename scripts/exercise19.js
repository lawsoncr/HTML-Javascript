class LemonadeStand {
	constructor(lemons, gallonsOfWater, cupsOfSugar, emptyGlasses, price) {
		this.lemons = lemons;
		this.gallonsOfWater = gallonsOfWater;
		this.cupsOfSugar = cupsOfSugar;
		this.emptyGlasses = emptyGlasses;
		this.price = price;
		this.glassesOfLemonade = 0;
		this.income = 0;
	}	
	
	makeLemonade(){
		if (this.lemons >= 6 && this.gallonsOfWater >= 1 && this.cupsOfSugar >= 1 && 
		this.emptyGlasses >= 8 ) {
				this.lemons -= 6;
				this.gallonsOfWater--;
				this.cupsOfSugar--;
				this.emptyGlasses -= 8;
				this.glassesOfLemonade += 8;
				return 8;
			}
		else 
				return 0;
	}
	
	sellLemonade() {
		if (this.glassesOfLemonade == 0) {
			if (this.makeLemonade() == 0)
			{
				return 0;
			}
			else
				this.makeLemonade();
		}
			this.glassesOfLemonade--;
			this.income += this.price;
			return 1;
	}
	
	sellMoreLemonade(glasses) {
		if (this.glassesOfLemonade == 0) {
			if (this.makeLemonade() == 0)
			{
				return 0;
			}
			else
				this.makeLemonade();
		}
		if (this.glassesOfLemonade < glasses && this.makeLemonade() == 0) {
			glasses = this.glassesOfLemonade
		}
		else if (glasses > 8) {
			glasses = 8;
		}
			this.glassesOfLemonade -= glasses;
			this.income += (this.price * glasses);
			return 1;
	}

  showAdmin() {
    let a = document.createElement("ARTICLE");   
	let head = document.createElement("H1");   
	let admin = document.createTextNode("Admin"); 	
	let ulist = document.createElement("UL");
	let li = document.createElement("LI");
	let u = document.createTextNode("Glasses of Lemonade: " + this.glassesOfLemonade);
	let li2 = document.createElement("LI");
	let u2 = document.createTextNode("Income: $" + this.income);
	
	
	
	li.appendChild(u);
	ulist.appendChild(li);
	li2.appendChild(u2);
	ulist.appendChild(li2);
	
	head.appendChild(admin);
	a.appendChild(head); 
	a.appendChild(ulist);
	document.body.appendChild(a); 
  }

  showIngredients() {
	let a2 = document.createElement("ARTICLE");
    let table = document.createElement("TABLE");
	let header = document.createElement("CAPTION");
	let header_text = document.createTextNode("Ingredients");
	
	let table_row1 = document.createElement("TR");
	let td_lemons = document.createElement("TD");
	let row1_text = document.createTextNode("Lemons");
	let td_amount = document.createElement("TD");
	let row1_data = document.createTextNode(this.lemons);
	
	let table_row2 = document.createElement("TR");
	let td_water = document.createElement("TD");
	let row2_text = document.createTextNode("Water");
	let td2_amount = document.createElement("TD");
	let row2_data = document.createTextNode(this.gallonsOfWater);
	
	let table_row3 = document.createElement("TR");
	let td_sugar = document.createElement("TD");
	let row3_text = document.createTextNode("Sugar");
	let td3_amount = document.createElement("TD");
	let row3_data = document.createTextNode(this.cupsOfSugar);
	
	let table_row4 = document.createElement("TR");
	let td_glasses = document.createElement("TD");
	let row4_text = document.createTextNode("Empty Glasses");
	let td4_amount = document.createElement("TD");
	let row4_data = document.createTextNode(this.emptyGlasses);
	
	table_row1.appendChild(td_lemons);
	td_lemons.appendChild(row1_text);
	table_row1.appendChild(td_amount);
	td_amount.appendChild(row1_data);
		
	table_row2.appendChild(td_water);
	td_water.appendChild(row2_text);
	table_row2.appendChild(td2_amount);
	td2_amount.appendChild(row2_data);
	
	table_row3.appendChild(td_sugar);
	td_sugar.appendChild(row3_text);
	table_row3.appendChild(td3_amount);
	td3_amount.appendChild(row3_data);
	
	table_row4.appendChild(td_glasses);
	td_glasses.appendChild(row4_text);
	table_row4.appendChild(td4_amount);
	td4_amount.appendChild(row4_data);
	
	header.appendChild(header_text);
	table.appendChild(table_row1);
	table.appendChild(table_row2);
	table.appendChild(table_row3);
	table.appendChild(table_row4);
	table.appendChild(header);
	
	a2.appendChild(table);
	document.body.appendChild(a2);
  }
}

function test1() {
  let ls = new LemonadeStand(15,3,4,20,1.5);
  ls.makeLemonade();
  ls.sellLemonade();
  ls.sellMoreLemonade(8);
  let article1 = document.getElementById("admin");
  ls.showAdmin(article1);
  let article2 = document.getElementById("ingredients");
  ls.showIngredients(article2);
}

test1();