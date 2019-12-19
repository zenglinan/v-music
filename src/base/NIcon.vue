<template>
  <svg class="icon" aria-hidden="true" @click="emitClick">
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
    },
    methods: {
      emitClick(e) {
        this.$emit('click', e)
      }
    }
  }
</script>
