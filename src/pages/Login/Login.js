import React, { useReducer } from 'react';

const initialState = {
  password: {
    value: '',
    touched: false,
  },
  email: {
    value: '',
    touched: false,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'field':
      return {
        ...state,
        [action.field]: {
          value: action.payload,
          touched: true,
        },
      };
    default:
      return state;
  }
}

const getErrors = ({ password, email }) => {
  const errors = {};

  if (password.value.trim() === '') {
    errors.password = 'The password must not be empty';
  }

  if (password.value.length < 8) {
    errors.password = 'The password must must be longer than 8 characters';
  }

  if (email.value.trim() === '') {
    errors.email = 'The email must not be empty';
  }

  if (!email.value.includes('@')) {
    errors.email = 'The email must include @ character';
  }

  return errors;
};

function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const errors = getErrors(state);

  return (
    <div className="row">
      <form
        className="col s12"
        onSubmit={(event) => {
          event.preventDefault();
          console.log('password', state.password);
          console.log('email', state.email);
        }}
      >
        <div className="row">
          <div className="input-field col s12">
            <input
              id="password"
              type="password"
              className="validate"
              value={state.password.value}
              onChange={(e) => {
                dispatch({
                  type: 'field',
                  field: 'password',
                  payload: e.target.value,
                });
              }}
            />
            <label htmlFor="password" className="active">
              Password
            </label>
            {state.password.touched && errors.password && (
              <span>{errors.password}</span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="email"
              type="email"
              className="validate"
              value={state.email.value}
              onChange={(e) => {
                dispatch({
                  type: 'field',
                  field: 'email',
                  payload: e.target.value,
                });
              }}
            />
            <label htmlFor="email" className="active">
              Email
            </label>
            {state.email.touched && errors.email && <span>{errors.email}</span>}
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <input
              type="submit"
              value="Login"
              className="waves-effect waves-light btn"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
