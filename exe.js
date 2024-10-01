document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      // Remove 'selected' class from all items
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('selected'));
      // Add 'selected' class to the clicked item
      item.classList.add('selected');
    });
  });


//DISPLAY CHOICE ON DESCRIPTION BOX
var navi2 = document.getElementById('EB');
var navi1 = document.getElementById('PR');
var navi3 = document.getElementById('JE');
var navi4 = document.getElementById('CA');
var navi5 = document.getElementById('ST');
navi2.addEventListener("click", function(){
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        if (div.id.startsWith('div')) {
          div.classList.add('hid');
        }
      });
      const element = document.getElementById('div2');
      element.classList.remove('hid');
});
navi1.addEventListener("click", function(){
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        if (div.id.startsWith('div')) {
          div.classList.add('hid');
        }
      });
      const element = document.getElementById('div1');
      element.classList.remove('hid');
});
navi3.addEventListener("click", function(){
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        if (div.id.startsWith('div')) {
          div.classList.add('hid');
        }
      });
      const element = document.getElementById('div3');
      element.classList.remove('hid');
});
navi4.addEventListener("click", function(){
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        if (div.id.startsWith('div')) {
          div.classList.add('hid');
        }
      });
      const element = document.getElementById('div4');
      element.classList.remove('hid');
});
navi5.addEventListener("click", function(){
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        if (div.id.startsWith('div')) {
          div.classList.add('hid');
        }
      });
      const element = document.getElementById('div5');
      element.classList.remove('hid');
});

//NEXT AND PREVIOUS SUBJECTS
var prv = document.getElementById('page5-prev');
var nx = document.getElementById('page5-next');
var pg2 = document.getElementById('pag');

//prev
prv.addEventListener("click", function(){
  pg2.innerHTML = "1 / 2";

  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
      if (div.id.startsWith('subjectteach')) {
        div.classList.add('dnshow');
      }
    });
    const element = document.getElementById('subjectteach1');
    element.classList.remove('dnshow');

});
//next
nx.addEventListener("click", function(){
  pg2.innerHTML = "2 / 2";
  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
      if (div.id.startsWith('subjectteach')) {
        div.classList.add('dnshow');
      }
    });
    const element = document.getElementById('subjectteach2');
    element.classList.remove('dnshow');

});

//AWARDS PICTURES

var counter = 1;
var yokona = document.getElementById('moveright');
yokona.addEventListener("click", function(){
  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
      if (div.id.startsWith('cong')) {
        div.classList.add('awts');
      }
    });
    if(counter==1){
    const element = document.getElementById('cong2');
    element.classList.remove('awts');
    counter=counter+1;
    }
    else if(counter==2){
      const element = document.getElementById('cong3');
    element.classList.remove('awts');
    counter=counter+1;
    }
    else if(counter==3){
      const element = document.getElementById('cong4');
    element.classList.remove('awts');
    counter=counter+1;
    }
    else if(counter==4){
      const element = document.getElementById('cong5');
    element.classList.remove('awts');
    counter=counter+1;
    }
    else if(counter==5){
      const element = document.getElementById('cong6');
    element.classList.remove('awts');
    counter=counter+1;
    }
    else if(counter==6){
      const element = document.getElementById('cong7');
    element.classList.remove('awts');
    counter=counter+1;
    }
    else if(counter==7){
      const element = document.getElementById('cong8');
    element.classList.remove('awts');
    counter=counter+1;
    }
    else if(counter==8){
      const element = document.getElementById('cong9');
    element.classList.remove('awts');
    counter=counter+1;
    }
    else if(counter==9){
      const element = document.getElementById('cong1');
    element.classList.remove('awts');
    counter=1;
    }
  });

  var yokona2 = document.getElementById('moveleft');
  yokona2.addEventListener("click", function(){
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        if (div.id.startsWith('cong')) {
          div.classList.add('awts');
        }
      });
      if(counter==1){
      const element = document.getElementById('cong9');
      element.classList.remove('awts');
      counter=9;
      }
      else if(counter==2){
        const element = document.getElementById('cong1');
      element.classList.remove('awts');
      counter=counter-1;
      }
      else if(counter==3){
        const element = document.getElementById('cong2');
      element.classList.remove('awts');
      counter=counter-1;
      }
      else if(counter==4){
        const element = document.getElementById('cong3');
      element.classList.remove('awts');
      counter=counter-1;
      }
      else if(counter==5){
        const element = document.getElementById('cong4');
      element.classList.remove('awts');
      counter=counter-1;
      }
      else if(counter==6){
        const element = document.getElementById('cong5');
      element.classList.remove('awts');
      counter=counter-1;
      }
      else if(counter==7){
        const element = document.getElementById('cong6');
      element.classList.remove('awts');
      counter=counter-1;
      }
      else if(counter==8){
        const element = document.getElementById('cong7');
      element.classList.remove('awts');
      counter=counter-1
      }
      else if(counter==9){
        const element = document.getElementById('cong8');
      element.classList.remove('awts');
      counter=counter-1;
      }
    });
  