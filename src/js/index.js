
import axios from 'axios';

async function getResults(query) {
    const key = '903cd9fe3295f590b0c32f33e846d8d4';
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    try {
        const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch(error) {
        alert(error);
    }   
}
getResults('tomato pasta');

// http://food2fork.com/api/search 
// 903cd9fe3295f590b0c32f33e846d8d4