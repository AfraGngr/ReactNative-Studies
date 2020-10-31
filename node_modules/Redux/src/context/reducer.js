export function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_FAVORITE":
            const newList = [...state.favoriteList];
            if (newList.indexOf(action.payload.selectedRestaurant) > -1){
                newList
            }else{
                newList.push(action.payload.selectedRestaurant);
            }
            state.favoriteList = newList;
            return { ...state }

            // return {
            //     ...state,
            //     favoriteList: [...state.favoriteList, action.payload.selectedRestaurant]
            // }
        case "REMOVE_FROM_FAVORİTE":
            const updateList = [...state.favoriteList]
            const index = updateList.indexOf(action.payload.selectedRestaurant);
            if (index > -1) {
                updateList.splice(index, 1)};
            state.favoriteList = updateList;
            return {...state}
        default:
            return state;
    }
}