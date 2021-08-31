import React, { useMemo, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const DrawerContext = React.createContext({
  closeDrawer: value => value,
  isOpen: { menu: false, search: false },
  openDrawer: event => event,
  openDrawerWithSearch: event => event,
})

const statuses = {
  closed: { menu: false, search: false },
  open: { menu: true, search: false },
  openSearch: { menu: true, search: true },
}

function DrawerContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(statuses.closed)
  const [openSubNav, setOpenSubNav] = useState(null)

  const contextValue = useMemo(() => {
    return {
      closeDrawer: event => {
        event.preventDefault()
        setIsOpen(statuses.closed)
      },
      openDrawer: event => {
        event.preventDefault()
        setIsOpen(statuses.open)
      },
      openDrawerWithSearch: event => {
        event.preventDefault()
        setIsOpen(statuses.openSearch)
      },
      isOpen,
      openSubNav,
      setOpenSubNav,
    }
  }, [isOpen, setIsOpen, openSubNav])

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  )
}

DrawerContextProvider.propTypes = {
  children: PropTypes.node,
}

function useDrawerContext() {
  return useContext(DrawerContext)
}

export { DrawerContextProvider }

export default useDrawerContext
