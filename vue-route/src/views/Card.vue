<template>
    <div class="mt-5">
        <div>
            <b-button variant="primary">Primary</b-button>
            <b-button variant="secondary">Secondary</b-button>
            <b-button variant="success">Success</b-button>
            <b-button variant="danger">Danger</b-button>
            <b-button variant="warning">Warning</b-button>
            <b-button variant="info">Info</b-button>
            <b-button variant="light">Light</b-button>
            <b-button variant="dark">Dark</b-button>
        </div>
        <b-row class="mt-5">
            <b-col cols="12" md="4">

                <b-card 
                img-src="https://picsum.photos/600/300/?image=25"
                img-top
                class="mb-2 bg-dark text-white"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet soluta nulla repudiandae perferendis nisi error nemo ipsa asperiores iste vel.
                </b-card>   

            </b-col>
            <b-col cols="12" md="4">

                <b-card 
                img-src="https://picsum.photos/600/300/?image=25"
                img-top
                class="mb-2 bg-dark text-white"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet soluta nulla repudiandae perferendis nisi error nemo ipsa asperiores iste vel.
                </b-card>   

            </b-col>
            <b-col cols="12" md="4">

                <b-card 
                img-src="https://picsum.photos/600/300/?image=25"
                img-top
                class="mb-2 bg-dark text-white"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet soluta nulla repudiandae perferendis nisi error nemo ipsa asperiores iste vel.
                </b-card>   

            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: 'card'
    }
</script>