<template>
    <v-layout justify-center mt-4>
        <v-flex xs12 sm8 xl4>
            <v-card>
                <v-card-text class="display-1 text-uppercase primary white--text text-xs-center" :class="registro ? 'success' : 'primary'">
                    <span v-if="!registro">Ingreso</span>
                     <span v-if="registro">Registro</span>
                </v-card-text>
                <v-card-text>
                    <v-btn block color="error" @click="google">
                        <v-icon Left dark>fab fa-google</v-icon>
                        Google
                    </v-btn>
                    <v-btn block color="info" @click="facebook">
                        <v-icon Left dark>fab fa-facebook-f</v-icon>
                        Facebook
                    </v-btn>
                </v-card-text>
                 <v-card-text>
                    <v-btn block @click="registro = true" v-if="!registro">¿No tienes una cuenta registrate?</v-btn>
                    <v-btn block @click="registro = false" v-if="registro">¿Ya tienes una cuenta, ingresa aqui</v-btn>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { firebase , auth, db } from "@/firebase";
import { mapMutations, mapActions } from 'vuex';
import router from '@/router'

export default {
    data (){
        return{
            registro: false
        }
    },
    methods:{
        ...mapMutations(['nuevoUsuario']),
        ...mapActions(['setUsuario']),
        google(){
            const provider = new firebase.auth.GoogleAuthProvider();
            this.ingresar(provider);
        },
        facebook(){
            const provider = new firebase.auth.FacebookAuthProvider();
            this.ingresar(provider);
        },
        async ingresar( provider){
            firebase.auth().languageCode = 'es';
            try {
                const result = await firebase.auth().signInWithPopup(provider);
                const user = result.user;
                this.setUsuario(user);
                router.push({name: 'Home'})
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>