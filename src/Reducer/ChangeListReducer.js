const initialState = {
  listen: null,
  albumName: "",
  isToggle: false,
  songName:''
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  console.log("TCL: reducer -> newState", newState);

  switch (action.type) {
    case "FIRST_LIST":
      return {
        ...state,
        listen: action.payload.listen,
        albumName: action.payload.albumName,
        isToggle: true
      };

    case "SECOND_LIST":
      return {
        ...state,
        listen: action.payload.listen,
        albumName: action.payload.albumName,
        isToggle: true
      };

      case "CHANGE_SONG" :
        return {
          ...state,
          songName: action.payload.songName,
        }
        case "RESET_SONG" :
        return {
          ...state,
          songName: '',
        }

    default:
      return newState;
  }
};

export default reducer;
