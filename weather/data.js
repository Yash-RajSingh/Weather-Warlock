const key = 'A6jfGxds5OqWRYdliPKMenut95GQQeGc';

// function to get city info
const getcity = async (city) => {
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search/';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];
};

//function to get weather info
const getweather = async (id) => {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];
}


