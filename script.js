var day = $("#currentDay");

day.text(moment().format("dddd, MMMM Do YYYY"));

// day.text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
// day.text(moment().toDate());

var data_hour = moment().format("H");

console.log(moment().format("H"));
console.log(moment().toDate());

for (var i = 9; i < 17; i++) {

    var new_div = $("<div>");
    var time_hour = $("<div>");

    var save_button = $("<button>");

    new_div.attr("class", "row");

    time_hour.attr("class", "hour time-block col-1 col-sm-1 col-md-1 col-lg-1");
    time_hour.text(i + "AM");

    var input = $("<textarea>");
    if (i < data_hour) {
        input.attr("class", "past col-10 col-sm-10 col-md-10 col-lg-10");
    }
    if (i === parseInt(data_hour)) {
        input.attr("class", "present col-10 col-sm-10 col-md-10 col-lg-10");
    }
    if (i > data_hour) {
        input.attr("class", "future col-10 col-sm-10 col-md-10 col-lg-10");
    }

    save_button.attr("class", "saveBtn col-1 col-sm-1 col-md-1 col-lg-1");
    new_div.append(time_hour, input, save_button);
    $(".container").append(new_div);
}
