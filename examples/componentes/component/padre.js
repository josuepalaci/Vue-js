Vue.component('padre',{
    template: 
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente padre: {{numpadre}}</h2>
        <button class="btn btn-danger" @click="numpadre++">+</button>
        {{nameFather}}
        <hijo :numero="numpadre" @nameSon="nameFather = $event"></hijo>
    </div>
    `,
    data(){
        return {
            numpadre: 0,
            nameFather: ''
        }
    }
});