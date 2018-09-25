import * as React from 'react';
import CardList from './CardList';
import CounterButton from './CounterButton';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import Header from './Header';

class MainPage extends React.Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    }

    render() {
        const { onSearchChange, robots, isPending, error } = this.props;
        const filteredRobots = this.filterRobots(robots);
        if (error) { throw new Error(error); }
        return (
            <div className="tc">
                <Header />
                <CounterButton />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    {isPending ?
                        <h1 className="f1 tc">Loading...</h1> :
                        <CardList robots={filteredRobots} />
                    }
                </Scroll>
            </div>
        );
    }
}

export default MainPage;
