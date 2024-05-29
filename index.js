async function callAPI() {
    const url = 'https://the-cocktail-db3.p.rapidapi.com/';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1133c28fbdmshadfc94a6c34f72cp1dc922jsna860f608813e',
            'x-rapidapi-host': 'the-cocktail-db3.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        const objects = JSON.parse(result);
        let htmlString = "";
        objects.forEach(element => {
            htmlString += `
        <div class=" card shadow w-25">
                <div class=" card body">
                <h4>id:${element.id}</h4>
                <h5>${element.title}</h5>
                <p>difficulty: ${element.difficulty}</p>
                    <img src="${element.image}" alt="coctails-image" width="300" height="300">
                   
                </div>
            </div>`
        });
        document.getElementById("div1").innerHTML = htmlString;
    } catch (error) {
        console.error(error);
    }
}
callAPI();