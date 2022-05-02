const containerFizzBuzz = document.querySelector(".container");

for (let i = 1; i < 101; i++) {
    const box = document.createElement("div");
    containerFizzBuzz.appendChild(box);
    box.classList.add("num");
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(`FizzBuzz ${i}`);
        box.classList.add("fizzbuzz");
        box.innerHTML = "FizzBuzz";
    }
    else if (i % 3 == 0) {
        console.log(`Fizz ${i}`);
        box.classList.add("fizz");
        box.innerHTML = "fizz";
    }
    else if (i % 5 == 0) {
        console.log(`Buzz ${i}`);
        box.classList.add("buzz");
        box.innerHTML = "buzz";
    }
    else {
        console.log(i);
        box.innerHTML = i;
    }
};