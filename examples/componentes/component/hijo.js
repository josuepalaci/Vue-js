Vue.component('hijo',{
    template: 
    `
    <div class="p-5 bg-info text-white">
        <h4>Componente hijo:{{numero}}</h4>
        <button class="btn btn-danger" @click="numero++">+</button>
        <h4>Nombre: {{name}}</h4>
    </div>
    `,
    props: ['numero'],
    data(){
        return {
            name: 'josue'
        }
    },
    mounted(){
        this.$emit('nameSon', this.name);
    }
});