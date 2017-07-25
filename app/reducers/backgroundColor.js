const backgroundColor = (state = 'white', action) => {
  switch (action.type) {
    case 'SET_BACKGROUND_COLOR':
      return action.color
    default:
      return state
  }
}

export default backgroundColor;
