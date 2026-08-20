let data = {

apple:{cal:52,protein:0.3,fats:0.2,carbs:14},

banana:{cal:89,protein:1.1,fats:0.3,carbs:23},

orange:{cal:47,protein:0.9,fats:0.1,carbs:12},

papaya:{cal:43,protein:0.5,fats:0.3,carbs:11},

spinach:{cal:23,protein:2.9,fats:0.4,carbs:3.6},

broccoli:{cal:34,protein:2.8,fats:0.4,carbs:7},

carrot:{cal:41,protein:0.9,fats:0.2,carbs:10},

tomato:{cal:18,protein:0.9,fats:0.2,carbs:4},

rice:{cal:130,protein:2.7,fats:0.3,carbs:28},

oats:{cal:389,protein:17,fats:7,carbs:66},

wheat:{cal:340,protein:13,fats:2.5,carbs:72},

lentils:{cal:116,protein:9,fats:0.4,carbs:20},

chickpeas:{cal:164,protein:9,fats:2.6,carbs:27},

egg:{cal:155,protein:13,fats:11,carbs:1.1},

tofu:{cal:265,protein:18,fats:20,carbs:1.2},

// NON-VEG ITEMS
chicken: { cal: 239, protein: 27, fats: 14, carbs: 0 },
fish: { cal: 206, protein: 22, fats: 12, carbs: 0 },
egg: { cal: 155, protein: 13, fats: 11, carbs: 1.1 },
mutton: { cal: 294, protein: 25, fats: 21, carbs: 0 },
prawn: { cal: 99, protein: 24, fats: 0.3, carbs: 0.2 },
tuna: { cal: 132, protein: 28, fats: 1, carbs: 0 },

// DAIRY + PROTEIN ITEMS
milk: { cal: 42, protein: 3.4, fats: 1, carbs: 5 },
curd: { cal: 98, protein: 11, fats: 4.3, carbs: 3.4 },
paneer: { cal: 265, protein: 18, fats: 20, carbs: 1.2 },
cheese: { cal: 402, protein: 25, fats: 33, carbs: 1.3 },

// EXTRA HEALTHY ITEMS
soya_chunks: { cal: 345, protein: 52, fats: 0.5, carbs: 33 },
almonds: { cal: 579, protein: 21, fats: 50, carbs: 22 },
peanuts: { cal: 567, protein: 26, fats: 49, carbs: 16 },
walnuts: { cal: 654, protein: 15, fats: 65, carbs: 14 },
};


function autoFill(food){
    document.getElementById("foodInput").value = food;
}
function calculateNutrition(){

let food=document.getElementById("foodInput").value.toLowerCase();

let qty=document.getElementById("qtyInput").value;

let resultBox=document.getElementById("result");

let factor=qty/100;


if(data[food]){

resultBox.innerHTML=`

<h3>Nutrition Info</h3>

Calories: ${(data[food].cal*factor).toFixed(2)} kcal <br>

Protein: ${(data[food].protein*factor).toFixed(2)} g <br>

Fats: ${(data[food].fats*factor).toFixed(2)} g <br>

Carbs: ${(data[food].carbs*factor).toFixed(2)} g

`;

addHistory(food,qty);

showImage(food);

}

else{

resultBox.innerHTML="Food not found";

}

}



function calculateBMI(){

let weight=document.getElementById("weight").value;

let height=document.getElementById("height").value/100;

let bmi=weight/(height*height);

let result="";

let emoji="";

let color="";


if(bmi<18.5){

result="Underweight";

emoji="😟";

color="orange";

}

else if(bmi<25){

result="Normal";

emoji="😊";

color="green";

}

else if(bmi<30){

result="Overweight";

emoji="😐";

color="orange";

}

else{

result="Obese";

emoji="😟";

color="red";

}


document.getElementById("bmiResult").innerHTML=`

<h3 class="${color}">Your BMI: ${bmi.toFixed(2)} ${emoji}</h3>

<p>Category: ${result}</p>

<p>Healthy BMI range: 18.5 – 24.9</p>

`;

}



function toggleDarkMode(){

document.body.classList.toggle("dark");

}



function addHistory(food,qty){

let list=document.getElementById("historyList");

let item=document.createElement("li");

item.textContent=food+" ("+qty+"g)";

list.appendChild(item);

}



function clearHistory(){

document.getElementById("historyList").innerHTML="";

}


function showImage(food){

    food = food.toLowerCase().trim();

    let img = document.getElementById("foodImage");

    // Fixed image mapping
    let images = {
        apple: "images/apple.jpg",
        banana: "images/banana.jpg",
        orange: "images/orange.jpg",
        papaya: "images/papaya.jpg",
        spinach: "images/spinach.jpg",
        broccoli: "images/broccoli.jpg",
        carrot: "images/carrot.jpg",
        tomato: "images/tomato.jpg",
        rice: "images/rice.jpg",
        oats: "images/oats.jpg",
        wheat: "images/wheat.jpg",
        lentils: "images/lentils.jpg",
        chickpeas: "images/chickpeas.jpg",
        egg: "images/egg.jpg",
        tofu: "images/tofu.jpg",

        // NON-VEG
        chicken: "images/chicken.jpg",
        fish: "images/fish.jpg",
        mutton: "images/mutton.jpg",
        prawn: "images/prawn.jpg",
        tuna: "images/tuna.jpg",

        // DAIRY
        milk: "images/milk.jpg",
        curd: "images/curd.jpg",
        paneer: "images/paneer.jpg",
        cheese: "images/cheese.jpg",

        // EXTRA
        almonds: "images/almonds.jpg",
        peanuts: "images/peanuts.jpg",
        walnuts: "images/walnuts.jpg",
        soya_chunks: "images/soya_chunks.jpg"
    };

    if(images[food]){
        img.src = images[food];
    } else {
        img.src = "images/default.jpg"; // fallback image
    }
}
