'use strict';

{
/*   document.querySelector('button').addEventListener('click', () => {
    /* const item2 = document.createElement('li');
    item2.textContent = 'item 2';
    
    const ul = document.querySelector('ul');
    ul.appendChild(item2);
    

    const item0 = document.querySelectorAll('li')[0];
    const copy = item0.cloneNode(true);

    const ul = document.querySelector('ul');
    const item2 = document.querySelectorAll[2];
    ul.insertBefore(copy, item2);
  
    const item1 = document.querySelectorAll('li')[1];

    // item1.remove();
    // 親Node.removeChild(削除するNode)
    document.querySelector('ul').removeChild(item1);

    const li = document.createElement('li');
    const text = document.querySelector('input');
    li.textContent = text.value;
    document.querySelector('ul').appendChild(li);

    text.value = '';
    text.focus();
   

    const colors = document.querySelectorAll('input');
    let selectedColor;
    const selectedColors = [];

    colors.forEach(color => {
      if (color.checked === true){
        selectedColor = color.value;
        selectedColors.push(color.value);
      }
    });
    const li = document.createElement('li');
    li.textContent = selectedColor;
    li.textContent = selectedColors.join(',');
    li.textContent = selectedColors;
    
    const color = document.querySelector('select');
    li.textContent = `${color.value} - ${color.selectedIndex}`;
    
    document.querySelector('ul').appendChild(li);

  }); 
  */

 /* document.querySelector('button').addEventListener('dblclick', () => {
    console.log('Double Clicked!');
  });

   document.addEventListener('mousemove', e => {
    //console.log('moved!');
    console.log(e.clientX, e.clientY);
  }); */
/* 
  const text = document.querySelector('textarea');

    text.addEventListener('focus', () => {
      console.log('focus');
    });

    text.addEventListener('blur', () => {
      console.log('blur');
    }); 

    text.addEventListener('input', () => {
      //console.log('input');
      console.log(text.value.length)
    }); 

    text.addEventListener('change', () => {
      console.log('change');
    }); 

  document.addEventListener('keydown', e => {
    console.log(e.key);
  });
 */
  /* function update(){
    //document.querySelector('h1').textContent = 'Changed';
    //document.querySelectorAll('p')[1].textContent = 'Changed';
    document.querySelectorAll('p').forEach((p, index) => {
      p.textContent = `${index}番目のpです`
    })
    textContent = 'Changed';
    
  }
   */

  /* document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');
    


    //targetNode.textContent = 'Dotinstall'
    targetNode.textContent = targetNode.dataset.translation;

    //targetNode.className = 'my-color my-border'
    //targetNode.classList.add('my-color');
    if (targetNode.classList.contains('my-color') === true){
      targetNode.classList.remove('my-color');
    }else{
      targetNode.classList.add('my-color');
    } 

    //targetNode.classList.toggle('my-color');
    
    targetNode.textContent = 'Changed!';
    targetNode.title = 'This is title!';
    targetNode.style.color = 'red';
    targetNode.style.backgroundColor = 'skyblue';
    

    //document.getElementById('target').textContent = 'Changed!';
    //document.getElementById('target').textContent = 'Changed!';
  }); */

  

  document.querySelector('ul').addEventListener('click', e => {
    if (e.target.nodeName === 'LI'){
      e.target.classList.toggle('done');
    }
  });



}