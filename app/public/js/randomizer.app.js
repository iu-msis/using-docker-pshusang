var randomzierApp = new Vue({
  el#: '#randomzierMemberApp',
  data: {
    members: []
  },
    methods: {
      fetchMembers() {
        fetch('json/randomuser.me-sample.json')
        .then(response => response.json())
        .then(json => {randomzierApp.members = json})
      }
},
  create(){
    this.fetchMembers()
  }
)};
