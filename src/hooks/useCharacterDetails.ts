import { useQuery } from 'react-query';
import { fetchCharacterDetails } from '../api/swapi';
import {StarWarsPerson} from "../types/swapi";

const useCharacterDetails = (url: string) => {
    return useQuery<StarWarsPerson, Error>(['characterDetails', url], () => fetchCharacterDetails(url), {
        enabled: !!url  // This query will not run until a URL is provided
    });
};

export default useCharacterDetails;
