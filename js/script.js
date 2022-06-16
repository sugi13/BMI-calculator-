let images = document.getElementsByClassName("img");

let MaleButton = document.getElementById("male");
let FemaleButton = document.getElementById("female");

let submitButton = document.getElementById("submit-btn");

let HeightField = document.getElementById("height-field");
let WeightField = document.getElementById("weight-field");


let result = document.querySelector('#res');
let Category = document.getElementById("category");
let HealthyTip = document.getElementById("tip");
let GenderImage = document.querySelector(".Img");

// for selecting gender //

for (let i = 0; i < images.length; i++){
    images[i].addEventListener("click", function(e){
        if(e.target.src.match("images/man.png")){
            FemaleButton.classList.add("MakeBorder");
            MaleButton.classList.remove("MakeBorder");
            GenderImage.appendChild(MaleButton);

        }
        else if(e.target.src.match("images/woman.png")){
          MaleButton.classList.add("MakeBorder");
          GenderImage.appendChild(FemaleButton);
        }
    })
}


// calculating BMI 
function calculateBMI(){
    let HeightValue = parseInt(HeightField.value);
    let WeightValue = parseInt(WeightField.value);
    let res = [WeightValue / HeightValue / HeightValue] * 10000;
    result.innerHTML = `Your BMI: ${res.toFixed(0)}kg/m²`;

    if(res < 16){
        Category.innerHTML = "severe Thinness";
        HealthyTip.innerHTML = "Eliminate the mindset of Can't. Improve Yourself!";
        Category.classList.add("border");
        HealthyTip.classList.add("border");
    }
    else if(res < 18){
        Category.innerHTML = "Mild Thinness";
        HealthyTip.innerHTML = "Improve Yourself!..";
        Category.classList.add("border");
        HealthyTip.classList.add("border");
    }
    else if(res < 25){
        Category.innerHTML = "Your're Healthy!.."
        HealthyTip.innerHTML = "Keep your workout habits";
        Category.classList.add("border");
        HealthyTip.classList.add("border");
    }
    else if(res > 25){
        alert("Never skip the GYM!");
    }


    HeightField.value = "";
    WeightField.value = "";
}

submitButton.addEventListener("click", calculateBMI);
