const app3 = Vue.createApp({
    data() {
      return {
        Suggestions:null,
      }
    },
    methods: {
      addSuggest(){
        let item = {
          name: this.itemName,
        }
        this.shoppingList.push(item)
        this.itemName = null
        this.itemNumber = null  
        this.itemImportant = false
      }
    }
  })
 app3.mount('#app3')