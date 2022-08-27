let bool = true;

function Trigger() {
  if (bool) {
    first();
    bool = false;
  } else {
    second();
  }
}

function first() {
  const textQ = document.createTextNode(getSentence()); //get casual sentence
  const q = document.createElement("q"); //make new <q> element
  q.setAttribute("id", "quote"); //set id equals to `quote`
  q.append(textQ); //insert text
  document.getElementById("ball").classList.toggle("ball-animation"); //ball shake on
  setTimeout(function () {
    document.getElementById("ball").classList.toggle("ball-animation"); //ball shake off
    document.getElementById("eight").classList.toggle("text-animation"); //h1 vanish on
    setTimeout(function () {
      document.getElementById("eight").classList.toggle("text-animation"); //h1 vanish off
      document.getElementById("eight").remove(); //take off <h1>8</h1>
      document.getElementById("number-8").append(q); //insert <q>
      document.getElementById("quote").classList.toggle("text-animation-2"); //q vanish on
    }, 2000);
  }, 2000);
}

function second() {
  const h1 = document.createElement("h1");
  const text = document.createTextNode("8");
  h1.setAttribute("id", "eight");
  h1.setAttribute("class", "eight");
  h1.append(text);
  document.getElementById("quote").remove();
  document.getElementById("number-8").append(h1);
  first();
}

function getSentence() {
  number = Math.floor(Math.random() * 9 + 1);
  switch (number) {
    case 1:
      return "Yhea sure";
    case 2:
      return "I'm not a wizard, I don't know!";
    case 3:
      return "Maybe, if you bribe the right person";
    case 4:
      return "Of course darling";
    case 5:
      return "I would look for something else";
    case 6:
      return "Naa I don't think so";
    case 7:
      return "Leave me alone!";
    case 8:
      return "ye ye bu stop it now";
    case 9:
      return "Stop shake me!!";
  }
}
