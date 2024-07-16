import React, { Suspense, memo } from 'react';

function Details({ contentInfo, activeModel }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="absolute top-24 left-1/2 -translate-x-1/2 p-4 bg-white/45 rounded-lg text-center">
                <h1 className="text-4xl">{contentInfo[activeModel]?.title}</h1>
                <p>{contentInfo[activeModel]?.description}</p>
            </div>
        </Suspense>
    );
}

export default memo(Details);
