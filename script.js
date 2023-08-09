function highlight() {

  let clr= document.getElementsByTagName("strong")
	for(let i=0;i<clr.length;++i){
		clr[i].style.color="green"
	}
}


function return_normal() {
    //Write your code here
	let cl= document.getElementsByTagName("strong")
	for(let i=0;i<cl.length;++i){
		cl[i].style.color="black"
	}

    
}
