import * as React from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import './App.css';
import MainPage from '../components/MainPage';

export interface IRobot {
    name: string;
    id: number;
    email: string;
}

interface IAppProps {

}

interface IAppState {
    robots: Array<IRobot>;
    searchfield: string;
}

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event: React.SyntheticEvent<HTMLInputElement>): void => { dispatch(setSearchField(event.currentTarget.value)); },
        onRequestRobots: () => dispatch(requestRobots())
    };
};

class App extends React.Component<IAppProps, IAppState> {
    render(): JSX.Element { return (<MainPage {...this.props} />); }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
