<template lang="html">
  <div ref="bgani" class="BackgroundAnimation">
    <div
      v-for="index in total"
      :key="index"
      ref="BackgroundAnimation_icon"
      class="BackgroundAnimation_icon"
      :class="'BackgroundAnimation_icon--' + (index % 8)"
    ></div>
  </div>
</template>

<script lang="js">
  import { TweenLite } from 'gsap';
  import { TweenMax } from 'gsap';

  export default  {
    name: 'BackgroundAnimation',
    props: ["total"],
    mounted () {
      const container = this.$refs.bgani, w = container.clientWidth, h = container.clientHeight;
      const icons = this.$refs.BackgroundAnimation_icon;

      for (var i = 0; i < this.total; i++) {
          var icon = icons[i];
          TweenLite.set(icon, { x: this.R(0, w), y: this.R(0, h), z: this.R(-200, 200) }); // place icon
          this.iconRotate(icon, TweenMax);
          this.iconSway(icon, TweenMax);
      }
    },
    data () {
      return {
      }
    },
    methods: {
      R (min, max) { return min + (Math.floor(10 * Math.random() * (max - min)) / 10) },
      S () { return Math.random() < 0.5 ? -1 : 1 },
      iconRotate (icon, tween_max) {
        // make icon rotate
        tween_max.to(icon, this.R(2, 5), {
            rotationX: 180 * this.S(),
            rotationY: 180 * this.S(),
            repeat: 1,
            yoyo: true,
            ease: "easeInOut",
            onComplete: () => { this.iconRotate(icon, tween_max); }
        });
      },
      iconSway (icon, tween_max) {
        // make icon sway
        tween_max.to(icon, this.R(2, 8), {
            x: '+=' + this.R(-100, 100),
            y: '+=' + this.R(-100, 100),
            rotationZ: this.R(0, 180),
            repeat: 0,
            yoyo: false,
            ease: "easeInOut",
            onComplete: () => { this.iconSway(icon, tween_max); }
        });
      },
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.BackgroundAnimation {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;

  &_icon {
    position: absolute;
    pointer-events: none;
    z-index: -1;
    width: 35px;
    height: 35px;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.5;

    &--1 {
      background-image: url("../../assets/elements/element01.svg");
    }
    &--2 {
      background-image: url("../../assets/elements/element02.svg");
    }
    &--3 {
      background-image: url("../../assets/elements/element03.svg");
    }
    &--4 {
      background-image: url("../../assets/elements/element04.svg");
    }
    &--5 {
      background-image: url("../../assets/elements/element05.svg");
    }
    &--6 {
      background-image: url("../../assets/elements/element06.svg");
    }
    &--7 {
      background-image: url("../../assets/elements/element07.svg");
    }
    &--0 {
      background-image: url("../../assets/elements/element08.svg");
    }
  }
}
</style>
