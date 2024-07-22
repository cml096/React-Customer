// src/hooks/useStarWarsData.ts
import { useQuery } from 'react-query';
import { fetchStarWarsPeople } from '../api/swapi';
import {StarWarsPeopleResponse} from "../types/swapi";

const useStarWarsData = () => {
    return useQuery<StarWarsPeopleResponse, Error>('starWarsPeople', fetchStarWarsPeople);
};

export default useStarWarsData;
