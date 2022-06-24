import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import MD5 from "crypto-js/md5.js";

// console.log(
//   MD5(
//     "line_id=123456789&email=yucheng2k13@gmail.com"
//   ).toString()
// );

const router = express.Router();
dotenv.config({ path: "../.env" });

const secret = process.env.GMAIL_PASS;

router.post("/email", function (req, res) {
  const email = req.body.mail;
  const verifyCode = req.body.code;

  sendVerifyCode(email, verifyCode);
  res.json({ status: 200, msg: "success" });
});

function sendVerifyCode(email, code) {
  const mailTo = email;
  const verifyCode = code;

  let mailTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: {
      user: "yucheng2k13@gmail.com",
      pass: secret,
    },
  });

  let options = {
    //寄件者
    from: "yucheng2k13@gmail.com",
    //收件者
    to: mailTo,
    //主旨
    subject: "M1 Tech regist email verify code",
    //純文字
    text: "verify code: " + verifyCode,
  };

  mailTransport.sendMail(options, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("訊息發送: " + info.response);
    }
  });
}

export default router;
