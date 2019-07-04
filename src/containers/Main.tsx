import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { getFullName } from 'api';
import { Title, Button } from 'components';

interface StateProps {
    name: string;
}

interface DispatchProps {
    getFullName: typeof getFullName;
}

type PropsComponent = StateProps & DispatchProps;
interface StateComponent { }

class Main extends PureComponent<PropsComponent, StateComponent> {
    onButtonClicked = () => {
        this.props.getFullName();
    };

    render() {
        return (
            <>
                <Title className='mb-3'>Welcome to NextJS with Typescript</Title>
                <Button className='mb-3' onClick={this.onButtonClicked}>
                    View Name
                </Button>
                <p>{this.props.name}</p>
            </>
        );
    }
}

const mapStateToProps = ({ name }: any): StateProps => ({ name });

export default connect<StateProps>(
    mapStateToProps,
    { getFullName }
)(Main);
