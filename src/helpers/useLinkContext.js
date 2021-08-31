import React, { useContext } from 'react'
import PropTypes from 'prop-types'

export const LinkContext = React.createContext()

export function LinkContextProvider({ children, LinkWrapper }) {
  return (
    <LinkContext.Provider value={LinkWrapper}>{children}</LinkContext.Provider>
  )
}

export default function useLinkContext() {
  return useContext(LinkContext)
}

LinkContextProvider.propTypes = {
  children: PropTypes.node,
  LinkWrapper: PropTypes.func,
}
