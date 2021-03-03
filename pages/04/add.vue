<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-8 col-md-6 justify-content-center">
      <div class="modal-content mx-auto mt-3" max-width="800">
        <div class="card">
          <h3 class="card-header">
            Create Area
          </h3>
          <div class="card-body">
            <form @submit.prevent="addArea">
              <div class="mb-3">
                <label
                    for="nameInput"
                    class="form-label"
                >
                  Name
                </label>
                <input
                    class="form-control"
                    id="nameInput"
                    v-model="name"
                    required
                    style="min-width: 400px">
              </div>
              <div class="mb-3">
                <label
                    for="sequenceInput"
                    class="form-label"
                >
                  Sequence
                </label>
                <input
                    type="number"
                    class="form-control"
                    id="sequenceInput"
                    v-model="sequence"
                    required
                    style="min-width: 400px">
              </div>

              <button
                  type="button"
                  class="btn btn-danger"
                  @click="goBack"
              >
                Back
              </button>

              <button
                  type="submit"
                  class="btn btn-primary"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Add Area'
    }
  },
  data() {
    return {
      name: '',
      sequence: '',
    };
  },
  methods: {
    goBack: function () {
      this.$router.push('/04');
    },
    addArea: async function () {
      await this.$store.dispatch('area/addArea', {
        name: this.name,
        sequence: this.sequence
      });

      this.goBack();
    },
  }
}
</script>
