import actions from '../actions/types'
import initialState from '../store'
import lang from '../../components/languages/e-us'

const authReducer = (state = initialState, action) => {
    switch(action.type) {

        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                token: action.token,
                currentUser: action.currentUser,
                statusMessage: lang.login_success,
                errorMessage: null,
                isLoggedIn: action.isLoggedIn
            }

        case actions.LOGIN_FAILED:
            return {
                ...state,
                token: null,
                currentUser: null,
                statusMessage: lang.login_failed,
                errorMessage: action.errorMessage
            }

        case actions.LOGIN_FATALERROR:
            return {
                ...state,
                token: null,
                currentUser: null,
                statusMessage: lang.login_fatalerror,
                errorMessage: action.errorMessage
            }


        case actions.LOGOUT_SUCCESS:
            return {
                ...state,
                token: null,
                currentUser: null,
                statusMessage: lang.logout_success,
                errorMessage: null
            }

        case actions.LOGOUT_FAILED:
            return {
                ...state,
                statusMessage: lang.logout_failed,
                errorMessage: action.errorMessage
            }

        case actions.LOGOUT_FATALERROR:
            return {
                ...state,
                statusMessage: lang.logout_fatalerror,
                errorMessage: action.errorMessage
            }

            case actions.GET_PROFILE_SUCCESS:
                return {
                    ...state,
                    currentUser: action.currentUser
                }
    
            case actions.UPDATE_PROFILE_SUCCESS:
                return {
                    ...state,
                    currentUser: action.currentUser
                }
    
        default:
            return state
    }
}

export default authReducer