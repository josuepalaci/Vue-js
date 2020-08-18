<template>
    <div class="mt-5">
        <h1>Formulario</h1>

    <form action="">
        <b-row>
            <b-col md="3">
                <b-form-input type="text" v-model="texto"
                    :state="comprobar"
                ></b-form-input>
                <small>solo 3 caracteres</small>
                <p>Texto: {{texto}}</p>
            </b-col>
            <b-col md="3">
                <b-form-select v-model="select" :options="frutas"></b-form-select>
                <p>Eligio: {{select}}</p>
            </b-col>
            <b-col md="3">
                <b-form-radio-group v-model="radio" :options="frutas"></b-form-radio-group>
                <p>Eligio: {{radio}}</p>
            </b-col>
            <b-col md="3">
                <b-form-checkbox-group v-model="check" :options="frutas"></b-form-checkbox-group>
                <p>Eligio: {{check}}</p>
            </b-col>
        </b-row>
    </form>
    <hr>

    </div>
</template>
<script>
export default {
    name: 'form',
    data(){
        return{
            texto: '',
            select: null,
            frutas: [
                {value: null, text: 'Seleccione una fruta'},
                {value: 'pera', text: 'fruta verde'},
                {value: 'uva', text: 'fruta morada'},
                {value: 'sandia', text: 'fruta roja y verde'},
                {value: 'manzana', text: 'fruta roja'}
            ],
            radio: null,
            check: []
        }
    },
    computed: {
        comprobar(){
            return this.texto.length > 2 ? true: false
        }
    },
}
</script>