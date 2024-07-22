// src/components/StarWarsCharacters.tsx
import React, { useState } from 'react';
import useStarWarsData from '../hooks/useStarWarsData';
import CharacterDetails from './CharacterDetails';

const StarWarsCharacters: React.FC = () => {
    const { data, isLoading, error } = useStarWarsData();
    const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

    console.log('StarWarsCharacters', { data })

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Star Wars Characters</h1>
            <ul>
                {data?.results.map(person => (
                    <li key={person.url} onClick={() => setSelectedUrl(person.url)}>
                        {person.name}
                    </li>
                ))}
            </ul>
            {selectedUrl && <CharacterDetails url={selectedUrl} />}
        </div>
    );
};

export default StarWarsCharacters;
