let submitButton = document.getElementById("submit-btn");
let selectGender = document.querySelector("#Gender");

let HeightField = document.getElementById("height-field");
let WeightField = document.getElementById("weight-field");

let result = document.querySelector('#res');
let Category = document.getElementById("category");
let HealthyTip = document.getElementById("tip");
let GenderImage = document.querySelector(".Img");

// fetching image//

let ManImg = document.createElement("img");
let FemaleImg = document.createElement("img");
ManImg.src = "images/man.png";
FemaleImg.src = "images/woman.png";

// selecting Gender //

function getGender(){
    let inputValue = selectGender.value;
    if(inputValue == "Male"){
        GenderImage.appendChild(ManImg);
        GenderImage.removeChild(FemaleImg);
    }
    else if(inputValue == "Female"){
        GenderImage.appendChild(FemaleImg)
        GenderImage.removeChild(ManImg);
    }
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
        Category.innerHTML = "You're Healthy!.."
        HealthyTip.innerHTML = "Keep up your Healthy habits";
        Category.classList.add("border");
        HealthyTip.classList.add("border");
    }
    else if(res > 25){
        Category.innerHTML = "You're OverWeighted!";
        HealthyTip.innerHTML = "Don't worry about Fat. Let's burn!";
        Category.classList.add("border");
        HealthyTip.classList.add("border");
    }

}

// adding event listeners //

submitButton.addEventListener("click", calculateBMI);
selectGender.addEventListener("change", getGender)
