import { configureStore } from "@reduxjs/toolkit";
import trainer from './slices/user.slice'


export default configureStore({
    reducer: {
        trainer
    }
})