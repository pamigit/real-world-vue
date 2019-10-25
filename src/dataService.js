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

const getProfile = async function(id) {
  try {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    let profile = parseItem(response, 200);
    //hero.fullName = `${hero.firstName} ${hero.lastName}`;
    return profile;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateProfile = async function(profile) {
  try {
    const response = await axios.put(`https://reqres.in/api/users/${profile.id}`, profile);
    const updatedProfile = parseItem(response, 200);
    return updatedProfile;
  } catch (error) {
    console.error(error);
    return null;
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

export const parseItem = (response, code) => {
  if (response.status !== code) throw Error(response.message);
  let item = response.data;
  if (typeof item !== 'object') {
    item = undefined;
  }
  return item;
};

export const dataService = {
    getProducts,
    getProfiles,
    getProfile,
    updateProfile
};