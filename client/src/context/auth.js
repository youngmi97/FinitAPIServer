import React, { useReducer, createContext } from 'react'

const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {},
});

function authReducer (state, action) {
    //console.log("action", action);
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }

        case 'LOGOUT':
            return {
                ...state,
                user: null
            }
        default:
            return state;
    } 
}

function AuthProvider(props) {
    const [state, dispatch] = useReducer(authReducer, { user: null });

    // authReducer will listen to any dispatch actions
    // passes down to component tree
    function login (userData) {
        dispatch({
          type: "LOGIN",
          payload: userData,
        });
    }


    // dispatches an action with type LOGOUT
    function logout () {
        dispatch({ type: "LOGOUT" })
    }


    //value is what will be passed down to components under the following context provider
    return (
        <AuthContext.Provider
            value={{ user: state.user, login, logout }}
            {...props}
        />
    )
}


// AuthContext is what will be used by components to access the "context" 
// AuthProvider will be used to wrap all of the application, so that it has access to teh context functions
export { AuthContext, AuthProvider }