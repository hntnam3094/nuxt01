<template>
  <div>
    <NuxtLink to="/07/ListCustomer">List Customer</NuxtLink>
    <div class="row justify-content-center">
      <div class="col-12 col-sm-8 col-md-6 justify-content-center">
        <h4>09-Demo div tag</h4>
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
              @keyup.enter="searchArea">
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
              <label for="flexSwitchCheckChecked">Order by {{ orderByAscText }}</label>
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
                  <th>Action</th>
                  <th>ID Area</th>
                  <th>Display Sequence</th>
                  <th>Name</th>
                  <th>Updated At</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="area in result">
                  <tr :key="area.id">
                    <th><button class="btn btn-warning" @click="viewDetail(area.id)">View</button></th>
                    <th scope="row">{{ area.id }}</th>
                    <th>{{ area.sequence }}</th>
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
      title: '05-Demo'
    }
  },
  async asyncData({params}){
      return {prevData:params.data}
  }
  ,
  data() {
    return {
      keyword: '',
      orderByAsc: true,
      orderByAscText: 'ASC',
      result: [],
      prevData:{}
    }
  },
  watch: {
    orderByAsc: function() {
      this.orderByAscText = this.orderByAsc ? 'ASC' : 'DESC';
      this.fetchData();
    }
  },
  created() {

    if (this.orderByAsc) {
      this.fetchData();
    }
  },
  mounted() {
    if (!!this.prevData){
      this.keyword = this.prevData.keyword;
      this.orderByAsc = this.prevData.orderby
    }
  },
  methods: {
    addArea() {
      this.prevData={
        keyword:this.keyword,
        orderby:this.orderByAsc
      }
      this.$router.push({name:'07-add', params: {data:this.prevData}});
    },
    searchArea() {
      this.fetchData();
    },
    fetchData() {
      this.$axios.$get('/areas', { params: { keyword: this.keyword, orderBy: this.orderByAscText }})
        .then(res =>
        {
          this.result = res
        }).catch(error=>
      {
        console.log(error)
      })
    },
    viewDetail(id){
      this.prevData={
        keyword:this.keyword,
        orderby:this.orderByAsc
      }
      this.$router.push({name:'07-detail', params: {detail:id, data:this.prevData}});
    }
  }
}
</script>



