import axios from 'axios';


const getProducts = async function() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=12');
    let data = parseList(response);
    const heroes = data;
    return heroes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getProfiles = async function() {
  try {
    const response = await axios.get('https://reqres.in/api/users?page=2');
    let data = parseList(response);
    const profiles = data.data;
    return profiles;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const parseList = response => {
    if (response.status !== 200) throw Error(response.message);
    if (!response.data) return [];
    let list = response.data;
    if (typeof list !== 'object') {
      list = [];
    }
    return list;
};

export const dataService = {
    getProducts,
    getProfiles
};