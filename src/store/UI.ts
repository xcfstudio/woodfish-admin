import {defineStore} from 'pinia'

const useUIStore = defineStore('UI', {
    state: () => {
        return {
            isLeftMenuCollapse: false
        }
    }
})

export {
    useUIStore
}