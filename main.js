;(function(){
	let c = document.getElementById("canvas");
	let ctx = c.getContext("2d");
	let inputList =[].slice.call(document.querySelectorAll(".file_load"));
	let img = new Image(20, 20);
	let addImages = function(){
		[].forEach.call(inputList, function(input){
			input.addEventListener('change',function(evt){
				let files = evt.target.files;
	   			let file = files[0];
	    		if(!file.type.match('image.*')) return alert("It's not an image, please choose image");
				let reader = new FileReader();
				reader.readAsDataURL(file);
				let inputPosition = inputList.indexOf(input);
				console.log(inputPosition);
				reader.onload =function(evt){
    				img.src = evt.target.result;
    				setTimeout(function(){
    					ctx.drawImage(img,20 + inputPosition * 150,24,110,100);
   					},0);
	    		}  
			})
		})
	}
	addImages();
})();