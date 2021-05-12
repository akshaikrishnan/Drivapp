var elem = document.documentElement;
var myModal = new bootstrap.Modal(document.getElementById("fullscreenreq"), {});
if ((screen.availHeight || screen.height - 30) <= window.innerHeight) {
  var isfull = true;
} else {
  var isfull = false;
   myModal.show();
}
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
  myModal.hide();
}

$("span.back-btn").on("click", function () {
  window.history.go(-1);
  //return false;
});

// $('#uptrip').on('click', function(){
//   $('div.bottom-sheet').toggleClass('hide-card');
//   $('div.bottom-sheet').toggleClass('half-screen');
//   console.log('helloo')
// });

$("h4.text-center").on("click", function () {
  $("div.bottom-sheet").toggleClass("half-screen");
});

function btmpnl(a) {
  $("div.bottom-sheet").not(a).addClass("hide-card");

  $(a).toggleClass("hide-card");
  $(a).addClass("half-screen");
  console.log("helloo");
}

$("a.btn-success").on("click", function () {
  $("div.bottom-sheet").addClass("hide-card");
  $("div#footer-bar").addClass("footer-menu-hidden");
  $("div.end-trip").removeClass("end-trip-hidden");
  $("div.trip-km").addClass("trip-km-active");
  console.log("helloo");
});

$("a.btn-danger").on("click", function () {
  $("div.trip-km").removeClass("trip-km-active");
  $("div#footer-bar").removeClass("footer-menu-hidden");
  $("div.end-trip").addClass("end-trip-hidden");
  console.log("helloo");
});

var ctx = document.getElementById("chart");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Global Average",
        backgroundColor: "#ffd3b4",
        data: [900, 1000, 700, 800, 670, 995],
      },
      {
        label: "Your perfomance",
        backgroundColor: "#98ddca",
        data: [890, 920, 650, 870, 540, 870],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "bottom",
      labels: { fontSize: 13, padding: 15, boxWidth: 12 },
    },
    title: { display: false },
  },
});

function messages() {
  $("div.messages-wrap").removeClass("none");
  setTimeout(function () {
    $("div.messages-wrap").addClass("show-messages");
  }, 20);
  

  $("div.messages-wrap").load("../messages.html");
  console.log("yooo");
}

function goback () {
  $("div.messages-wrap").removeClass("show-messages");
  setTimeout(function () {
    $("div.messages-wrap").addClass("none");
  }, 20);
  
};




function chat() {
  $("#chater").removeClass("none");
  setTimeout(function () {
    $("#chater").addClass("show-messages");
  }, 20);
  

  $("#chater").load("../chat.html");
  console.log("yooo");
}

function msg() {
  $("#chater").removeClass("show-messages");
  setTimeout(function () {
    $("#chater").addClass("none");
  }, 20);
  
};



