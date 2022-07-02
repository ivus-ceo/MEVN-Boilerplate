<template>
  <ul class="users">
    <li class="user" v-for="user in users" :key="user.id">
      {{ user.name }}
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        users: []
      }
    },

    async created() {
      this.users = await this.$axios.get('/api/users').then((response) => {
                     return response.data
                   })
    }
  }
</script>