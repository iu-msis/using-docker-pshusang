var randomizerApp = new Vue({
  el#: '#randomizerMemberApp',
  data: {
    members: []
  },
    methods: {
      fetchMembers()
      {
        fetch('https://randomuser.me/api')
        .then(response => response.json())
        .then(json => {randomizerApp.members = json})
      }
},
  create(){
    this.fetchMembers()
  }
)};
