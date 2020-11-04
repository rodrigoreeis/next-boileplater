import { createContext, useContext, useState, useEffect } from 'react'
import storage from 'utils/storage'

const savedContext = storage.getItem('context')

const AppContext = createContext()

const initialState = { ...savedContext, oi: 'oi' }

if (!savedContext) {
  storage.setItem('context', initialState)
}

const ContextProvider = ({ children }) => {
  const [context, setContext] = useState(initialState)

  const updateContext = state => {
    setContext({ ...context, ...state })
  }

  useEffect(() => {
    storage.setItem('context', context)
  }, [context])

  return (
    <AppContext.Provider value={{ context, updateContext }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => useContext(AppContext)

export { ContextProvider, useAppContext }
