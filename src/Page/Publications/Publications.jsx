import React from 'react';
import Button from 'react-bootstrap/Button';
import './Publications.css';

export default function Publications() {
    return (
        <>
            <section className="main-body ">
                <div className="container">
                    <div className="row">
                        <h1 className="publication-text">Publications</h1>
                    </div>
                    <div className="row publication-card">
                        <div className="col-md-11">
                            <p>
                                <span className="publication-no">B1.</span> Khan K.A., Rahman M.S.,
                                Rahman M.N., Khan S.A.,{' '}
                                <span className="myNameInPublication">Juel M.I.</span>, Nirjhar
                                M.I.(17 jun 2021). pp 567-581: “A Study on Electrochemical
                                Characterizations of Bryophyllum pinnat- um Leaf
                                Electricity”.Springer, Singapore. doi: 10.1007/978-981-33-6915-3_54
                            </p>
                        </div>

                        <div className="col-md-1">
                            <Button
                                variant="outline-primary"
                                className="publication-btn"
                                href="https://link.springer.com/chapter/10.1007/978-981-33-6915-3_54"
                            >
                                Link
                            </Button>
                        </div>
                    </div>
                    <div className="row publication-card">
                        <div className="col-md-11">
                            <p>
                                <span className="publication-no">C1.</span> Md. Sajid Ahmed and{' '}
                                <span className="myNameInPublication">Md. Tarikul Islam Juel</span>{' '}
                                , “IoT-Based-Smart-Watercraft- System”,2020 IEEE Region 10 Symposium
                                (TENSYMP), 5-7 June 2020, Dhaka, Bangladesh.doi:
                                10.1109/TENSYMP50017.2020.9230992
                            </p>
                        </div>

                        <div className="col-md-1">
                            <Button
                                variant="outline-primary"
                                className="publication-btn"
                                href="https://ieeexplore.ieee.org/document/9230992"
                            >
                                Link
                            </Button>
                        </div>
                    </div>
                    <div className="row publication-card">
                        <div className="col-md-11">
                            <p>
                                <span className="publication-no">C2.</span>{' '}
                                <span className="myNameInPublication">Md. Tarikul Islam Juel</span>,
                                Md. Sajid Ahmed and Tabassum Islam, “Design of IoT Based Multiple
                                Hazards Detection and Alarming System”, 2019 4th International
                                Conference on Electrical Information and Communication Technology
                                (EICT). doi: 10.1109/EICT48899.2019.9068782
                            </p>
                        </div>

                        <div className="col-md-1">
                            <Button
                                variant="outline-primary"
                                className="publication-btn"
                                href="https://ieeexplore.ieee.org/document/9068782"
                            >
                                Link
                            </Button>
                        </div>
                    </div>
                    <div className="row publication-card">
                        <div className="col-md-11">
                            <p>
                                <span className="publication-no">C3.</span>. Md. Mominur Rahman, Abu
                                Shufian, Farzana Akter,{' '}
                                <span className="myNameInPublication">Md. Tarikul Islam Juel</span>{' '}
                                and Riadul Islam, “Smart Gas Furnace”, 2019 1s International
                                Conference on Advances in Science, Engineering and Robotics
                                Technology (ICASERT). doi: 10.1109/ICASERT. 2019.8934647
                            </p>
                        </div>

                        <div className="col-md-1">
                            <Button
                                variant="outline-primary"
                                className="publication-btn"
                                href="https://ieeexplore.ieee.org/document/8934647"
                            >
                                Link
                            </Button>
                        </div>
                    </div>
                    <div className="row publication-card">
                        <div className="col-md-11">
                            <p>
                                <span className="publication-no">C4.</span>.{' '}
                                <span className="myNameInPublication">Md. Tarikul Islam Juel</span>{' '}
                                and Md. Sajid Ahmed, “A Smart Auto-Balanced System for Incubation
                                Process”, 2019 International Conference on Robotics,Electrical and
                                Signal Processing Techniques(ICREST). doi:
                                10.1109/ICREST.2019.8644295
                            </p>
                        </div>

                        <div className="col-md-1">
                            <Button
                                variant="outline-primary"
                                className="publication-btn"
                                href="https://ieeexplore.ieee.org/document/8644295"
                            >
                                Link
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
