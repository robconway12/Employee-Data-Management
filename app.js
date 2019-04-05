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