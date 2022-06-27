function getUserId() {
  $.ajax({
    url: "https://api.line.me/v2/profile",
    type: "GET",
  }).done(function () {
    const uid = res.id;
    console.log(uid);
  });
}
