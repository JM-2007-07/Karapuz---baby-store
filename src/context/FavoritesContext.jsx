import React, { createContext, useContext, useEffect, useState } from 'react'

const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('favorites')

        try {
            return savedFavorites ? JSON.parse(savedFavorites) : []
        } catch {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (product) => {
        setFavorites(prev => {
            if (prev.some(item => item.id === product.id)) return prev
            return [...prev, product]
        })
    }

    const removeFromFavorites = (id) => {
        setFavorites(prev => prev.filter(item => item.id !== id))
    }

    const toggleFavorite = (product) => {
        setFavorites(prev => {
            const exists = prev.some(item => item.id === product.id)

            if (exists) {
                return prev.filter(item => item.id !== product.id)
            }

            return [...prev, product]
        })
    }

    const isFavorite = (id) => {
        return favorites.some(item => item.id === id)
    }

    return (
        <FavoritesContext.Provider value={{favorites,addToFavorites,removeFromFavorites,toggleFavorite,isFavorite}}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavorites = () => useContext(FavoritesContext)