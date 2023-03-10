/*
let links = document.querySelectorAll(".gridBtn"),
			currentPlayer = 1,
    cellIsOccupied = true

	for(let i = 0; i < links.length; i++){
		let link = links[i]
		link.addEventListener("click", function(e){
			e.preventDefault()
        cellIsOccupied = e.currentTarget.classList.contains("player2") || e.currentTarget.classList.contains("player1")	;			
        
        console.log(cellIsOccupied)
			if(cellIsOccupied === false){
				// Mettiamo una X o un O a seconda del turno del player
				// Cambiamo il currentPlayer -> currentPlayer = 2
          e.currentTarget.classList.toggle("player"+currentPlayer)
          if(currentPlayer === 1){
            currentPlayer = 2
          }else{
            currentPlayer = 1
          }
    }
	})
	{

    reset.addEventListener("click", function(event){
    	window.location.reload()
		})
    }
	}
 
*/

		let grid = [
		[null , null, null],
		[null , null, null],
		[null , null, null]
		]


		let output = document.querySelector(".output")
		let links = document.querySelectorAll(".gridBtn"),
			currentPlayer = 1,
    		cellIsOccupied = true


		for(let i = 0; i < links.length; i++){
			let link = links[i]
			link.addEventListener("click", function(e){
				e.preventDefault()
        		cellIsOccupied = e.currentTarget.classList.contains("player2") || e.currentTarget.classList.contains("player1")	;			
		        console.log(cellIsOccupied)
				if(cellIsOccupied === false){

					console.log(e.currentTarget.dataset)
		          e.currentTarget.classList.toggle("player" + currentPlayer)

		          let riga=e.currentTarget.dataset.row
		          let colonna=e.currentTarget.dataset.col

		          if(currentPlayer === 1){
		          	grid[riga][colonna]="X"
		          }else{
		          	grid[riga][colonna]="O"
		          }


		          if(currentPlayer === 1){
		            currentPlayer = 2
		            output.innerHTML = "Tocca al giocatore 2" 
		          }else if(currentPlayer === 2){
		            currentPlayer = 1
		            output.innerHTML = "Tocca al giocatore 1"
		          }
		          console.log(currentPlayer)
		        }
			})

			{
				
    reset.addEventListener("click", function(event){
    	window.location.reload()
		})
    }
	}
		
