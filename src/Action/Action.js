export const firstList = (name) => {
    return { type: "FIRST_LIST", payload: {albumName:name,listen:true} }
}

export const secondList = (name) => {
    return { type: "SECOND_LIST", payload: {albumName:name,listen:false} }
}

export const changeSong = (name) => {
    return { type: "CHANGE_SONG", payload: {songName:name} }
}

export const resetSong = () => {
    return { type: "RESET_SONG" }
}