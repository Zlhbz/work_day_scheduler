
console.log(window);
var day = $("#currentDay");
day.text(moment().format("dddd, MMMM Do YYYY"));
var data_hour = moment().format("H");

arrange();
showAll()
saveData();


function arrange() {
    for (var i = 9; i < 17; i++) {
        var new_div = $("<div>");
        new_div.attr("class", "row");

        var time_hour = $("<div>");
        time_hour.attr("class", "hour time-block col-2 col-sm-1 col-md-1 col-lg-1");
        if (i < 12) {
            time_hour.text(i + "AM");
        }
        if (i === 12) {
            time_hour.text(i + "PM");
        }
        if (i > 12) {
            time_hour.text(i - 12 + "PM");
        }

        var input = $("<textarea>");
        if (i < data_hour) {
            input.attr("class", "description past col-8 col-sm-10 col-md-10 col-lg-10");
        }
        if (i === parseInt(data_hour)) {
            input.attr("class", "description present col-8 col-sm-10 col-md-10 col-lg-10");
        }
        if (i > data_hour) {
            input.attr("class", "description future col-8 col-sm-10 col-md-10 col-lg-10");
        }
        input.attr("set_text", "hour" + i);

        var save_button = $("<button>");
        save_button.attr("set_button", "hour" + i);

        save_button.attr("class", "saveBtn col-2 col-sm-1 col-md-1 col-lg-1");
        new_div.append(time_hour, input, save_button);
        $(".container").append(new_div);
    }
}

function saveData() {
    $(".saveBtn").on("click", function () {

        var customText = $(this).attr("set_button");
        var key_date = moment().format("MMDDYYYY") + customText;

        $("textarea").each(function () {
            if ($(this).attr("set_text") === customText) {
                var objectAll = window.localStorage.getItem("day_schedule")
                if (objectAll == null) {
                    objectAll = { key_date: $(this).val() }
                } else {
                    objectAll = JSON.parse(objectAll);
                    objectAll[key_date] = $(this).val();

                }
                window.localStorage.setItem("day_schedule", JSON.stringify(objectAll));
            }
        })
    })
}

function showAll() {
    var stringAll = window.localStorage.getItem("day_schedule");
    var objectAll = JSON.parse(stringAll);
    for (var i = 9; i < 17; i++) {

        $("textarea").each(function () {
            if ($(this).attr("set_text") === "hour" + i) {
                console.log(objectAll[moment().format("MMDDYYYY") + "hour" + i])
                $(this).val(objectAll[moment().format("MMDDYYYY") + "hour" + i]);
            }
        })
    }
}


