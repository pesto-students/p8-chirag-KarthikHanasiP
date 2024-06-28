import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter/counterSlice";

export default configureStore({
    reducer: {
        counter
    }
})