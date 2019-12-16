<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${href}`"></use>
  </svg>
</template>

<script>
  export default {
    name: "NIcon",
    props: {
      href: {
        type: String,
        required: true
      }
    }
  }
</script>
