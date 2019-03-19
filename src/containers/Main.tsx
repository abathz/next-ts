import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch, AnyAction } from 'redux'
import { getFullName } from 'actions'
import { Title, Button } from 'components'

type StateProps = {
  name: string
}

type DispatchProps = {
  getFullName: typeof getFullName
}

type PropsComponent = StateProps & DispatchProps
type StateComponent = {}

class Main extends PureComponent<PropsComponent, StateComponent> {

  onButtonClicked = () => {
    this.props.getFullName()
  }

  render () {
    return (
      <>
        <Title className='mb-3'>Welcome to NextJS with Typescript</Title>
        <Button onClick={this.onButtonClicked}>View Name</Button>
        <p>{this.props.name}</p>
      </>
    )
  }
}

const mapStateToProps = ({ simple }: any): StateProps => {
  const { name } = simple

  return { name }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => bindActionCreators({
  getFullName
}, dispatch)

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Main)
