<template>
  <div class="users">
    <template v-if="users.length">
      <user-card
        v-for="user of users"
        :key="user.id"
        :user="user"
        @click="selectUser(user)"
      />
    </template>
    <span v-else class="users_empty">{{ userEmptyText }}</span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import UserCard from "@/components/UserCard.vue";

const store = useStore();

const users = computed(() => store.getters.getUsers);
const filter = computed(() => store.getters.getFilter);

const userEmptyText = computed(() => {
  return !filter.value.length ? "начните поиск" : "ничего не найдено";
});

const selectUser = (user) => {
  store.dispatch("selectUser", user);
};

</script>

<style lang="scss" scoped>
.users {
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: 324px;
  overflow-y: auto;
  margin-top: 18px;
}
</style>
