<template>
  <div class="hello">
    <headers></headers>
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
    <listeditems v-on:getdata="addtampung" v-bind:data="array"></listeditems>
  </div>
  <div class="col-md-8">
    <maincontent v-bind:result="tampung"></maincontent>
  </div>
  </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <router-view @tambahdata="tambahdata"></router-view>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import headers from '@/components/headers'
import listeditems from '@/components/listeditems'
import maincontent from '@/components/maincontent'
import posarticle from '@/components/posarticle'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to maBlog',
      array: [],
      tampung: []
    }
  },
  methods: {
    getlist () {
      var tampung = this
      axios.get('http://localhost:3000')
      .then(response => {
        console.log(response)
        tampung.array = response.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    addtampung (data) {
      console.log(data)
      this.tampung = data
    },
    tambahdata (data) {
      this.array
    }
  },
  components: {
    headers,
    listeditems,
    maincontent,
    posarticle
  },
  mounted () {
    this.getlist()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
