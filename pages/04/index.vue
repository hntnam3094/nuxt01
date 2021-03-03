<template>
<div>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-8 col-md-6 justify-content-center">
      <h4>04-Demo use vuex</h4>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-8 col-md-6 justify-content-center">
      <div class="row mt-3">
        <div class="col">
          <input
              type="text"
              class="form-control"
              aria-label="Username"
              placeholder="Search..."
              style="min-width: 500px"
              v-model="keyword"
              @keyup.enter="fetchData">
        </div>
        <div class="col">
          <button
              class="btn btn-primary"
              @click="fetchData"
          >
            <i class="mdi mdi-magnify"/>
          </button>
        </div>
      </div>
      <div class="row mt-3 align-items-center">
        <div class="col-3">
          <button
              type="button"
              class="btn btn-success mx-2 d-flex justify-en"
              @click="addArea"
          >
            <i class="mdi mdi-plus"/>
          </button>
        </div>
        <div class="col-3">
          <div class="form-check form-switch">
            <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked
                v-model="orderByAsc">
            <label for="flexSwitchCheckChecked">Order by {{ orderByText }}</label>
          </div>
        </div>
        <div class="col-6">
        </div>
      </div>
      <div class="row mt-2">
        <div class="col">
          <template>
            <table class="table">
              <thead>
              <tr style="text-align:center">
                <th>Display Sequence</th>
                <th>Name</th>
                <th>Updated At</th>
              </tr>
              </thead>
              <tbody>
              <template v-for="area in result">
                <tr :key="area.id">
                  <th scope="row">{{ area.sequence }}</th>
                  <td>{{ area.name }}</td>
                  <td>{{ area.updated_at }}</td>
                </tr>
              </template>
              </tbody>
            </table>
          </template>
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
      title: '04-Demo'
    }
  },
  data() {
    return {
      orderByText: 'ASC',
    };
  },
  computed: {
    result: function () {
      return this.$store.getters["area/getData"];
    },
    keyword: {
      get() {
        return this.$store.getters["area/getKeyword"];
      },
      set(value) {
        this.$store.dispatch('area/setKeyword', value);
      },
    },
    orderByAsc: {
      get() {
        return this.$store.getters["area/getOrderBy"];
      },
      set(value) {
        this.$store.dispatch('area/setOrderBy', value);
      },
    },
  },
  watch: {
    orderByAsc: function () {
      this.orderByText = this.orderByAsc ? 'ASC' : 'DESC';
      this.fetchData();
    },
  },
  created() {
    this.orderByText = this.orderByAsc ? 'ASC' : 'DESC';
    this.fetchData();
  },
  methods: {
    addArea: function () {
      this.$router.push('/04/add')
    },
    fetchData: async function () {
      await this.$store.dispatch('area/fetchAreas', {
        keyword: this.keyword,
        orderBy: this.orderByText,
      });
    },
  }
}
</script>

