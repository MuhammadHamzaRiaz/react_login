import { createSlice } from "@reduxjs/toolkit";
import doctor_image from '../assets/images/doctor_image.png'
import patient_image from '../assets/images/patient_image.png'


const selectionSlice = createSlice({
    name: "selection",
    initialState: [
        {id:1 ,
        title: "Doctor",
        image: doctor_image,
        selected: true},
        {id:2 ,
        title: "Patient",
        image: patient_image,
        selected: false}
    ],
    reducers: {
        select: (state, action) => {
            state.map(item => {
                if(item.id === action.payload){
                    item.selected = true
                }else{
                    item.selected = false
                }
                return item;
            })
        }
    }
});

export const { select } = selectionSlice.actions;
export default selectionSlice.reducer;