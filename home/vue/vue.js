export default {
  data() {
    return {
      images: [
        { src: 'pics/kylapic1.jpg', alt: 'Kyla Picture 1' },
        { src: 'pics/kylapic2.jpg', alt: 'Kyla Picture 2' },
        { src: 'pics/kylapic3.jpg', alt: 'Kyla Picture 3' },
        { src: 'pics/kylapic4.jpg', alt: 'Kyla Picture 4' },
        { src: 'pics/kylapic5.jpg', alt: 'Kyla Picture 5' },
        { src: 'pics/kylapic6.png', alt: 'Kyla Picture 6' },
        { src: 'pics/kylapic7.jpg', alt: 'Kyla Picture 7' },
        { src: 'pics/kylapic8.jpg', alt: 'Kyla Picture 8' },
        { src: 'pics/kylapic9.JPG', alt: 'Kyla Picture 9' },
        { src: 'pics/kylapic10.JPG', alt: 'Kyla Picture 10' }
      ]
    };
  },
  methods: {
    getImageStyles() {
      return {
        width: this.getImageWidth(),
        height: 'auto',
        borderRadius: '15px',
        transition: 'transform 0.3s'
      };
    },
    getImageWidth() {
      if (window.innerWidth < 480) {
        return 'calc(100% / 2 - 10px)'; // 2 images per row on mobile
      } else if (window.innerWidth < 768) {
        return 'calc(100% / 3 - 10px)'; // 3 images per row on tablet
      } else {
        return 'calc(100% / 5 - 10px)'; // 5 images per row on larger screens
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateImageStyles);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateImageStyles);
  },
  methods: {
    updateImageStyles() {
      this.$forceUpdate();  // Force re-render on window resize
    }
  }
};

const app = Vue.createApp({
  data() {
    return {
      itemName: null,
      itemNumber: null,
      shoppingList: [
        { name: 'Tomatoes', number: 5 }
      ]
    }
  }
})
app.mount('#app')