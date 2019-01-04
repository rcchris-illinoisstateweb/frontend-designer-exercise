// Add your Vue.js code
console.log('start script.js');

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      people: [
        {
            "_id": "5abe8a29cfc50fb9180f7f01",
            "balance": "2971.17",
            "age": 20,
            "fname": "Villarreal",
            "lname": "Morales",
            "gender": "male",
            "company": "ZIPAK",
            "email": "villarrealmorales@zipak.com",
            "registered": "2016-09-13T06:31:06+0500"
        },
        {
            "_id": "5abe8a2958a4f28580969a86",
            "balance": "3585.08",
            "age": 35,
            "fname": "Sargent",
            "lname": "Gates",
            "gender": "male",
            "company": "TRIPSCH",
            "email": "sargentgates@tripsch.com",
            "registered": "2016-10-04T10:34:37+0500"
        },
        {
            "_id": "5abe8a29c65d2d296412744a",
            "balance": "1189.49",
            "age": 21,
            "fname": "Rush",
            "lname": "Richards",
            "gender": "male",
            "company": "SURELOGIC",
            "email": "rushrichards@surelogic.com",
            "registered": "2014-01-09T04:59:08+0600"
        }
      ]
    },
    mounted: function() {

    },
    methods: {

    },
    filters: {

    }
  })