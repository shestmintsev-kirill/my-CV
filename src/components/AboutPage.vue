<template>
  <section class="section-outer section-about">
    <div class="section-about-title">
      <span>{{ $t('AboutPage.title') }}</span>
    </div>
    <div class="section-about-description">
      <i18n path="AboutPage.about">
        <br slot="break" />
      </i18n>
      <span>
        {{ $t('AboutPage.aboutNext') }}
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage'
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/style.scss';

.section-about {
  background: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-title {
    margin-top: 120px;
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 20px;
    letter-spacing: 3px;
  }

  &-description {
    margin-top: 20px;
    margin-bottom: 100px;
    text-align: center;
    font-weight: 500;

    &-link {
      cursor: pointer;
      color: #252525;
    }
  }
  @media (max-width: $screen-xs-max) {
    &-description {
      width: 90%;
    }
  }

  @media (min-width: $screen-sm) {
    &-description {
      width: 35%;
    }
  }
}
</style>
