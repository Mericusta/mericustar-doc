<script setup lang="ts">

import { testRequest, test_api_6666, test_api_7777 } from '@/api/api';

let value = '1';

function sendRequest() {
  let request = new testRequest();
  request.value = value;
  console.log(request);
  test_api_6666(request).then(res => {
    console.log('test_api_6666 done with res', res);
  });
  test_api_7777(request).then(res => {
    console.log('test_api_7777 done with res', res);
  });
}

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <br>
    <button @click="sendRequest">Send Request</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
