<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-12 col-sm-8 col-md-6 justify-content-center">
        <h4>06-Demo List Customer</h4>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-sm-8 col-md-6 justify-content-center">
        <div class="row mt-2">
          <div class="col">
            <template>
              <table id="customerTable" class="table table-hover">
                <thead>
                <tr style="text-align:center">
                  <th>Action</th>
                  <th>ID</th>
                  <th>Customer Name</th>
                  <th>Area ID</th>
                  <th>Updated At</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="cus in result">
                  <tr :key="cus.id">
                    <th><button @click="viewDetail(cus.id)" class="btn btn-warning">Ref Area</button></th>
                    <th scope="row">{{ cus.id }}</th>
                    <td>{{ cus.name }}</td>
                    <td>{{ cus.area_id }}</td>
                    <td>{{ cus.updated_at }}</td>
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
      title: '06-Customer Demo'
    }
  },
  data() {
    return {
      result: [],
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$axios.$get('/customer')
        .then(res =>
        {
          this.result = res
        }).catch(error=>
      {
        console.log(error)
      })
    },
    viewDetail(id){
      this.$router.push({name:'05-detail', params: {detail:id, flat:true}});
    },
  }
}

</script>



