<template>
  <div class="container">
    <div class="left-side">
      <users-search />
      <base-loader v-if="isLoading" class="loader" />
      <template v-else>
        <div class="label">Результат</div>
        <users-list />
      </template>
    </div>
    <user-profile class="right-side" />
  </div>
</template>

<script setup>
import UsersSearch from "@/components/UsersSearch.vue";
import UsersList from "@/components/UsersList.vue";
import UserProfile from "@/components/UserProfile.vue";
import BaseLoader from "@/components/BaseLoader.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const isLoading = computed(() => store.getters.getPendingStatus);
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 575px;
  max-width: 1366px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  background: #fdfdfd;
  box-shadow: $base-shadow;
  font-size: 14px;
  line-height: normal;
  color: $text-second;
}

.left-side {
  width: 341px;
  padding: 27px 0 27px 20px;
  border-right: 1px solid $background-second;
  overflow: hidden;
}

.right-side {
  width: 100%;
}

.loader {
  margin: 20px 0 0 70px;
}

.label {
  margin-top: 29px;
  color: $text-acent;
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
}
</style>
