import React, { useContext, useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import '../App.css'
import { isString } from '../utils'
import { useForm } from '../hooks'

import { AuthContext } from '../context/auth'

function Register(props) {
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState({});

    const initialState = {
      username: "",
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    };

    // Using custom hook defined in hooks.js
    const { onChange, onSubmit, values } = useForm(registerUser, initialState);

    const [addUser, { loading }] = useMutation(REGISTER_USER, {
      // this function will be triggered if mutation is executed successfully
      update(_, { data: { signUp : userData } }) {
        //redirect to home page
        context.login(userData);
        props.history.push('/');
      },
      onError(err) {
        console.log("graphQlErrors", err.graphQLErrors);
        //console.log(err.graphQLErrors[0].extensions.exception.details);
        // have to add error fields as well 
        if (err.graphQLErrors[0].extensions.exception.hasOwnProperty("details")) {
            err.graphQLErrors[0].extensions.exception.details.forEach(
              (element) => 
              setErrors({ ...errors, [element.context.key]: element.message} )
            );
            
        } else {
            const errKey =  Object.keys(err.graphQLErrors[0].extensions.exception.errors)[0];
            setErrors({
              ...errors,
              [errKey]: err.graphQLErrors[0].extensions.exception.stacktrace[0]
            });
        }
        console.log("errors", errors);
      },
      variables: values,
    });

    function registerUser() {
        addUser();
    }


    return (
      <div className="form-container">
        <Form
          onSubmit={onSubmit}
          noValidate
          className={loading ? "loading" : ""}
        >
          <h1>Register</h1>
          <Form.Input
            label="Email"
            placeholder="Email..."
            name="email"
            type="email"
            value={values.email}
            error={errors.email ? true : false}
            onChange={onChange}
          />
          <Form.Input
            label="Name"
            placeholder="Name..."
            name="name"
            type="text"
            value={values.name}
            error={errors.name ? true : false}
            onChange={onChange}
          />
          <Form.Input
            label="Username"
            placeholder="Username..."
            name="username"
            type="text"
            value={values.username}
            error={errors.username ? true : false}
            onChange={onChange}
          />
          <Form.Input
            label="Password"
            placeholder="Password..."
            name="password"
            type="password"
            value={values.password}
            error={errors.password ? true : false}
            onChange={onChange}
          />
          <Form.Input
            label="Confirm Password"
            placeholder="Confirm Password..."
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            error={errors.confirmPassword ? true : false}
            onChange={onChange}
          />
          <Button type="submit" primary>
            Register
          </Button>
        </Form>
        {Object.keys(errors).length > 0 && (
          <div className="ui error message">
            <ul className="list">
              {Object.values(errors).map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
}

const REGISTER_USER = gql`
    mutation signUp(
        $email: String!
        $username: String!
        $name: String!
        $password: String!
    ) {
        signUp (
            email: $email
            username: $username
            name: $name
            password: $password
        ) {
            id
            email
            username
            name
        }
    }
`;

export default Register
