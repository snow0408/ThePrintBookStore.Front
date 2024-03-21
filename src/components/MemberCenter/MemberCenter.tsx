import React, { useState, useEffect } from "react";

interface MemberInfoType {
  name: string;
  email: string;
}

function MemberCenter() {
  const [memberInfo, setMemberInfo] = useState<MemberInfoType | null>(null);

  useEffect(() => {
    const fetchMemberInfo = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        // 重定向到登入頁面
        window.location.href = "/login";
        return;
      }

      try {
        const response = await fetch(
          "https://localhost:7236/api/MemberLogin/member-info",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("無法獲取會員信息");
        }

        const data = await response.json();

        setMemberInfo(data);
      } catch (error) {
        console.error(error);
        // 根據錯誤處理，例如重定向到登入頁面
      }
    };

    fetchMemberInfo();
  }, []);

  if (!memberInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>會員中心</h2>
      {/* 顯示會員信息 */}
      <div>
        <p>
          歡迎, {memberInfo.name} ,你的Email是 {memberInfo.email}
        </p>
        {/* 更多會員信息展示 */}
      </div>
    </div>
  );
}

export default MemberCenter;
