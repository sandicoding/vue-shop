<template>
    <div class="login">     
        <b-modal id="modal-1" title="Login"  no-stacking>
            <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a  href="#" class="nav-link active" id="pills-home-tab" v-b-modal.modal-1 role="tab">Login</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" id="pills-register-tab" v-b-modal.modal_register>Signup</a>
                </li>
            </ul>
            <h5 class="text-center">Login Please</h5>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" @keyup.enter="login" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>

                <div class="form-group">
                <button class="btn btn-primary" @click="login">Login</button>
            </div>
        </b-modal>

        <b-modal id="modal_register" title="Register"  no-stacking>
            <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a  href="#" class="nav-link active" id="pills-home-tab" v-b-modal.modal-1 role="tab">Login</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" id="pills-register-tab" v-b-modal.modal_register>Signup</a>
                </li>              
            </ul>
        </b-modal>
    </div>
</template>

<script>
//import {fb,db} from '../firebase'

export default {
    name : 'Login',
    data () {
        return {
            name : null,
            email : null,
            password : null
        }
    },
    methods : {
        register() {

        }
    }

}
</script>