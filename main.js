const guess = document.querySelector(".submit");
const userLive = document.querySelector(".live")
const wrong_number = document.querySelector(".wrong_Guess");
const popUp_message = document.querySelector(".popUp_message");

let live = 5;
guess.addEventListener("click", () =>{
    const input_number = document.querySelector(".input_number").value
    const guessWrong = [];

    const random_number = Math.floor(Math.random() * 5) + 1;
    console.log(random_number)

    if(input_number > 5){
        popUp_message.innerHTML = "Please input number from 1 to 5"
        popUp_message.classList.add("active");
        setTimeout(() => {
            popUp_message.classList.remove("active");
        }, 2000);
    }else{
        if(input_number == random_number){
            popUp_message.innerHTML = "correct!!! You win"
            popUp_message.classList.add("correct");
            setTimeout(() => {
                popUp_message.classList.remove("correct");
            }, 2000);
            live++;
            userLive.innerHTML = live;
        }else{
            popUp_message.innerHTML = "Wrong!!!, Try again"
            popUp_message.classList.add("wrong");
            setTimeout(() => {
                popUp_message.classList.remove("wrong");
            }, 1000);
            guessWrong.push(input_number);
            wrong_number.innerHTML = guessWrong;
            live--;
            userLive.innerHTML = live;

            if(live === 0){
                console.log("you lose, try again")
                setTimeout(() => {
                    location.reload()
                }, 1000);
            }
        }
    }
})