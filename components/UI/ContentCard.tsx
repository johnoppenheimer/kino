import React from 'react';

interface IContentCardProps {
    /** Title of the content */
    title: string;

    /** Poster url */
    imageUrl: string;

    /** URL to redirect to */
    url: string;
}

const ContentCard = ({ title, imageUrl, url }: IContentCardProps) => (
    <div className="lg:w-2/12 md:w-1/3 sm:w-1/2 p-2">
        <a href={url}>
            <div className="block bg-gray-800 w-full h-auto rounded overflow-hidden">
                <img className="object-cover w-full shadow-lg" src={imageUrl} />
            </div>
            <p className="text-white py-2">{title}</p>
        </a>
    </div>
);

export default ContentCard;
