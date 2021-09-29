searchBtn = document.querySelector('.searchBtn');
search = document.querySelector('.search');
serc = document.querySelector('.serc');
icon= document.getElementById('icon');
nav = document.querySelector('nav');
socialbtn = document.querySelector('.social .contact');
social = document.querySelector('.social');
socialicon = document.querySelector('.social .soc');
scrollBtn = document.querySelector('.btn');

let socialTst = true ;
let searchTst = true ;
let iconTst = true ;

socialbtn.onclick = ()=> {
    if (socialTst) {
        social.style.width ='300px';
        socialicon.style.display = 'flex';
        socialTst = false;
    } else {
        social.style.width ='50px';
        socialicon.style.display = 'none';
        socialTst = true;
    }
}



searchBtn.onclick = ()=> {
    if (searchTst) {
        search.style.width = '80%';
        search.style.height = '70px';
        search.style.padding = '2px';
        serc.style.height = '20vh';
        document.querySelector(".navbar").style.top = "125px";
        searchTst = false;
    } else {
        search.style.width = '0px';
        search.style.padding = '0px';
        document.querySelector(".navbar").style.top = "0px";
        search.style.height = '0px';
        serc.style.height = '0vh';
        searchTst = true;
    }
}

icon.onclick = ()=> {
    if (iconTst) {
        nav.style.left = '0';
        iconTst = false;
    } else {
        nav.style.left = '-100%';
        iconTst = true;
    }
}

window.addEventListener("scroll",()=>{
   if (window.pageYOffset > 100) {
    scrollBtn.style.opacity ="1";
   } else {
    scrollBtn.style.opacity ="0"; 
   }
});


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;


  if (!searchTst) {
    document.querySelector(".navbar").style.top = "125px";
  } else if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-100px";
    nav.style.left = '-100%';
  }

  prevScrollpos = currentScrollPos;
}


category = document.querySelector('.category');
right = document.querySelector('.right');
left = document.querySelector('.left');
rightTst = true;
leftTst = false;
var x = 0;
tst();
right.onclick = ()=> {
    if (rightTst) {
        if (x == 0) {
            category.style.justifyContent= "center";
            x++;
            leftTst = true ;
        } else if (x == 1) {
            category.style.justifyContent= "flex-end";
            x++;
            rightTst = false;
        }
    }
    tst();
}

left.onclick = ()=> {
    if (leftTst) {
        if (x == 2) {
            category.style.justifyContent= "center";
            x--;
            rightTst = true;
        } else if (x == 1) {
            category.style.justifyContent= "flex-start";
            x--;
            leftTst = false;
        }
    }
    tst();
}

function tst() {
    if (rightTst) {
        right.classList.add("active");
    } else {
        right.classList.remove("active");
    }
    if (leftTst) {
        left.classList.add("active");
    } else {
        left.classList.remove("active");
    }
}