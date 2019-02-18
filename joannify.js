//makes an array of all the images on a page using document.getElementsByTagName

//iterates over the array and sets the source of each image to the Joanna Image

//links to pictures
const paths = ['https://cs.nyu.edu/media/faculty_photos/Klukowska_16-0015_0533_250x250.jpg', 
				'https://0.academia-photos.com/4045779/1545441/1875704/s200_joanna.klukowska.jpg', 'https://avatars2.githubusercontent.com/u/9770320?s=400&v=4'];

let imgs = document.getElementsByTagName("img");

    for(let i = 0; len = imgs.length; i<len, i++){
    	let n = Math.floor(Math.random() * 3); //change to length of paths
    	imgs[i].src = paths[n];
    }

