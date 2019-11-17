import classnames from 'classnames';
import React from 'react';
import { animated, config, useSpring } from 'react-spring';

interface IContentCardProps {
    /** Title of the content */
    title: string;

    /** Poster url */
    imageUrl: string;

    /** URL to redirect to */
    url: string;

    /** Type of the content */
    type: 'movie' | 'tv';
}

const trans = s => `scale(${s})`;

const ContentCard = ({ title, imageUrl, url, type }: IContentCardProps) => {
    const [props, set] = useSpring(() => ({ scale: 1, config: config.default }));

    const resetOnMouseLeave = () => {
        set({ scale: 1 });
    };

    const onMouseMove = ({ clientX, clientY }) => {
        set({ scale: 1.05 });
    };

    return (
        <div className="lg:w-2/12 md:w-1/3 sm:w-1/2 p-2">
            <a href={url}>
                <animated.div
                    className="block bg-gray-800 w-full h-auto rounded overflow-hidden relative"
                    onMouseMove={onMouseMove}
                    onMouseLeave={resetOnMouseLeave}
                    style={{
                        transform: props.scale.interpolate(trans),
                    }}
                >
                    <div
                        className={classnames('absolute text-xs py-1 px-2 rounded top-2 right-2', {
                            'bg-red-700': type === 'movie',
                            'bg-green-700': type === 'tv',
                        })}
                    >
                        {type}
                    </div>
                    <img className="object-cover w-full shadow-lg" src={imageUrl} />
                </animated.div>
                <p className="text-white py-2">{title}</p>
            </a>
        </div>
    );
};

export default ContentCard;
