import React from 'react';

interface IMovieCardProps {
    /** Title of the movie */
    title: string;

    /** Poster url */
    imageUrl: string;

    /** URL to redirect to */
    url: string;
}

const MovieCard = ({ title, imageUrl, url }: IMovieCardProps) => (
    <div className="lg:w-2/12 md:w-1/3 sm:w-1/2 p-2">
        <a href={url}>
            <div className="block bg-gray-800 w-full h-auto">
                <img className="object-cover w-full shadow-lg rounded" src={imageUrl} />
            </div>
            <p className="text-white py-2">{title}</p>
        </a>
    </div>
);

export default MovieCard;
