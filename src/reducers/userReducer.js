const user = (state = {},  action) => {
  switch (action.type) {
  case 'LOG_IN':
    return action.userObject;
  case 'CREATE_USER':
    return action.userObject;
  default:
    return state;
  }
};

export default user;