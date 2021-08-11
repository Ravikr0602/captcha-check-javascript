const captcha = document.querySelector(".get_captcha"),
reload_button = document.querySelector(".reload-button"),
input_text_check = document.querySelector(".input-check input"),
check_button = document.querySelector(".check_button"),
result_status = document.querySelector(".status_result");

//storing all captcha characters in array
let all_alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function generate_captcha(){
  for (let i = 0; i < 6; i++) { //get 6 random alphbets 
    let random_alphbet = all_alphabet[Math.floor(Math.random() * all_alphabet.length)];
    captcha.innerText += ` ${random_alphbet}`; //passing 6 random alphbets inside captcha
  }
}
generate_captcha(); //call Captcha when the page open
//call Captcha & remove when the reload button click
reload_button.addEventListener("click", ()=>{
  removeContent();
  generate_captcha();
});

check_button.addEventListener("click", e =>{
  e.preventDefault(); 
  result_status.style.display = "block";
  
  let inputVal = input_text_check.value.split('').join(' ');
  if(inputVal == captcha.innerText){ //if captcha matched
    result_status.style.color = "#008000";
    result_status.innerText = "Excellent! You are not a robot.";
    setTimeout(()=>{ // remove content after some few seconds 
     removeContent();
      generate_captcha();
    }, 3000);
  }else{
    result_status.style.color = "#ff0047";
    result_status.innerText = "Captcha not matched. Please try again!";
  }
});

function removeContent(){
 input_text_check.value = "";
 captcha.innerText = "";
 result_status.style.display = "none";
}