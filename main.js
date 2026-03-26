function checkAge(){

    let age = document.getElementById("edad").value;

    if (Number(age) >= 18){
        document.getElementById("sagot").innerHTML="Status: You are qualified to vote.";
    }
    
    else {
        document.getElementById("sagot").innerHTML="Status: You are allow- Joke, you are not allowed to vote.";
    }
}