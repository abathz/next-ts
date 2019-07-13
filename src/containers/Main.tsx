import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getFullName } from 'actions/simple';
import { Title, Button } from 'components';
import Link from 'next/link';

interface StateProps {
    name: string;
}

interface DispatchProps {
    getFullName?: typeof getFullName | any;
}

type PropsComponent = StateProps & DispatchProps;
interface StateComponent {}

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
                <Link href='/about'>
                    <a className='text-decoration-none text-primary'>About</a>
                </Link>
                <p>{this.props.name}</p>
            </>
        );
    }
}

const mapStateToProps = ({ name }: any): StateProps => ({ name });

export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    { getFullName }
)(Main);
