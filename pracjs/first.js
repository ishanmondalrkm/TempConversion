const a= document.getElementById("inp1");
const b= document.getElementById("p1");

function funcion(){
if(document.getElementById("inp2").checked){
    b.textContent= ((Number(a.value))*1.8)+32;
}
else if(document.getElementById("inp3").checked){
    b.textContent=((Number(a.value))-32)/1.8;
}
else{
    console.log(`select an option`);
}
}
const myForm = document.getElementById("myForm"); // Replace with form's ID

myForm.addEventListener("submit", function(e) {
    e.preventDefault(); // This stops the page from refreshing!
    
    //  interactive code to calculate or show the answer goes here
});
