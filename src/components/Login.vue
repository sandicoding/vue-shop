<template>
    <div class="login">     
        <b-modal id="modal-1" title="Login"  no-stacking hide-footer>
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
                <input type="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <small class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>

                <div class="form-group">
                <button class="btn btn-primary">Login</button>
            </div>
        </b-modal>

        <b-modal id="modal_register" title="Register"  no-stacking hide-footer>
            <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a  href="#" class="nav-link " id="pills-home-tab" v-b-modal.modal-1 role="tab">Login</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link active" id="pills-register-tab" v-b-modal.modal_register>Signup</a>
                </li>              
            </ul>
            <h5 class="text-center">Create New Account</h5>
                             
            <div class="form-group">
                <label for="name">Your name</label>
                <input type="text" v-model="name"  class="form-control" id="name" placeholder="Your nice name">
            </div>

            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" v-model="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
            </div>

            <div class="form-group">
                <button class="btn btn-primary" @click="register">Signup</button>
            </div>
        </b-modal>
    </div>
</template>

<script>
import {fb} from '../firebase'

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
            
            fb.auth().createUserWithEmailAndPassword(this.email, this.password)
                // eslint-disable-next-line no-unused-vars
                .then((user) => {
                    this.$router.replace({path : 'admin'})
                })
                .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
                });
        }
    }

}
</script>