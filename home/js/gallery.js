const Gallery = Vue.createApp({
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
  template: `
    <div class="gallery-images">
      <img v-for="image in images" :key="image.alt" :src="image.src" :alt="image.alt" class="gallery-image">
    </div>
  `
});

Gallery.mount('#app');