<template>
  <div class="chip" :class="BgColor">
    <p>{{ ChipText }}</p>
  </div>
</template>

<script>

export default {
  name: 'ColorChip',
  props: {
    ChipText: {
      type: String,
      default: 'Chip'
    },
    BgColor: {
      type: String,
      default: '#000'
    }
  }
}
</script>

