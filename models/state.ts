import {Products} from "~/models/products";
import {RuntimeConfig} from "@nuxt/schema";

export interface State {
    config        : RuntimeConfig,
    products      : Products[]
    productPerPage: number
    sidebar       : boolean
}