// Restart game Button
let restart = document.querySelector("#b")

// Grabs all the squares 

let squares= document.querySelectorAll('td')


// clear all the squares

function clearBoard(){
    for(let i=0;i<squares.length;i++){
        squares[i].textContent='';
    }
}

restart.addEventListener('click',clearBoard);


// check the sqaure marker 

function changeMarker(){
    if(this.textContent===''){
        this.textContent ='X';
    }else if(this.textContent === 'X'){
        this.textContent =0;
    }
    else{
        this.textContent = '';
    }
}
for(var i=0;i<squares.length;i++){
    squares[i].addEventListener('click',changeMarker)
}
// for loop to add event listeners to all the squares 
