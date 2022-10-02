import {defineStore} from "pinia";
import {State} from "~/models/state";
import {useRuntimeConfig} from "#app";

export const useProductStore = defineStore("productStore", {
    state: (): State => ({
        config: useRuntimeConfig(),
        productPerPage: 12,
        products: [],
        sidebar: false
    }),
    getters: {
        getSidebar: (state) => state.sidebar,
        getProductLength: (state) => state.products.length,
        getPageCount(state): number {
            return Math.ceil(this.getProductLength / state.productPerPage)
        },
        async getToken(): Promise<string> {
            const url = this.config.apiUrl + "/auth/login"
            let token;
            await $fetch(url, {
                method: "POST",
                body: {
                    "userName": this.config.userName,
                    "password": this.config.passWord
                },
                headers: {"GUID": `${this.config.guid}`},
            }).then((data) => {
                token = data["data"]["token"]
            }).catch((err) => {
                console.error(err)
            })
            return token
        },
    },
    actions: {
        sideBarAction() {
            this.sidebar = !this.sidebar
        },
        getProducts(page) {
            const downLimit = parseInt(page) - this.productPerPage
            return page <= this.getProductLength ? this.products.slice(downLimit, parseInt(page)) :
                this.products.slice(downLimit, this.getProductLength - 1)
        },
        async fetchProducts(token) {
            const url = this.config.apiUrl + "/product/listproducts/0"
            await $fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    "GUID": `${this.config.guid}`
                }
            }).then((data) => {
                for (const property in data["data"]) {
                    const obj = data["data"][property]
                    this.products.push({
                        key: obj.key,
                        id: obj.id,
                        name: obj.name,
                        price: obj.price,
                        currency: obj.currency,
                        stock: obj.stock,
                        discountRate: obj.discountRate,
                        stockCode: obj.stockCode,
                        stockType: obj.stockType,
                    })
                }
            })
        }
    }
})