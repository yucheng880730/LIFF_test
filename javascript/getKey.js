const verifyArray = [];

function getRandomInt(max) {
  const num = Math.floor(Math.random() * max);
  return num;
}

function sendVerifyCode() {
  const verifyNum = getRandomInt(100000);
  const userEmail = sessionStorage.getItem("email");

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

function getKey() {
  const input = $("#check").val();
  if (input == verifyArray.pop()) {
    // const data = {
    //   line: "123456789",
    //   data_type: "transfer",
    //   sign: "123456789",
    // };
    // $.ajax({
    //   url: "Wallet.html",
    //   contentType: "application/json",
    //   data: JSON.stringify(data),
    //   type: "POST",
    // })
    $("#basic").remove();
    $("#h2").text(
      "請注意！任何得到您私鑰的人都可以完全控制您的帳戶，包括轉走所有的資金以及 NFT。"
    );
    $("#h2").css("font-weight", "bold");
    $("#h2").css("padding-top", "30%");
  } else {
    console.log("Error!!");
  }
}

function getAddress() {
  const data = {
    line: "123456789",
    data_type: "wallet",
    sign: "123456789",
  };
  $.ajax({
    url: "Wallet.html",
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
