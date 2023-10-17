<template>
  <div
    class="user-card"
    :class="{ 'user-card_active': user?.id === selectedUser?.id }"
  >
    <div class="user-card__photo">
      <img :src="imageUrl" alt="Фото пользователя" />
    </div>
    <div class="user-card__info">
      <span class="name">{{ user?.username }}</span>
      <span class="email">{{ user?.email }}</span>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const props = defineProps({
  user: {
    type: Object,
  },
});

const store = useStore();

const selectedUser = computed(() => store.getters.getSelectedUser);

const imageUrl = computed(() => {
  const baseUrl = "../assets/images/";
  const defaultImg = "user-photo_default.png";
  return props.user?.photo
    ? props.user.photo
    : new URL(`${baseUrl}${defaultImg}`, import.meta.url).href;
});
</script>

<style lang="scss" scoped>
.user-card {
  display: flex;
  width: 240px;
  height: 70px;
  border-radius: 10px;
  background: $background-accent;
  box-shadow: $base-shadow;
  font-size: 14px;
  line-height: normal;

  &:hover {
    scale: 1.01;
    cursor: pointer;
  }

  &_active {
    background: $background-second;
  }

  &__photo {
    flex-shrink: 0;
    width: 70px;
    height: 70px;
    border-right: 1px solid $background-second;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px 0 15px;
    gap: 2px;
    overflow: hidden;
    .name {
      font-weight: 600;
      color: $text-acent;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .email {
      font-weight: 400;
      color: $text-second;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
