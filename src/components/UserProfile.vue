<template>
  <div v-if="user" class="profile">
    <div class="profile__wrapper">
      <img :src="imageUrl" alt="Фото пользователя" />
      <div class="profile__info">
        <h2>{{ user?.name }}</h2>
        <h3>
          email: <span>{{ user?.email }}</span>
        </h3>
        <h3>
          phone: <span>{{ user?.phone }}</span>
        </h3>
        <h2 class="about">О себе:</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
  <div v-else class="profile_empty">
    Выберите сотрудника, чтобы посмотреть его профиль
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const user = computed(() => store.getters.getSelectedUser);

const imageUrl = computed(() => {
  const baseUrl = "../assets/images/";
  const defaultImg = "user-photo_default.png";
  return user.value?.photo
    ? user.value.photo
    : new URL(`${baseUrl}${defaultImg}`, import.meta.url).href;
});
</script>

<style lang="scss" scoped>
.profile {
  padding: 30px 30px 30px 21px;

  &_empty {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__wrapper {
    display: flex;
    gap: 60px;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  h2,
  h3 {
    font-weight: 600;
    line-height: 140%;
    color: #000;

    span {
      margin-left: 5px;
      font-size: 14px;
      font-weight: 400;
      color: $text-second;
    }
  }

  h2 {
    font-size: 16px;
  }

  h3 {
    margin-top: 10px;
    font-size: 14px;
  }

  .about {
    margin-top: 20px;
  }

  p {
    margin-top: 25px;
  }
}
</style>
