const headline=document.querySelector('#headline');
const btnUpdateHeading=document.querySelector('.btn-main');

const highlights=document.querySelectorAll('.highlight');

const items=document.querySelectorAll('li');


//for...of loop: https://www.digitalocean.com/community/tutorials/for-loops-for-of-loops-and-for-in-loops-in-javascript
for(const highlight of highlights){
  highlight.style.backgroundColor='cornsilk';
}

for(let i=0; i<items.length; i++){
      items[i].style.color='orchid';
    }


btnUpdateHeading.addEventListener('click', () =>{
    headline.style.border="solid 2px red";
    headline.style.fontSize='60px';
                                  

});
