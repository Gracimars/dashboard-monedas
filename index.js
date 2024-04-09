const leaderboardDataContainer = document.getElementById("grid-container");
/* Obtener el contenedor:
- `leaderboardDataContainer`: Nombre de la variable que almacena el elemento HTML.
- `document.getElementById("leaderboard-data")`: Busca en el documento HTML un elemento con el ID "leaderboard-data" y lo guarda en la variable. Este será el lugar donde mostraremos los datos del JSON.
*/

fetch("data.json")
	.then((response) => response.json())
	/*se utiliza destructuring para extraer la propiedad leaderboardData 
	del objeto JSON. Esto nos proporciona directamente el array de datos que necesitamos.*/

	.then(({leaderboardData}) => {
		leaderboardData.forEach(function (item, index) {
			const {nickname, coins} = item;
			const position = index + 1;

			// Seleccionar los divs del encabezado
			const positionHeader = document.querySelector(".header-position");
			const nicknameHeader = document.querySelector(".header-nickname");
			const coinsHeader = document.querySelector(".header-coins");

			// Crear los divs para cada dato y sus clases

			const positionDiv = document.createElement("div");
			positionDiv.textContent = position.toString().padStart(2, "0");
			positionDiv.classList.add("position");

			const nicknameDiv = document.createElement("div");
			nicknameDiv.textContent = nickname;
			nicknameDiv.classList.add("nickname");

			const coinsDiv = document.createElement("div");
			coinsDiv.textContent = coins;
			coinsDiv.classList.add("coins");

			// Agregar los divs de datos a los encabezados correspondientes

			positionHeader.appendChild(positionDiv);
			nicknameHeader.appendChild(nicknameDiv);
			coinsHeader.appendChild(coinsDiv);
		});
	})
	.catch((error) => console.error("Error fetching data:", error));
