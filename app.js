
const btnCreate=document.querySelector('.btn-main');
const btnToggle=document.querySelector('.btn-toggle');
const btnRemove=document.querySelector('.btn-remove');

/*const highlights=document.querySelectorAll('.highlight');

const items=document.querySelectorAll('li');


//for...of loop: https://www.digitalocean.com/community/tutorials/for-loops-for-of-loops-and-for-in-loops-in-javascript
for(const highlight of highlights){
  highlight.style.backgroundColor='cornsilk';
}

for(let i=0; i<items.length; i++){
      items[i].style.color='orchid';
    }
*/



btnCreate.addEventListener('click', () =>{
    
    const input=document.querySelector('.input-main');
    const list=document.querySelector('ul');
    //const item=document.createElement('li');
    
    //item.textContent=input.value;
    
   
//to add to the bottom of list
    //list.append(item);
//to add to the top of the list:
    //list.prepend(item);
//to add HTML to specified positions
    list.insertAdjacentHTML(
      'afterbegin', //position -https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
      `<li>${input.value}</li>` //content
    );
 input.value=''; 

});


btnToggle.addEventListener('click', () => {
  const listContainer=document.querySelector('.list-container');    
//check if button is hidden or not
if(listContainer.style.display==='none'){
   // listContainer.style.display='block';
  //remove style attribute - better than above as it is whole div container
    listContainer.removeAttribute('style');
    btnToggle.textContent='Hide list';
  }else{
    listContainer.style.display='none';
    btnToggle.textContent='Show list';
  }    
  
  
                           
});


btnRemove.addEventListener('click',()=>{
  const lastItem=document.querySelector('li:last-child');
  lastItem.remove();
});