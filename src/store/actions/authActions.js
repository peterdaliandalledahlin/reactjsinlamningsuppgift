import actions from './types'

const __apiurl = 'http://localhost:3001/api'

export const login = (credentials) => dispatch => {

    fetch(`${__apiurl}/users/login`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(res => {
        localStorage.setItem('USER_EMAIL', res.currentUser.email)
        localStorage.setItem('ACCESS_TOKEN', res.token)
        localStorage.setItem('USER_ID', res.currentUser._id)
        localStorage.setItem('user', JSON.stringify(res.currentUser))

        dispatch({
            type: actions.LOGIN_SUCCESS,
            currentUser: JSON.parse(localStorage.getItem('user')),
            loggedIn: true
        })


    })

}



// export const login = (credentials) => dispatch => {

//     fetch(`${__apiurl}/users/login`, {
//         method: 'POST',
//         body: JSON.stringify(credentials),
//         headers: {
//             'content-type': 'application/json'
//         }
//     })
//     .then(res => res.json())
//     .then(res => {
//         dispatch({
//             type: actions.LOGIN_SUCCESS,
//             currentUser: res.currentUser,
//             isLoggedIn: true
//         })

//         localStorage.setItem('ACCESS_TOKEN', res.token)
//         localStorage.setItem('USER_ID', res.currentUser._id)
//         localStorage.setItem('user', JSON.stringify(res.currentUser))
//     })

// }


// export const login = (credentials) => dispatch => {   
//     fetch(__apiurl + '/users/login', {
//        method: 'POST',
//        headers: {
//            'content-type': 'application/json'
//        },
//        body: JSON.stringify(credentials) 
//     })
//     .then(res => res.json())
//     .then(res => {
//         if(res.success) {
//             localStorage.setItem('USER_ID', res["id"])
//             localStorage.setItem('USER_TOKEN', res["token"])
//             dispatch({
//                 type: actions.LOGIN_SUCCESS,
//                 token: res.token,
//                 currentUser: res.currentUser,
//                 isLoggedIn: res.success
//             })
//         } else {
//             dispatch({
//                 type: actions.LOGIN_FAILED,
//                 errorMessage: res.errorMessage
//             })        
//         }
//     })
//     .catch(error => {
//         dispatch({
//             type: actions.LOGIN_FATALERROR,
//             errorMessage: error
//         })         
//     })
// }

export const logout = (user, jwt) => dispatch => {

    dispatch({
        type: actions.LOGOUT_SUCCESS
    })

    localStorage.removeItem('ACCESS_TOKEN')
    localStorage.removeItem('USER_ID')
    localStorage.removeItem('user')
    localStorage.removeItem('USER_EMAIL')

}

export const get = () => dispatch => {

    dispatch({
        type: actions.GET_PROFILE_SUCCESS,
        currentUser: JSON.parse(localStorage.getItem('user'))
    })
/*   
    fetch(`${__apiUrl}/${user._id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': 'bearer ' + jwt
        }
    })
    .then(res => res.json())
    .then(res => {
        dispatch({
            type: actiontype.GET_PROFILE_SUCCESS,
            user: res.currentUser
        })

        sessionStorage.setItem('user', JSON.stringify(res.currentUser))
    })       
 */
}

// export const get = (user, jwt) => dispatch => {
  
//     fetch(`${__apiurl}/users/${user._id}`, {
//         method: 'GET',
//         headers: {
//             'content-type': 'application/json',
//             'authorization': 'bearer ' + jwt
//         }
//     })
//     .then(res => res.json())
//     .then(res => {
//         dispatch({
//             type: actions.GET_PROFILE_SUCCESS,
//             user: res.currentUser
//         })

//         localStorage.setItem('user', JSON.stringify(res.currentUser))
//     })       

// }

export const update = (currentUser, token) => dispatch => {
    console.log(token);
 
    fetch(`${__apiurl}/users/${currentUser._id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            'authorization': 'bearer ' + token
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(res => {

        
        localStorage.setItem('user', JSON.stringify(currentUser))

        console.log(currentUser)

        dispatch({
            type: actions.UPDATE_PROFILE_SUCCESS,
            //currentUser: JSON.parse(localStorage.getItem('user'))
            currentUser: currentUser
        })

        
    })       

}

// export const update = (user, jwt) => dispatch => {
 
//     fetch(`${__apiurl}/users/${user._id}`, {
//         method: 'PATCH',
//         headers: {
//             'content-type': 'application/json',
//             'authorization': 'bearer ' + jwt
//         },

//     })
//     .then(res => res.json())
//     .then(res => {
//         dispatch({
//             type: actions.UPDATE_PROFILE_SUCCESS,
//             user: res.currentUser
//         })

//         localStorage.setItem('user', JSON.stringify(res.currentUser))
//     })       

// }

// export const logout = (userinfo) => dispatch => {

//     fetch(__apiurl + '/users/logout', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//             'authorization': 'bearer ' + userinfo.token
//         },
//         body: JSON.stringify(userinfo)
//     })
//     .then(res => res.json())
//     .then(res => {
//         if(res.success) {
//             dispatch({
//                 type: actions.LOGOUT_SUCCESS
//             })
//         } else {
//             dispatch({
//                 type: actions.LOGOUT_FAILED,
//                 errorMessage: res.errorMessage
//             })        
//         }
//     })
//     .catch(error => {
//         dispatch({
//             type: actions.LOGOUT_FATALERROR,
//             errorMessage: error
//         })         
//     })

// }

// export const register = (userinfo) => dispatch => {

//     fetch(__apiurl + '/users/register', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(userinfo)
//     })
//     .then(res => res.json())
//     .then(res => {
//         if(res.success) {
//             dispatch({
//                 type: actions.REGISTER_SUCCESS
//             })
//         } else {
//             dispatch({
//                 type: actions.REGISTER_FAILED,
//                 errorMessage: res.errorMessage
//             })        
//         }
//     })
//     .catch(error => {
//         dispatch({
//             type: actions.REGISTER_FATALERROR,
//             errorMessage: error
//         })         
//     })

// }