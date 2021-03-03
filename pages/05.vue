<template>
    <nuxt-child :prevData="parentData" @pop="parentData = $event"/>
</template>
<script>
export default {
  data() {
    return {
      parentData: null,
    };
  },
}
</script>