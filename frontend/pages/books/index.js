import React from 'react';
import Filter from '../../components/Filter';
import PublicationCover from '../../components/PublicationCover';

const Books = () => {
    return (
        <div>
            <h1>Books</h1>
            <Filter />
            <PublicationCover />
        </div>
    );
};

export default Books;
