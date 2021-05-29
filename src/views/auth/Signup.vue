<template>
  <div class="signup">
    <div class="container bg-white  rounded">
      <div class="row">
        <div class="col-lg-6 p-5">
          <div class="signup-img">
            <img src="@/assets/logo.png" width="80%" alt="logo" class="img-fluid" />
          </div>
        </div>

        <div class="col-lg-6 p-5 text-white form-login">
          <form class="login-form" @submit.prevent="register()">
            <div class="form-group">
              <label for="name">Name</label>
              <input v-model="name" type="text" class="form-control" id="name" placeholder="Name" required />
              <small v-if="error.name" class="form-text text-danger">* {{ error.name }}</small>
            </div>
            <!-- <div class="form-group">
              <label for="username">Username</label>
              <input v-model="username" type="text" class="form-control" id="username" placeholder="Username" required />
              <small v-if="error.username" class="form-text text-danger">* {{ error.username }}</small>
            </div> -->
            <div class="form-group">
              <label for="email">Email</label>
              <input v-model="email" type="email" class="form-control" id="email" placeholder="mail@email.com" required />
              <small v-if="error.mail" class="form-text text-danger">* {{ error.mail }}</small>
            </div>
            <div class="form-group">
              <label for="telepon">Nomor Telepon</label>
              <input v-model="telepon" type="number" class="form-control" id="telepon" placeholder="08xxxxxxxxx" required />
              <small v-if="error.telepon" class="form-text text-danger">* {{ error.telepon }}</small>
            </div>
            <div class="form-group">
              <label for="addres">Alamat Sekarang</label>
              <b-textarea v-model="addres" type="text" class="form-control" id="addres" placeholder="Jln. . ." required></b-textarea>
              <small v-if="error.addres" class="form-text text-danger">* {{ error.addres }}</small>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input v-model="password" type="password" class="form-control" id="password" placeholder="Min.8 Character" required />
              <small v-if="error.password" class="form-text text-danger">{{ error.password }}</small>
            </div>
            <!-- <div class="form-group form-check">
              <input v-model="checbox" type="checkbox" class="form-check-input" id="exampleCheck1" required />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
              <small v-if="error.checbox" class="form-text text-danger">{{ error.checbox }}</small>
            </div> -->
            <button class="btn signup-btn">Sign Up</button>
          </form>
          <p class="text-muted mt-2">Sudah memiliki Akun? <router-link class="signin-link" to="/login">Sign In</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Signup",
  data() {
    return {
      name: "",
      email: "",
      username: "",
      password: "",
      checbox: "",
      telepon: "",
      addres: "",
      error: {},
    };
  },
  methods: {
    ...mapActions(["signup"]),
    register() {
      const data = {
        nama: this.name,
        email: this.email,
        password: this.password,
        no_telp: this.telepon,
        alamat: this.addres,
      };
      this.signup(data);
    },
  },
};
</script>

<style scoped>
.signup {
  /* background-color: #08205c; */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-login {
  background-color: #20397a;
}

/* .form-login label{} */
.signup-img {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signup label {
  /* color: #0c2e85; */
  color: white;
}
.signin-link {
  color: #ffca00;
}
.signup-btn {
  background-color: #ffca00;
  color: white;
}
.signup-btn:hover {
  background-color: #ddb101;
  color: white;
}
</style>
