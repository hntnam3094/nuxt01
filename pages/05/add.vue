<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-8 col-md-6 justify-content-center">
      <div class="modal-content mx-auto mt-3" max-width="800">
        <div class="card">
          <h3 class="card-header">
            Create Area
          </h3>
          <div class="card-body">
            <form @submit.prevent="addNew">
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
                @click="backArea"
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
  props: {
    prevData: {}
  },
  data() {
    return {
      name: '',
      sequence: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      sequenceRules: [
        v => !!v || 'Sequence is required',
        v => Number.isInteger(Number(v)) || 'The value must be an integer number'
      ]
    };
  },
  methods: {
    backArea() {
      this.$router.push('/05');
      this.$emit('pop', this.prevData);
    },
    addNew() {
      this.$axios.$post('/areas', { sequence: this.sequence, name: this.name })
        .then(() => 
        {
          this.backArea();
        }).catch(error => 
        {
          console.log(error);
        });
    }
  }
}
</script>
