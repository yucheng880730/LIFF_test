const verifyArray = [];
// const userEmail = $("#email").val();

function getRandomInt(max) {
  const num = Math.floor(Math.random() * max);
  return num;
}

function sendVerifyCode() {
  const verifyNum = getRandomInt(100000);
  const userEmail = $("#email").val();

  const data = {
    mail: userEmail,
    code: verifyNum,
  };
  $.ajax({
    url: "http://localhost:5000/email",
    contentType: "application/json",
    data: JSON.stringify(data),
    type: "POST",
  })
    .done(function () {
      verifyArray.push(verifyNum);
      return verifyNum;
    })
    .fail(function (err) {
      console.log(err);
    });
}

function checkMailUser() {
  const input = $("#check").val();
  if (input == verifyArray.pop()) {
    console.log("success");
    // const data = {
    //   line_id: "",
    //   email: userEmail,
    //   sign: "",
    // };
    // $.ajax({
    //   url: "",
    //   contentType: "application/json",
    //   data: JSON.stringify(data),
    //   type: "POST",
    // });

    $("#basic").remove();
    $("#h2").text("您已經完成EasyMint的驗證程序了!");
    $("#h2").css("font-weight", "bold");
    $("#h2").css("padding-top", "30%");
  } else {
    console.log("please resend the verify code");
  }
}
