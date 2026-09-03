import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const savedUser = localStorage.getItem('currentUser')

        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser))
            } catch {
                localStorage.removeItem('currentUser')
            }
        }
    }, [])

    const register = (userData) => {
        const newUser = {
            name:userData.name,
            email:userData.email,
            password:userData.password
        }

        localStorage.setItem('registeredUser', JSON.stringify(newUser))

        const currentUser = {
            name:newUser.name,
            email:newUser.email
        }

        setUser(currentUser)
        localStorage.setItem('currentUser', JSON.stringify(currentUser))
    }

    const login = (email, password) => {
        const savedUser = localStorage.getItem('registeredUser')

        if (!savedUser) {
            return {
                success:false,
                message:'Пользователь с таким аккаунтом не зарегистрирован'
            }
        }

        try {
            const registeredUser = JSON.parse(savedUser)

            if (registeredUser.email !== email) {
                return {
                    success:false,
                    message:'Пользователь с таким email не найден'
                }
            }

            if (registeredUser.password !== password) {
                return {
                    success:false,
                    message:'Неверный пароль'
                }
            }

            const currentUser = {
                name:registeredUser.name,
                email:registeredUser.email
            }

            setUser(currentUser)
            localStorage.setItem('currentUser', JSON.stringify(currentUser))

            return {
                success:true
            }
        } catch {
            return {
                success:false,
                message:'Ошибка при входе в аккаунт'
            }
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('currentUser')
    }

    return (
        <AuthContext.Provider value={{user,register,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)