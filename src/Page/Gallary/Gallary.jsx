import React from 'react';
import Cards from '../../Components/Cards/Cards';
import gallaryImages from '../../gallaryImages';

export default function Gallary() {
    return (
        <>
            <section className="main-body ">
                <Cards Images={gallaryImages} />
            </section>
        </>
    );
}
