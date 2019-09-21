$(document).ready(function() {
    $("#modal").show()

    $("#enterBtn").on("click", function() {
        let color = $("select").val()
        if(color != 'color') {
            $("#modal").hide()
            if (color === 'black') {
                $("#colorName").text("You're black!")
            } else {
                $("#colorName").text("You're red!")
                $(this).addClass("redBtnFill")
            }
        }
    })

    $(".diskSpace").on("click", function() {
      let color = $("select").val();
      if ($(this).attr("data") === "filled") {
        alert("This space is already filled! Please choose another!");
      } if ($(this).attr("class") === "bottom") {
            if (color === "red") {
                console.log("Clicked!");
                $(this).addClass("redBtnFill");
                $(this).attr("data", "filled");
            } else {
                console.log("Clicked!");
                $(this).addClass("blackBtnFill");
                $(this).attr("data", "filled");
            } 
      } else {
          alert("needs to be on the bottom!")
      }
    });
})