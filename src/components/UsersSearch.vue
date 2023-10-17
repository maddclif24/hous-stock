<template>
  <label>
    Поиск сотрудников
    <input
      v-model="searchQuery"
      class="input-search"
      type="text"
      placeholder="Введите Id или имя"
    />
  </label>
  <span v-if="!isValidQuery" style="color: red"
    >Используйте только id или имя</span
  >
</template>

<script setup>
import { useStore } from "vuex";
import { ref, watch, computed } from "vue";
import { debounce } from "lodash";
const store = useStore();
const searchQuery = ref("");

const searchUsers = () => {
  store.dispatch("createFilter", searchQuery);
  store.dispatch("fetchUsers");
};

const debouncedSearch = debounce(searchUsers, 500);

const isValidQuery = computed(() => {
  const params = searchQuery.value
    .split(",")
    .filter((param) => param.trim().length);
  const isAllParamsUsername = params.every((param) => isNaN(Number(param)));
  const isAllParamsId = params.every((param) => !isNaN(Number(param)));
  return isAllParamsId || isAllParamsUsername;
});

watch(searchQuery, () => {
  store.dispatch("selectUser", null);
  store.dispatch("resetUsers");

  if (!isValidQuery.value) {
    return;
  }

  debouncedSearch();
});
</script>

<style lang="scss" scoped>
label {
  color: $text-acent;
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
}

.input-search {
  display: flex;
  align-items: center;
  width: 240px;
  margin-top: 14px;
  padding: 16px 24px;
  border-radius: 8px;
  border: 1.5px solid #e9ecef;
  background: $background-accent;
  font-weight: 400;
}
</style>
