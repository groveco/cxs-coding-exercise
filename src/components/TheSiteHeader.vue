<template>
  <header class="TheHeader">
    <div class="TheHeader_Content">
      <img
        :src="WORDMARK_IMAGE_SRC"
        alt="Grove Collaborative logo"
        class="TheHeaderLogo_Image"
        itemprop="logo"
      />
    </div>
  </header>
</template>

<script>
const WORDMARK_IMAGE_SRC =
  'https://res.cloudinary.com/epantry/image/upload/v1544488331/global/grove-wordmark-cream.svg';

export default {
  data: () => ({
    WORDMARK_IMAGE_SRC
  })
};
</script>
<style lang="scss">
.TheHeader {
  width: 100%;
  background-color: var(--surface-color-dark);
  padding: var(--spacing-3x);

  &_Content {
    text-align: center;
  }
}
</style>
