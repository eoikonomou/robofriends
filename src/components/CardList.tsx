import * as React from 'react';
import Card from './Card';
import { IRobot } from '../containers/App';

const CardList = ({ robots }: { robots: Array<IRobot> }) => {
    return (
        <div>
            {robots.map(({ id, name, email }) => { return <Card key={id} id={id} name={name} email={email} />; })}
        </div>
    );
}

export default CardList;
