<template>
  <div
    class="product-gallery"
    role="region"
    :aria-label="`${title}商品照片`"
    :aria-roledescription="hasMultipleImages ? '輪播' : undefined"
    :tabindex="hasMultipleImages ? 0 : undefined"
    @keydown.left.prevent="previous"
    @keydown.right.prevent="next"
  >
    <q-carousel
      v-if="hasMultipleImages"
      ref="carousel"
      v-model="activeImage"
      class="gallery-carousel"
      height="100%"
      swipeable
      animated
      infinite
      navigation
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide
        v-for="(id, index) in images"
        :key="id"
        :name="index"
        class="gallery-slide"
        role="group"
        :aria-label="`${index + 1} / ${images.length}`"
      >
        <img
          :src="`/product-${id}.png`"
          :alt="`${title}，第 ${index + 1} 張照片`"
          draggable="false"
        >
      </q-carousel-slide>

      <template #navigation-icon="{ index, active, onClick }">
        <button
          type="button"
          class="gallery-dot"
          :class="{ active }"
          :aria-label="`查看第 ${index + 1} 張照片`"
          :aria-current="active ? 'true' : undefined"
          @click="onClick"
        />
      </template>

      <template #control>
        <div class="gallery-arrows">
          <button type="button" class="gallery-arrow" aria-label="上一張照片" @click="previous">
            <q-icon name="chevron_left" size="24px" />
          </button>
          <button type="button" class="gallery-arrow" aria-label="下一張照片" @click="next">
            <q-icon name="chevron_right" size="24px" />
          </button>
        </div>
      </template>
    </q-carousel>

    <img v-else :src="`/product-${images[0]}.png`" :alt="title" loading="lazy">
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  imageId: { type: String, required: true },
  imageIds: { type: Array, default: undefined },
  title: { type: String, required: true }
})

const images = computed(() => props.imageIds?.length ? props.imageIds : [props.imageId])
const hasMultipleImages = computed(() => images.value.length > 1)
const carousel = ref(null)
const activeImage = ref(0)

watch(images, () => {
  activeImage.value = 0
})

function previous() {
  carousel.value?.previous()
}

function next() {
  carousel.value?.next()
}
</script>

<style scoped>
.product-gallery {
  position: relative;
  width: 100%;
  height: 100%;
}

.product-gallery:focus-visible {
  outline: 2px solid #1d1d1f;
  outline-offset: -4px;
}

.gallery-carousel {
  background: transparent;
}

.gallery-slide {
  padding: 0;
}

.product-gallery img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
}

.gallery-arrows {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  pointer-events: none;
}

.gallery-arrow {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 1px solid rgba(0, 0, 0, .06);
  border-radius: 50%;
  background: rgba(255, 255, 255, .9);
  color: #1d1d1f;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
  cursor: pointer;
  pointer-events: auto;
}

.gallery-arrow:hover {
  background: #fff;
}

.gallery-dot {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
}

.gallery-dot::before {
  content: '';
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #86868b;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, .75);
}

.gallery-dot.active::before {
  background: #1d1d1f;
}

.gallery-arrow:focus-visible,
.gallery-dot:focus-visible {
  outline: 2px solid #1d1d1f;
  outline-offset: 2px;
}
</style>
