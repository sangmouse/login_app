import React from 'react'
import {
    Route,
    RouteProps,
    Redirect,
    RouteComponentProps
} from 'react-router-dom'
import { connect } from 'react-redux'


const PrivateRoute = (props) => {
    const { location } = props;
    const { isAuthenticated, component: Component, ...rest } = props
    return (
        <Route
            {...rest}
            render={props => {
                if (!isAuthenticated && !localStorage.getItem('token')) {
                    return (
                        <Redirect to={{ pathname: '/login', state: { from: location } }} />
                    );
                }
                return <Component {...props} />
            }}
        />
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.home.isAuthenticated
})


export default connect(mapStateToProps)(PrivateRoute)
