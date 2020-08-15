const app = new Vue({
    el: '#app',
    data: {
        titulo: 'lista de Frutas',
        frutas: [
            {nombre:"manzana", cantidad:10 },
            {nombre:"pera", cantidad:5 },
            {nombre:"uva", cantidad:0 }
        ],
        nuevaFruta: '',
        total:0
    },
    methods: {
        agregarFruta(){
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: 2
            });
            this.nuevaFruta = '';
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
});


