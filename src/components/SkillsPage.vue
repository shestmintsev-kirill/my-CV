<template>
  <section class="section-outer section-skills">
    <div class="section-skills-title text-center">
      <span>{{ $t('SkillsPage.title') }}</span>
    </div>
    <div class="section-skills-text text-center">
      <span>{{ $t('SkillsPage.description') }}</span>
    </div>
    <div class="section-skills-content">
      <div
        v-for="(item, i) in skillsList"
        :key="i"
        class="section-skills-content-vue transform"
      >
        <div class="section-skills-content-vue-logo">
          <img :src="getImage(`${item.img}`)" alt="skill" />
        </div>
        <div class="section-skills-content-vue-description text-center">
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsPage',
  data: () => ({
    skillsList: [
      {
        title: 'HTML5',
        img: 'html5.png'
      },
      {
        title: 'CSS3',
        img: 'css-3.png'
      },
      {
        title: 'JavaScript',
        img: 'javascript.png'
      },
      {
        title: 'Vue.js',
        img: 'vue.png'
      },
      {
        title: 'React.js',
        img: 'react.png'
      },
      {
        title: 'TypeScript',
        img: 'ts.png'
      }
    ]
  }),
  methods: {
    getImage(img) {
      return require('@/assets/' + img);
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/style.scss';
.transform {
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
}

.text-center {
  text-align: center;
}

.section-skills {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 945px;
  margin-left: auto;
  margin-right: auto;

  &-title {
    font-weight: bold;
    font-size: 24px;
    letter-spacing: 2px;
    text-align: center;
  }

  &-text {
    font-weight: 500;
    text-align: center;
  }

  &-content {
    width: 100%;
    display: flex;
    justify-content: space-between;

    &-vue {
      img[alt='skill'] {
        width: 128px;
        height: 128px;
      }
    }
  }
  @media (max-width: $screen-sm-max) {
    &-content {
      img[alt='skill'] {
        width: 90px;
        height: 90px;
      }
    }
  }

  @media (max-width: $screen-xs-max) {
    padding-top: 40px;

    .transform {
      margin-bottom: 30px;
    }
    &-text {
      margin-top: 40px;
    }
    &-content {
      margin-top: 40px;
      flex-wrap: wrap;
      justify-content: space-evenly;

      img[alt='skill'] {
        width: 70px;
        height: 70px;
      }

      &-vue {
        width: 100px;

        &-logo {
          display: flex;
          justify-content: center;
          margin-bottom: 5px;
        }
      }
    }
  }

  @media (min-width: $screen-sm) {
    padding-top: 90px;

    &-text {
      margin-top: 70px;
    }

    &-content {
      margin-bottom: 100px;
      margin-top: 80px;

      img[alt='skill'] {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
