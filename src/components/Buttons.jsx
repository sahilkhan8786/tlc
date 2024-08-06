import React, { Suspense, useCallback, memo } from 'react';

function Buttons({ positions, setActiveModel, setPositions }) {
    const moveLeft = useCallback(() => {
        setPositions((prevPositions) => {
            const keys = Object.keys(prevPositions);
            const newPositions = {};
            const firstPosition = prevPositions[keys[0]];

            for (let i = 0; i < keys.length - 1; i++) {
                newPositions[keys[i]] = {
                    ...prevPositions[keys[i + 1]],
                    scale: prevPositions[keys[i + 1]].scale,
                };
            }
            newPositions[keys[keys.length - 1]] = {
                ...firstPosition,
                scale: prevPositions[keys[0]].scale,
            };

            return newPositions;
        });

        setActiveModel((prevModel) => {
            const keys = Object.keys(positions);
            const currentIndex = keys.indexOf(prevModel);
            const nextIndex = (currentIndex - 1 + keys.length) % keys.length;
            return keys[nextIndex];
        });
    }, [positions, setPositions, setActiveModel]);

    const moveRight = useCallback(() => {
        setPositions((prevPositions) => {
            const keys = Object.keys(prevPositions);
            const newPositions = {};

            const lastPosition = {
                position: prevPositions[keys[keys.length - 1]].position.slice(),
                scale: prevPositions[keys[keys.length - 1]].scale.slice(),
            };

            for (let i = 0; i < keys.length; i++) {
                const currentKey = keys[i];
                const nextKey = keys[(i + 1) % keys.length];

                newPositions[nextKey] = {
                    position: prevPositions[currentKey].position.slice(),
                    scale: prevPositions[currentKey].scale.slice(),
                };
            }

            newPositions[keys[0]] = lastPosition;

            return newPositions;
        });

        setActiveModel((prevModel) => {
            const keys = Object.keys(positions);
            const currentIndex = keys.indexOf(prevModel);
            const nextIndex = (currentIndex + 1) % keys.length;
            return keys[nextIndex];
        });
    }, [positions, setPositions, setActiveModel]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="z-20 w-full absolute bottom-0 left-0  p-4   ">
                <article className='max-w-screen-2xl mx-auto backdrop-blur-xl bg-white/40 flex items-center justify-around rounded-xl gap-1 p-2'>
                    <h1 className="cursor-pointer hover:bg-gray-100 p-3 text-5xl rounded-xl flex items-center justify-center" onClick={moveLeft}>&larr;</h1>
                    <h1 className='text-xl font-semibold uppercase sm:text-3xl text-center'>Explore the learning Land</h1>
                    <h1 className="cursor-pointer hover:bg-gray-100 p-3 text-5xl rounded-xl flex items-center justify-center" onClick={moveRight}>&rarr;</h1>
                </article>
            </div>
        </Suspense>

    );
}

export default memo(Buttons);
