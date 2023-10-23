import React from 'react';

import FedSimX from './fedsimx.png';
import FedSimutator from './fedsimulator.png';

export function PersonalProjects() {
    return (
        <>
            <h2 tabIndex={0}>
                Personal Projects
            </h2>
            <div>
                <div>
                    <a href="https://fedsimulator.com" target="_blank" rel="noopener noreferrer" tabIndex={0}>
                        Fedsimulator
                    </a>{' '}
                    · A web-based platform that simulates a wrestling federation, allowing users to create shows, pay-per-view events, and television shows, as well as utilizing a draft system and other tools for free.
                    5,000+ active monthly users.
                    <br />
                    <img src={FedSimutator} alt="Fedsimutator" style={{ maxWidth: 300 }} />
                </div>
                <br />
                <div>
                    <a href="https://fedsimx.com" target="_blank" rel="noopener noreferrer" tabIndex={0}>
                        FedsimX
                    </a> - Tenth iteration
                    <br />
                    <img src={FedSimX} alt="FedsimX" style={{ maxWidth: 300 }} />
                </div>
            </div>
        </>
    )
}

export default PersonalProjects;