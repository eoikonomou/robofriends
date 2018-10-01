import * as React from 'react';

class Header extends React.Component {

    shouldComponentUpdate(nextProps, nextState): boolean {
        return false;
    }

    render(): JSX.Element {
        return (
            <div>
                <h1 className="f1">RoboFriends</h1>
            </div>
        );
    }
}

export default Header;
