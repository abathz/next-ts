import * as React from 'react'
import { connect } from 'react-redux'
import { getFullName } from 'actions'
import { Link } from 'routes'

interface StateProps {
  name: string
}

interface DispatchProps {
  getFullName: typeof getFullName
}

interface PropsComponent extends StateProps, DispatchProps {}
interface StateComponent {}

class Main extends React.Component<PropsComponent, StateComponent> {
  componentWillMount () {
    this.props.getFullName()
  }

  render () {
    const { name } = this.props
    return (
      <>
        <div>Welcome to NextJS with Typescript</div>
        <Link route='about'>
          <a href=''>aaaaa</a>
        </Link>
        <div>{name}</div>
      </>
    )
  }
}

const mapStateToProps = ({ simple }: any): StateProps => {
  const { name } = simple

  return { name }
}

export default connect(mapStateToProps, { getFullName })(Main)
