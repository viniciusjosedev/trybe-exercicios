import { legacy_createStore as createStore } from "redux";
import exec from "./script";

exec()

const state =  createStore().getState();
console.log(state)

