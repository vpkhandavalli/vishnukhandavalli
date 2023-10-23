import React from 'react';

import FedSimX from './fedsimx.png';
import FedSimutator from './fedsimulator.png';

export function PersonalProjects() {
    return (
        <>
            <h2 tabIndex={0}>
                Personal Projects
            </h2>
            <ul>
                <li>
                    <a href="https://fedsimulator.com" target="_blank" rel="noopener noreferrer" tabIndex={0}>
                        Fedsimulator
                    </a>{' '}
                    · A web-based platform that simulates a wrestling federation, allowing users to create shows, pay-per-view events, and television shows, as well as utilizing a draft system and other tools for free.
                    <br />
                    <img src={FedSimutator} alt="Fedsimutator" style={{ maxWidth: 300 }} />
                </li>
                <li>
                    <a href="https://fedsimx.com" target="_blank" rel="noopener noreferrer" tabIndex={0}>
                        FedsimX
                    </a>
                    <br />
                    <img src={FedSimX} alt="FedsimX" style={{ maxWidth: 300 }} />
                </li>
            </ul>
        </>
    )
}

export default PersonalProjects;