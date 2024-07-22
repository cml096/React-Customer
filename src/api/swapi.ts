import {StarWarsPeopleResponse, StarWarsPerson} from "../types/swapi";

const fetchStarWarsPeople = async (): Promise<StarWarsPeopleResponse> => {
    const response = await fetch('https://swapi.dev/api/people/');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const fetchCharacterDetails = async (url: string): Promise<StarWarsPerson> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch character details');
    }
    return response.json();
};


export { fetchStarWarsPeople, fetchCharacterDetails };
