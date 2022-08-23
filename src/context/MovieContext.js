import React from 'react'

const MovieContext = React.createContext({
  username: '',
  password: '',
  closeNavBar: false,
  triggerCloseNavBar: () => {},
  triggerChangeUsername: () => {},
  triggerChangePassword: () => {},
  triggerLogout: () => {},
  searchInput: '',
  triggerSearchChange: () => {},
})

export default MovieContext
