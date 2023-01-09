<template>
  <div class="mb-3 pointer p-2 entry-container" @click="$router.push({ name: 'entry', params:{ id:10 }})">
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">09</span>
        <span class="mx-1 fs-5">Enero</span>
        <span class="mx-2 fw-light">2020, lunes</span>
    </div>
    <div class="entry-description">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti unde velit. Ipsa eveniet eligendi ipsam corporis odio maiores consectetur sed in esse aut nam odit unde, libero consequuntur culpa?
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover{
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description{
    font-size: 12px;
  }
}
</style>