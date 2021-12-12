const DESKTOP_BP = 1280;
const TABLET_BP = 768;

export const DetectDeviceWidth = {
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },
  computed: {
    isDeviceMobile() {
      return this.windowWidth < TABLET_BP;
    },
    isDeviceTablet() {
      return this.windowWidth >= TABLET_BP && this.windowWidth < DESKTOP_BP;
    },
    isDeviceDesktop() {
      return this.windowWidth >= DESKTOP_BP;
    }
  },
  methods: {
    setWidth() {
      this.windowWidth = window.innerWidth;
    }
  },
  mounted() {
    window.addEventListener('resize', this.setWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setWidth);
  }
};
