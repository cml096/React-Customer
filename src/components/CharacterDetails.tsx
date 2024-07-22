import React from 'react';
import useCharacterDetails from '../hooks/useCharacterDetails';

interface Props {
    url: string;
}

const CharacterDetails: React.FC<Props> = ({ url }) => {
    const { data, error, isLoading } = useCharacterDetails(url);

    console.log('CharacterDetails', { data })

    if (isLoading) return <div>Loading details...</div>;
    if (error) return <div>Error loading details: {error.message}</div>;

    return (
        <div>
            <p>Name: {data?.name}</p>
            <p>Height: {data?.height}</p>
            <p>Mass: {data?.mass}</p>
        </div>
    );
};

export default CharacterDetails;
