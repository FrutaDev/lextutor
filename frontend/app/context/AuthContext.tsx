import {createContext, useContext, useEffect, useState} from 'react';
import API from '../../axios/url';
import * as SecureStore from 'expo-secure-store'
import { postData } from '../../axios/requests';


interface AuthProps {
    authState?: {token: string | null; authenticated: boolean | null}
    onRegister?: (email: string, password: string, role: string, advisor: Boolean) => Promise<any>
    onLogin?: (email: string, password: string) => Promise<any>
    onLogout?: () => Promise<any>
}

const AuthContext = createContext<AuthProps>({})

const useAuth = () => {
    return useContext(AuthContext)
}


export const AuthProvider = ( {children}: any ) => {
    
    const [authState, setAuthState] = useState<{
        token: string | null
        authenticated: boolean | null
    }>({
        token: null,
        authenticated: null
    })

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync('token')

            if (token) {
                API.defaults.headers.common['Authorization'] = `Bearer ${token}`
                setAuthState({
                    token: token,
                    authenticated: true
                })
            } else {
                setAuthState({ token: null, authenticated: false });
            }
        }
        loadToken()
    }, [])
    
    const register = async ( email: string, password: string, role: string = 'user', advisor: boolean ) => {
            return postData('/users', {email, password, role, advisor})
    }

    const login = async (email: string, password: string) => {
        try {
            const result = await API.post('/login', {email, password})
            setAuthState({
                token: result.data.token,
                authenticated: true
            })

            API.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`
            await SecureStore.setItemAsync('token', result.data.token)
            return result

        } catch (e) {
            return ("error to login "+ e)
        }
    }

    const logout = async () => {
            await SecureStore.deleteItemAsync('token')

            delete API.defaults.headers.common['Authorization'];

            setAuthState({
                token: null,
                authenticated: false
            })
    }

    const value = {
        authState,
        onRegister: register,
        onLogin: login,
        onLogout: logout
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default useAuth