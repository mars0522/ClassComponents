import classes from './User.module.css';
import { Component } from 'react'

// Class Component

class User extends Component{
  render() {
    return  <li className={classes.user}>{this.props.name}</li>;
  }
}


// functional componet
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
