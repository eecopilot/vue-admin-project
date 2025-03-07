import { defineStore } from 'pinia'

const useLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false, //用户控制菜单折叠还是收起控制
      reflash: false, //仓库这个属性用于控制刷新效果
    }
  },
})

export default useLayOutSettingStore
