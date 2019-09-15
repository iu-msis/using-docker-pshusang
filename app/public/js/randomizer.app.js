var randomizerApp = new Vue({
  el: '#randomizerMemberApp',
  data: {
    members: []
  },
    methods: {
      fetchMembers()
      {
        fetch('https://randomuser.me/api/?exc=registered')
        .then(response => response.json())
        // .then(json => {randomizerApp.members = json.results[0]})
        .then(function(json) {randomizerApp.members = json.results[0];
        console.log(randomizerApp.members);})
      }
},
  created(){
    this.fetchMembers()
  }
});
