import React, {Component} from 'react';
import Input from '../../compoments/Input/Input';

class Signup extends Component {
  state = {
    user: {
      name: {
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        valid: false
      },
      email: {
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email'
        },
        value: '',
        valid: false
      },
      password: {
        elementConfig: {
          type: 'password',
          placeholder: 'Your Password'
        },
        value: '',
        valid: false
      },
      passwordConfirm: {
        elementConfig: {
          type: 'password',
          placeholder: 'Comfirm Your Password'
        },
        value: '',
        valid: false
      }
    },
    validUser: false
  }

  changeInputHandler = (event, inputIdentifier) => {
    const updateUser = {
      ...this.state.user
    };
    const updateUserInfo = {
      ...updateUser[inputIdentifier]
    };

    updateUserInfo.value = event.target.value;
    if(updateUserInfo.value.length > 0) {
      updateUserInfo.valid = true;
    };

    updateUser[inputIdentifier] = updateUserInfo;
    this.setState({
      user: updateUser
    });
  }

  signUpHandler = (event) => {
    event.preventDefault();
    const userForm = {};
    for(let key in this.state.user) {
      userForm[key] = this.state.user.key.value;
    }

  }

  render() {
    const formElementsArray = [];
    for(let key in this.state.user) {
      formElementsArray.push({
        id: key,
        config: this.state.user[key]
      });
    };
    console.log(this.state.user);
    let Signupform = (
      <form onSubmit={this.signUpHandler}>
        {formElementsArray.map(el => {
          return (
            <Input key={el.id} config={el.config.elementConfig} value={el.config.value} changed={(event) => this.changeInputHandler(event, el.id)}/>
          )
        })}
        <button >Sign up</button>
      </form>
    )

    return (
      <div>
        {Signupform}
      </div>
    );
  };
};

export default Signup;