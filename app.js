$(document).ready(function () {
    buildhtml();
    // addJumboTron();
    // addEmployeeTable();


    //Starting to build html by adding a container to the body
    function buildhtml(){
        $("body").append($("<div>").addClass("container"));
        addJumboTron();
        addEmployeeTable();
    }
    //creating the jumbotron
    function addJumboTron(){
        $(".container").append($("<div>").addClass("jumbotron").attr("id", "myJumbotron"));
        $("#myJumbotron").append($("<h1>").addClass("text-center").html("Employee Data Management "))
        $("#myJumbotron").append($("<h3>").addClass("text-center").html("Comprehensive directory of Employee Billable Hours"))
    }

    //creating the table
    function addEmployeeTable(){
        $(".container").append($("<div>").addClass("row").attr("id", "firstRow"));
        $("#firstRow").append($("<div>").addClass("col-lg-12").attr("id", "firstColumn"));
        $("#firstColumn").append($("<div>").addClass("card").attr("id","firstCard"));
        $("#firstCard").append($("<div>").addClass("panel-heading").attr("id","table-heading"));
        $("#table-heading").append($("<h3>").addClass("panel-title").attr("id","panelTitle").html("<strong>Current Employee</strong>"));

        $("#firstCard").append($("<div>").addClass("panel-body").attr("id","panelBody"));
        $("#panelBody").append($("<table>").addClass("table table-hober").attr("id","train-table"));
        $("#train-table").append($("<thead>").attr("id", "firstThead"));
        $("#firstThead").append($("<tr>").attr("id","firstTR"));
        $("#firstTR").append($("<th>").html("Employee Name"));
        $("#firstTR").append($("<th>").html("Role"));
        $("#firstTR").append($("<th>").html("Start Date"));
        $("#firstTR").append($("<th>").html("Months Worked"));
        $("#firstTR").append($("<th>").html("Monthly Rate ($)"));
        $("#firstTR").append($("<th>").html("Total BIlled ($)"));

        $("#train-table").append($("<tbody>").attr("id", "table-tbody"));
        //this is where we will add all the train info
        $("#firstColumn").append($("<div>").addClass("card").attr("id","trainInfoPanel"));
        $("#trainInfoPanel").append($("<div>").addClass("panel-heading").attr("id","panelHeading"));
        // $("#panelHeading").append($("<h3>").addClass("panel-title").attr("id","trainPanelTitle").html("<strong>Add Train</strong>"));
        $("#trainInfoPanel").append($("<div>").addClass("panel-body").attr("id","trainPanelBody"));

        $('#trainPanelBody').append($("<div>").addClass("panel-heading").attr("id","form-heading"));
        $('#form-heading').append($("<h3>").addClass("panel-title").attr("id","panelTitle").html("<strong>Add Employee</strong>"));
        
        $("#trainPanelBody").append($("<form>").attr("id","trainForm"));
        $("#trainForm").append($('<div>').addClass("form-group").attr("id", 'form-group1'));
        $('#form-group1').append($("<label>").attr("for", "employee-name").html("Employee Name"));
        $('#form-group1').append($("<input>").addClass("form-control").attr("id", "employee-name"));
        
        $("#trainForm").append($('<div>').addClass("form-group").attr("id", 'form-group1'));
        $('#form-group1').append($("<label>").attr("for", "employee-role").html("Role"));
        $('#form-group1').append($("<input>").addClass("form-control").attr("id", "employee-role"));

        $("#trainForm").append($('<div>').addClass("form-group").attr("id", 'form-group1'));
        $('#form-group1').append($("<label>").attr("for", "employee-startDate").html("Start Date (MM/DD/YYYY)"));
        $('#form-group1').append($("<input>").addClass("form-control").attr("id", "employee-startDate"));

        $("#trainForm").append($('<div>').addClass("form-group").attr("id", 'form-group1'));
        $('#form-group1').append($("<label>").attr("for", "employee-monthlyRate").html("Monthly Rate"));
        $('#form-group1').append($("<input>").addClass("form-control").attr("id", "employee-monthlyRate"));

             $("#trainForm").append($("<button>").addClass("btn btn-primary btn-block").attr({id: "add-train-btn", type: "submit"}).html("Submit"));

    }
});
        
        $("#trainPanelBody").append($("<form>").attr("id","trainForm"));
        $("#trainForm").append($("<button>").addClass("btn btn-primary btn-block").attr({id: "add-train-btn", type: "submit"}).html("Add Employee"));

    }
      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCaGRbwU1SrfhHiZj3X_BpjPtEgOislx3M",
    authDomain: "employeedata-7c4b8.firebaseapp.com",
    databaseURL: "https://employeedata-7c4b8.firebaseio.com",
    projectId: "employeedata-7c4b8",
    storageBucket: "employeedata-7c4b8.appspot.com",
    messagingSenderId: "31454540790"
  };
  firebase.initializeApp(config);

  var dataRef = firebase.database();

  // Initial Values
  var name = "";
  var role = "";
  var start = "";
  var rate = "";

  // Capture Button Click
  $("#add-user").on("click", function(event) {
    event.preventDefault();

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    name = $("#name-input").val().trim();
    role = $("#email-input").val().trim();
    start = $("#age-input").val().trim();
    rate = $("#comment-input").val().trim();

    // Code for the push
    dataRef.ref().push({

      name: name,
      role: role,
      start: start,
      rate: rate,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  });

  // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
  dataRef.ref().on("child_added", function(childSnapshot) {

    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().start);
    console.log(childSnapshot.val().rate);
    console.log(childSnapshot.val().dateAdded);

    // full list of items to the well
    $("#full-member-list").append("<div class='well'><span class='member-name'> " +
      childSnapshot.val().name +
      " </span><span class='member-email'> " + childSnapshot.val().email +
      " </span><span class='member-age'> " + childSnapshot.val().age +
      " </span><span class='member-comment'> " + childSnapshot.val().comment +
      " </span></div>");

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

  dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    snap = snapshot.val()
    // Change the HTML to reflect
    $("#name-display").text(snap.name);
    $("#role-display").text(snap.role);
    $("#start-display").text(snap.start);
    $("#date-display").text(snap.rate);
  });

});


