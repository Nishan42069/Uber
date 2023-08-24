import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInfoarmation: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducer: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        settravelTimeInfromation: (state,action) => {
            state.travelTieInformation = action.payload;
        },
    },
});


export const { setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;

//Selectors

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selecctTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;

