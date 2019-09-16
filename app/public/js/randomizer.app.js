var randomizerApp = new Vue({
  el: '#randomizerMemberApp',
  data: {
    members: [{
      "gender": "",
      "name": {
        "title": "",
        "first": "",
        "last": ""
      },
      "location": {
        "street": "",
        "city": "",
        "state": "",
        "postcode": "",
        "coordinates": {
          "latitude": "",
          "longitude": ""
        },
        "timezone": {
          "offset": "",
          "description": ""
        }
      },
      "email": "",
      "login": {
        "uuid": "",
        "username": "",
        "password": "",
        "salt": "",
        "md5": "",
        "sha1": "",
        "sha256": ""
      },
      "dob": {
        "date": "",
        "age": null
      },
      "registered": {
        "date": "",
        "age": null
      },
      "phone": "",
      "cell": "",
      "id": {
        "name": "",
        "value": ""
      },
      "picture": {
        "large": "",
        "medium": "",
        "thumbnail": ""
      },
      "nat": ""
    }
  ],
  "info":
    {
    "seed": "",
    "results": null,
    "page": null,
    "version": ""
    }
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
