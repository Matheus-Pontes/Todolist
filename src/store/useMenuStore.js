import { defineStore } from "pinia";

export const menuStore = defineStore('menu', {
    state: () => ({
        isOpen: true
    }),
    actions: {
        toogleMenu() {
            this.isOpen = !this.isOpen
        }
    }
})