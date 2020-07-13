//single selector
 /*const myForm=document.getElementById('my-form');
 console.log(myForm)
 console.log(document.querySelector('.wrapper'));

 //multiple selector
 const items = document.querySelectorAll('.item');
 //iterate items
  items.forEach(item=>console.log(item));
//select the parent class
  const ul = document.querySelector('.list-type');
   //ul.lastElementChild.textContent='welcome';
//ul.firstElementChild.innerHTML = 'traversy media';
//node list
//ul.children[0].textContent="here we come"
//ul.children[1].innerHTML='brad'.toUpperCase();
 
//style
const btn = document.querySelector('.botton');
btn.style.background ='red';
//event listeners
btn.addEventListener('click' ,(e)=>{
  //this prevent the default behaviour i.e it doesnt flash anymore 
    e.preventDefault();
  // console.log(e.target);
   document.querySelector('#my-form').style.background='#ccc'
   document.querySelector('.wrapper').classList.add('bg-dark');
   //ul.firstElementChild.innerHTML = '<h1>welcome</h1>'
});

//console.log(document.getElementsByClassName('item')[1].style.background='yellow')
*/
const myForms=document.querySelector('#my-form')
const inputName=document.querySelector('#name')
const inputEmail=document.querySelector('#email')
const msg=document.querySelector('.msg')
const uls=document.querySelector('#users')

myForms.addEventListener('submit', onSubmit);


function onSubmit(e){

  e.preventDefault();

  if(inputEmail.value==''|| inputName.value==''){
    msg.classList.add('error')
    msg.innerHTML='please fill up the spaces'

    setTimeout(()=>msg.remove(),3000 )
  }else{
  //adding class to the element
    msg.innerHTML='success';
   //create a time function
   // setTimeout(()=>msg.remove(), 5000);

   // msg.innerHTML="succesful"

    const li=document.createElement('li');
    li.appendChild(docment.createTextNode(`${inputEmail.value}:${inputName.value}`) );

    uls.appendChild(li);

    //clear field
    inputEmail.value=''
    inputName.value=''
  }

  
  //console.log(inputName.value);
}
