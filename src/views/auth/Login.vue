<template>
  <div class="signin">
    <div class="container bg-white  rounded">
      <div class="row">
        <div class="col-lg-6 p-5">
          <div class="signin-img">
            <img src="@/assets/logo.png" width="80%" alt="logo" class="img-fluid" />
          </div>
        </div>

        <div class="col-lg-6 p-5 form-login text-white">
          <form class="login-form " @submit.prevent="login()">
            <div class="form-group">
              <label for="username">Username</label>
              <input v-model="username" type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="username" required />
              <small v-if="error.username" class="form-text text-danger">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="mail@email.com" required />
              <small v-if="error.email" class="form-text text-danger">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input v-model="password" type="password" class="form-control" id="password" placeholder="Min.8 Character" required />
              <small v-if="error.password" class="form-text text-danger">We'll never share your email with anyone else.</small>
            </div>

            <button class="btn signup-btn">Sign In</button>
          </form>
          <p class="text-muted mt-2">Belum memiliki Akun? <router-link class="signin-link" to="/signup">Sign Up</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      error: {},
    };
  },
  //   mounted() {
  //     this.login();
  //   },
  methods: {
    login() {
      this.$router.push("/");
      console.log();
    },
  },
};
</script>

<style scoped>
.signin {
  /* background-color: #20397a; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-login {
  background-color: #20397a;
}

.signin-img {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sign label {
  color: #0c2e85;
}
.signin-link {
  color: #ffca00;
}
.signup-btn {
  background-color: #ffca00;
  color: white;
}
.signup-btn:hover {
  background-color: #ffca00;
  color: white;
}
</style>
