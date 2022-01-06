

let count =1;

let guess = () => {
let no =document.getElementById("input").value;
let num = 5;

if(no==num){
  alert(`congrajulations! ,you guessed it right ${count}`);

  }
 else if (no > num)
{
  alert("sorry, try a smaller number");
  count++;
}
else
{
  alert("sorry,try a larger number");
  count++;
}
};