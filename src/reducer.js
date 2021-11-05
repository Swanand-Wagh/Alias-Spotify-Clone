export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQB6WKun8B-qqylng9SXw51a9PqBQoaOtSIGFH90_KD-7gR2oVvwN7rhl8JV4Ll1jdBJlL3ig1T-D1S1DLobfqJ-K6Tz_8qxgf7L9KXaLBr_T5TEeJAJlRN9QbJrBZ5mZ1LUvQmTre9N2CUXYnQo621xh-QyO5ZaPFtUYDyfiWuj2O7q",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
