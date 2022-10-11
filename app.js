let app = Vue.createApp({
    data(){
        return{
            title: "My name Is Rifat",
            age: 24
        }
    },
    methods:{
        changeTitle(name){
            this.title = name;
        }
    }
})
app.mount('#app')