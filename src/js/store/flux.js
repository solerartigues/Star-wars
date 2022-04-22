const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes:[],
			naves:[],
			planetas:[],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getPeople: () => {
				fetch("https://swapi.dev/api/people/")
                .then(response => response.json())
                .then(result => {console.log(result.results)
					setStore({personajes:result.results})
				
				})
                .catch(error => console.log('error', error));
			},
			getStarships: () => {
				fetch("https://www.swapi.tech/api/starships")
               .then(response => response.json())
               .then(result => {console.log(result.results)
			       setStore({naves:result.results})
				})
               .catch(error => console.log('error', error));

			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
               .then(response => response.json())
               .then(result => {console.log(result.results)
			       setStore({planetas:result.results})
			})
               .catch(error => console.log('error', error));
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
