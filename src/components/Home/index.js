import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {login: false}
  clickBtn = () => {
    const {login} = this.state
    if (login === true) {
      {
        this.setState({login: false})
      }
    } else {
      {
        this.setState({login: true})
      }
    }
  }
  render() {
    const {login} = this.state
    return (
      <div className="main-container">
        <div className="sub-containet">
          {login ? (
            <h1 className="heading">Welcome User</h1>
          ) : (
            <h1 className="heading">Please Login</h1>
          )}
          {login ? (
            <button className="btn" type="button" onClick={this.clickBtn}>
              Logout
            </button>
          ) : (
            <button className="btn" type="button" onClick={this.clickBtn}>
              Login
            </button>
          )}
        </div>
      </div>
    )
  }
}
export default Home
