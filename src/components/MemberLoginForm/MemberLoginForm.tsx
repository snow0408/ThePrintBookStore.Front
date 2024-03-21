import React, { useState, useEffect } from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import "../../assets/css/app.css";
import { Link } from "react-router-dom";
// import FormBookImage from '../../component/Image/sign-up.png';

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const note = Object.fromEntries(formData);
  return fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer SOMEJWTTOKEN",
    },
    body: JSON.stringify(note),
  });
}
function MemberLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaUrl, setCaptchaUrl] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const GoogleLoginSuccess = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log("Google登錄成功：", response);
  };
  const GoogleLoginFail = (response: GoogleLoginResponse) => {
    console.log("Google登錄失敗：", response);
    // 在這裡處理登錄失敗的邏輯
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7236/api/MemberLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("無此帳號密碼或帳號密碼錯誤");
      }

      const { token } = await response.json(); // 假設後端回應包含 token
      localStorage.setItem("token", token); // 儲存 JWT 到 localStorage

      alert("登入成功");
      // 這裡可以重定向到會員中心或執行其他操作
      window.location.href = "/MemberCenter"; // 重定向到會員中心頁面
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // 生成圖形驗證碼
  const generateCaptcha = () => {
    // 更新為您的後端生成圖形驗證碼的URL
    setCaptchaUrl(
      `https://localhost:7236/api/Captcha/GetCaptcha?dummy=${new Date().getTime()}`
    );
  };

  return (
    <section className="signup p-40 mb-64">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-block bg-lightest-gray">
              <h3 className="mb-48">會員登入</h3>

              {/* 處理 Google 登錄按鈕 */}
              <div className="row mb-24">
                {/* <h6><a href="" class="link-btn mb-24 mb-sm-0"><img src="static/picture/google-icon.png" alt=""> Sign up with Google</a></h6> */}
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <h6 style={{ marginLeft: "500px", textAlign: "right" }}>
                    <Link to="/employee-login" className="color-black">
                      員工登入
                    </Link>
                    <a href="signup.html" className="color-black"></a>
                  </h6>
                </div>

                <div className="col-sm-6">
                  <GoogleLogin
                    clientId="266231759117-rneh56rnftdqop46b2pvbted0pv9h79l.apps.googleusercontent.com"
                    buttonText="使用Google登錄"
                    onSuccess={GoogleLoginSuccess}
                    onFailure={GoogleLoginFail}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
                {/* 可以在這裡添加 Facebook 登錄按鈕 */}
              </div>

              <h5 className="or mb-24">or</h5>

              {/* 登錄表單 */}
              <form onSubmit={handleSubmit}>
                <div className="mb-24">
                  <input
                    type="email"
                    className="form-control"
                    id="login-email"
                    name="login-email"
                    required
                    placeholder="請輸入電子信箱"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-24">
                  <input
                    type="password"
                    className="form-control"
                    id="login-password"
                    name="login-password"
                    required
                    placeholder="請輸入密碼"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* 圖形驗證碼及刷新按鈕 */}
                <div
                  className="mb-24"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={captchaUrl}
                      alt="captcha"
                      onClick={generateCaptcha}
                      style={{ cursor: "pointer" }}
                    />
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="refresh-button"
                      style={{ marginLeft: "10px" }}
                    >
                      刷新驗證碼
                    </button>
                  </div>
                </div>
                {/* 驗證碼輸入框 */}
                <div
                  className="mb-24"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <input
                    type="Captcha"
                    className="form-control"
                    required
                    placeholder="請輸入驗證碼"
                    value={userCaptcha}
                    onChange={(e) => setUserCaptcha(e.target.value)}
                    style={{ maxWidth: "200px" }} // 可根據需要調整寬度
                  />
                </div>

                {/* 登入按鈕 */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button type="submit" className="b-unstyle cus-btn">
                    <span className="icon">
                      <img src="static/picture/click-button.png" alt="" />
                    </span>
                    按此登入
                  </button>
                </div>
              </form>

              <div
                className="register-bottom"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h6 style={{ marginRight: "100px", textAlign: "left" }}>
                  <a href="signup.html" className="color-primary">
                    <Link to="/register" className="color-black">
                      註冊會員
                    </Link>
                  </a>
                </h6>
                <h6 style={{ marginLeft: "100px", textAlign: "right" }}>
                  <a href="signup.html" className="color-primary">
                    <Link to="/ForgetPassword" className="color-primary">
                      忘記密碼
                    </Link>
                  </a>
                </h6>
              </div>
              {/* <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <h6 style={{ marginLeft: "500px", textAlign: "right" }}>
                  <Link to="/employee-login" className="color-black">
                    員工登入
                  </Link>
                  <a href="signup.html" className="color-black"></a>
                </h6>
              </div> */}
            </div>
          </div>

          {/* <div className="col-lg-6">
    <img src={FormBookImage} alt="Form Book" className="img-fluid" />
  </div> */}
        </div>
      </div>
    </section>
  );
}

export default MemberLoginForm;
