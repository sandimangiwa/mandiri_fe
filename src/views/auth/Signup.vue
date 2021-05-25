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
          <form class="login-form" @submit.prevent="signup()">
            <div class="form-group">
              <label for="name">Name</label>
              <input v-model="name" type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Name" required />
              <small v-if="error.name" class="form-text text-danger">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="username">Username</label>
              <input v-model="username" type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Username" required />
              <small v-if="error.username" class="form-text text-danger">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="mail@email.com" required />
              <small v-if="error.mail" class="form-text text-danger">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input v-model="password" type="password" class="form-control" id="password" placeholder="Min.8 Character" required />
              <small v-if="error.password" class="form-text text-danger">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group form-check">
              <input v-model="checbox" type="checkbox" class="form-check-input" id="exampleCheck1" required />
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button class="btn signup-btn">Sign Up</button>
          </form>
          <p class="text-muted mt-2">Sudah memiliki Akun? <router-link class="signin-link" to="/login">Sign In</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      name: "",
      email: "",
      username: "",
      password: "",
      checbox: "",
      error: {},
    };
  },
  methods: {
    signup() {
      this.$router.push("/Login");
      console.log(this.name, this.username, this.password);
    },
  },
};
</script>

<style scoped>
.signup {
  /* background-color: #08205c; */
  height: 100vh;
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
