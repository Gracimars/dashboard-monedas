const leaderboardDataContainer = document.getElementById("grid-container");
/* Obtener el contenedor:
- `leaderboardDataContainer`: Nombre de la variable que almacena el elemento HTML.
- `document.getElementById("leaderboard-data")`: Busca en el documento HTML un elemento con el ID "leaderboard-data" y lo guarda en la variable. Este será el lugar donde mostraremos los datos del JSON.
*/

fetch("data.json")
	.then((response) => response.json())
	.then((data) => {
		/* console.log(data); */
		const leaderboardData = data.leaderboardData;

		// Procesar los datos del JSON:
		//   - `.then(data => { ... })`: Esta función se ejecuta después de que el JSON se ha convertido a un objeto JavaScript.
		//     - `data`: Representa el objeto JavaScript que contiene la información del JSON.
		//     - `const leaderboardData = data.leaderboardData;`: Se guarda el array con la información de los usuarios (que está dentro del objeto `data`) en la variable `leaderboardData`.

		leaderboardData.forEach((item, index) => {
			const position = index + 1;
			const nickname = item.nickname;
			const coins = item.coins;

			// Seleccionar los elementos correspondientes dentro de los contenedores
			const positionElements = document.querySelectorAll(".header-position .position");
			const nicknameElements = document.querySelectorAll(".header-nickname .nickname");
			const coinsElements = document.querySelectorAll(".header-coins .coins");

			// Asignar valores a los elementos correspondientes
			positionElements[index].textContent = position.toString().padStart(2, "0");
			nicknameElements[index].textContent = nickname;
			coinsElements[index].textContent = coins;
		});
	})
	.catch((error) => console.error("Error fetching data:", error));
