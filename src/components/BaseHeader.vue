<template>
  <header>
    <div class="header-wrapper">
      <div class="header-wrapper__logo">Жилфонд</div>
      <div class="header-wrapper__user">Пользователь</div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  max-width: 1366px;
  margin: 0 auto;
  padding-top: 50px;
  line-height: normal;

  &__logo {
    margin-top: -4px;
    color: #e31f24;
    font-size: 32px;
    font-weight: 700;
  }

  &__user {
    color: $text-acent;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
