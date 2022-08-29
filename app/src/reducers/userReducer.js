export const userReducer = (state = {}, action) => {
  if (action.type === "@user/set-user") {
    return action.payload;
  }
  if (action.type === "@user/remove-user") {
    return null;
  }
};

export const setUser = (user) => {
  return {
    type: "@user/set-user",
    payload: user
  }
} 

export const removeUser = () => {
  return {
    type: "@user/remove-user",
  }
} 