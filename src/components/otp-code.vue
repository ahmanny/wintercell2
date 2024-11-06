<template>
  <v-card flat class="mx-8">
    <div class="px-2">
      <h1 class="text-subtitle-1 font-weight-bold pb-5">Wintercell</h1>
      <h1 class="text-h6 font-weight-medium pl-0">{{ greeting }}</h1>
      <p class="text-caption pb-6">
        Enter the code sent to
        <span class="font-weight-medium">{{ email }}</span>
      </p>
      <p class="text-subtitle-2 pb-0">Code</p>
    </div>
    <v-sheet>
      <v-otp-input
        class=""
        :base-color="invalid"
        v-model="otpCode"
      ></v-otp-input>
      <v-btn class="mx-3" width="90%" flat color="blue" @click="verifyCode"
        >{{ signinBtn }}</v-btn
      >
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  props: ["email", "Fullname", "greeting", "signinBtn"],
  data() {
    return {
      otpCode: "",
      invalid: "grey",
    };
  },
  methods: {
    verifyCode() {
      // get the otp sent to the email.
      // verify otp code typed is correct and send a welcome email.
    } 
  },
};
</script>

<style></style>
