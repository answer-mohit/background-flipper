const button=document.querySelector('button');
const ul=document.querySelector("ul");
const input=document.querySelector("input");
button.addEventListener("click",()=>{
    if(input.value.length>0){
        console.log(input.value);
        const list=document.createElement("li");
        list.appendChild(document.createTextNode(input.value));
    ul.prepend(list);
    document.body.style.backgroundColor=input.value;

    input.value="";

    }else{
        alert("please fill the field before press the enter");
    }
    
});
// input.addEventListener("keypress",(event)=>{
//     if(input.value.length>0){
//      if(event.keyCode===13){
//         console.log(input.value);
//         const list=document.createElement("li");
//         list.appendChild(document.createTextNode(input.value));
//     ul.prepend(list);
//     document.body.style.backgroundColor=input.value;

//     input.value="";
//      }
//      else{
//          alert('you press wrong key');
//      }
// }else{
//         alert("please fill the field before press the enter");
//     }
    
// });
