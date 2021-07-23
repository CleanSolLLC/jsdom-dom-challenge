document.addEventListener("DOMContentLoaded", () => {
  noDefault();
});


function noDefault() {
  document.getElementById("comment-form").addEventListener("click", function(event) {
    event.preventDefault();
  });
}



// 1. start timer

const ARRAY = []
var interval;
//let time = 0;

startTimer();

  function timer() {

    //pauseButton();

    const counter = document.getElementById("counter");
    
          let time = parseInt(counter.innerHTML);
          time += 1;
          counter.innerHTML = time;

           document.getElementById("pause").addEventListener("click", paused);

}

function startTimer() {
  interval = setInterval(timer, 1000);
}

function stopTimer() {
  clearInterval(interval);
}


//2. event decreases counter by 1 per click
document.getElementById("minus").addEventListener("click", function() {
  let time = parseInt(counter.innerHTML);
  time -= 1;
  counter.innerHTML = time;
})

//3. event increases counter by 1 per click
document.getElementById("plus").addEventListener("click", function() {
  let time = parseInt(counter.innerHTML);
  time += 1;
  counter.innerHTML = time;
})

//4. event records time of click
document.getElementById("heart").addEventListener("click", liked);


function pauseButton() {
  //5. event pauses time with a clickdocument.querySelector("resume").addEventListener("click", resumeTimer);
  document.getElementById("pause").addEventListener("click", paused);
}

function resumeButton() {

  document.getElementById("resume").addEventListener("click", resumeTimer);
}

function liked() {
  document.createElement("ul").className="likes"
  let ul = document.querySelector("ul")
  let li = document.createElement("li")
  li.setAttribute("data-num", counter.innerText);

  ARRAY.push(parseInt(counter.innerHTML));
  let numCount = checkFrequency(ARRAY, parseInt(counter.innerHTML));


   let num = counter.innerText;
   let str1 = ` has been liked ${numCount} time`;
   let str2 = ` has been liked ${numCount} times`;
 
   if (numCount < 2) {
     //create new child node
     li.appendChild(document.createTextNode(num + str1));
     ul.appendChild(li);
   }else {
      //find correct node and update count and plurality 
      let nodeArray = document.querySelectorAll("li");

      for(let i=0; i<nodeArray.length; i++) {
        if (nodeArray[i].dataset.num === num) {
          nodeArray[i].innerText = (num + str2);
        }
      }

   }
   
}

function checkFrequency(arry, value) {
  count = arry.filter(element => element === value).length;
  document.getElementById("minus");
  return count;
}

function paused() {
  stopTimer();
  document.getElementById("pause").style.visibility = "hidden";
  createResumeButton();
  document.getElementById("minus").disabled = true;
  document.getElementById("plus").disabled = true;
  document.getElementById("heart").disabled = true;
  document.getElementById("submit").disabled = true;
  document.getElementById("resume").addEventListener("click", resumeTimer);
} 


function resumeTimer() {
  startTimer();
  document.getElementById("resume").style.display = "none";
  document.getElementById("pause").style.visibility = "visible";
  document.getElementById("minus").disabled = false;
  document.getElementById("plus").disabled = false;
  document.getElementById("heart").disabled = false;
  document.getElementById("submit").disabled = false;
  document.getElementById("pause").addEventListener("click", paused);
 
}

function createResumeButton() {
  const btn = document.createElement("BUTTON");
  btn.setAttribute("id", "resume");
  btn.innerHTML = "resume";
  document.body.appendChild(btn);
  body = document.querySelector("body");
  body.insertBefore(btn, body.children.pause);

}

document.getElementById("submit").addEventListener("click", handleClick)

function handleClick(e) {
  let div = document.getElementById("list");
  let p = document.createElement("p");
  let comment = document.querySelector("input").value;
  div.append(comment, p);
  document.querySelector("input").value = "";
  //list.appendChild(comment);
}


































