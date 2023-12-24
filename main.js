// Change longugs
let loungug_book = document.querySelectorAll(".loungug-book span");
loungug_book.forEach((span) => {
	span.addEventListener("click" , (long) => {
	if(long.target.dataset.longug === "AR") {
		location.href = "./indexrtl.html";
	} else if (long.target.dataset.longug === "EN") {
		location.href = "./index.html";
	}
	})
})
function goThere(urlt) {
	location.href = urlt
}
// color
const colorList = document.querySelectorAll(".color-list li");


// About us Img List
const imgList = document.querySelectorAll(".about img");

colorList.forEach(li => {
	li.addEventListener("click" , (e) => {
	  document.documentElement.style.setProperty("--color-page",e.target.dataset.color);
		  window.localStorage.setItem("color_option",e.target.dataset.color);
		  // about us img
		  imgList.forEach(img => {
			  img.classList.remove("active")
			  if(img.dataset.color === e.target.dataset.color) {
			  img.classList.add("active")
			  console.log(e.target.dataset.color)
			  }
		  })
	  handleactive(e)
	});
  });

// Check If There's Local Storage Color Option

let mainColores = localStorage.getItem("color_option");

if (mainColores !== null) {
	document.documentElement.style.setProperty("--color-page",mainColores);
	document.querySelectorAll(".color-list li").forEach(c => {
		c.classList.remove("active");
		if(c.dataset.color == mainColores) {
			c.classList.add("active");
		}
		imgList.forEach(img => {
			img.classList.remove("active")
			if(img.dataset.color === mainColores) {
            img.classList.add("active")
			}
		})
	});
}

// Toggel Spin Class On Icon
document.querySelector(".setting .icon").onclick = function() {
    this.classList.toggle("fa-spin");
    document.querySelector(".setting").classList.toggle("open");
};

// Landing Page Img Effict
let landingPage = document.querySelector(".imgSlider");

let imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

setInterval(() => {
	let randomNum = Math.floor(Math.random() * imgArray.length);
  landingPage.style.setProperty("background-image" , 'url(image/' + imgArray[randomNum] + ')')
  }
   ,3000);

// courses Effect full Width
let anime_start = document.querySelectorAll(".stop_anime");
let lastScroll = window.screenY || document.documentElement.scrollTop;
let our_courses = document.querySelector(".courses");
let header_area = document.querySelector(".header-area");
window.onscroll =  () => {
  let courses_top = our_courses.offsetTop;
  let courses_height = our_courses.offsetHeight;
  let window_height = this.innerHeight;
  let window_top = this.scrollY;
  if (window_top > (courses_top + courses_height - window_height )) {
	let all_courses = document.querySelectorAll(".course-box .course-porgress span");
	all_courses.forEach((span) => {
		span.style.width = span.dataset.porgress;
	})
  }
  let ScrollEvent = this.screenY || document.documentElement.scrollTop;
   if (ScrollEvent > lastScroll) {
    header_area.style.top = "-85px"
	document.querySelector(".header-area ul").classList.remove("open")
	} else {
		header_area.style.top = "0px"
   }
   lastScroll = ScrollEvent <= 0 ? 0 : ScrollEvent;
   anime_start.forEach((stop) => {
   let startAnime = stop.offsetTop - 700;
   if(window_top >= startAnime) {
	stop.classList.add("show_anime");
} else {
 stop.classList.remove("show_anime");
}
})
} ;

// Classes Full Page  

let our_classes = document.querySelectorAll(".classes img");
our_classes.forEach(img => {
	img.addEventListener("click", (i)=> {
    let overlay = document.createElement("div");
	overlay.className = "popup_overlay";
	document.body.appendChild(overlay);
	let popup_box = document.createElement("div");
	popup_box.className = "popup_box";
	if (img.alt !== null) {
		let h2_img = document.createElement("h2");
		let text_img = document.createTextNode(img.alt);
		h2_img.appendChild(text_img)
		popup_box.appendChild(h2_img);
	}
	let popup_img = document.createElement("img");
	let p = i.target.nextElementSibling.cloneNode(true);
	popup_img.src = img.src;
	popup_box.appendChild(popup_img);
	popup_box.appendChild(p);
	document.body.appendChild(popup_box);
	console.log(popup_box)
	let close_button = document.createElement("span");
	close_button.className = "close_button";
	let close_buttun_text =  document.createTextNode("X");
	close_button.appendChild(close_buttun_text);
	popup_box.appendChild(close_button);
	} )
})

// close Popup
document.addEventListener("click", (e)=> {
	if(e.target.className == "close_button") {
		document.querySelector(".popup_box ").remove();
		document.querySelector(".popup_overlay").remove();
	}
})

// Select All Bullets 
const all_bullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links 
const all_links = document.querySelectorAll(".header-area ul a");

function scrollToSpmeth(elements) {
	elements.forEach(ele => {
		ele.addEventListener("click" , (e) => {
			document.querySelector(e.target.dataset.section).scrollIntoView({
				behavior: "smooth"
			});
		});
	});
};
scrollToSpmeth(all_bullets);
scrollToSpmeth(all_links);

// Handle Active

function handleactive(e) {
	e.target.parentElement.querySelectorAll(".active").forEach(c => {
	c.classList.remove("active");
	});
	e.target.classList.add("active");
};

let bullets_span = document.querySelectorAll(".testing-optoin span");

let bullets_container = document.querySelector(".nav-bullets");

let bullets_local_item = localStorage.getItem("bullets_optoin");

if (bullets_local_item !== null) {
	bullets_span.forEach(span => {
		span.classList.remove("active")
	})
	if (bullets_local_item === 'block') {
		bullets_container.style.display = "block";
		document.querySelector(".testing-optoin .yes").classList.add("active")
	} else {
		bullets_container.style.display = "none";
		document.querySelector(".testing-optoin .no").classList.add("active")
	}
}

bullets_span.forEach(span => {
	span.addEventListener("click", (s) => {
		if(span.dataset.display === 'show'){
			bullets_container.style.display = "block";
			localStorage.setItem("bullets_optoin","block")
		} else {
			bullets_container.style.display = "none";
			localStorage.setItem("bullets_optoin","none")
		};
		handleactive(s) 
	});
});

document.querySelector(".reset-options").onclick = () => {
	localStorage.clear();
	window.location.reload();
}

let landing_ul_open = document.querySelector(" .header-area ul");
let landing_button_conerl = document.querySelector(" .header-area button");

window.onclick = function(e){
		if(e.target !== landing_button_conerl && e.target !== landing_ul_open ) {
			if (landing_ul_open.classList.contains("open")) {
				landing_ul_open.classList.remove("open")
			}
        }
}
landing_button_conerl.onclick = function() {
	landing_ul_open.classList.toggle("open");
}


//  Camments Effect
let allBoxParsant = document.querySelectorAll(".comments .parsant-box");
let boxOfli = document.querySelector(".comments ul");
let num = 0;
setInterval(function() {
	let getAllLi = document.querySelectorAll(".comments ul li");
	allBoxParsant.forEach(box => {
		box.classList.remove("active")
		if(box.dataset.number == num) {
		box.classList.add("active")
	}
	getAllLi.forEach(li => {
		li.classList.remove("active")
		if(li.dataset.numberli == num) {
			li.classList.add("active")
		}
	})
})
num++
if(num === allBoxParsant.length) {
	num = 0;
}
},5000 )

function liParsant() {
	allBoxParsant.forEach((box,index) => {
		let createLi = document.createElement("li");
        createLi.setAttribute("data-numberli", index);
		boxOfli.appendChild(createLi)
	})
	let getAllLi = document.querySelectorAll(".comments ul li")
	getAllLi.forEach(li=> {
		li.addEventListener("click" , (e)=> {
			reomveEleActive(getAllLi)
			li.classList.add("active")
				num = +e.target.dataset.numberli + 1;
			allBoxParsant.forEach((box) => {
				box.classList.remove("active")
				if(e.target.dataset.numberli === box.dataset.number) {
					box.classList.add("active")
				}
			})
		})
	})
}

liParsant() 
function reomveEleActive(element) {
	element.forEach(ele => {
		ele.classList.remove("active")
	})
}
