import React from "react";
import "./Contract.css";

export const Contract = () => {
  return (
    <div className="contactContentWrapper">
      <h1
        style={{
          color: "black",
          textAlign: "center",
          width: "100%",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        Thông tin hợp đồng
      </h1>
      <div className="contractContent">
        <h1 className="title">Thông tin người lao động</h1>
        <div className="content">
          <p>
            <span>
              <p className="label">Họ và tên:</p>
              Nguyen Van Quan Ly
            </span>
            <span>
              <p
                className="label"
                style={{
                  marginLeft: "20rem",
                }}
              >
                Giới tính:
              </p>
              Nam
            </span>
          </p>
          <p>
            <p className="label">Sinh ngày:</p>06-07-2003
          </p>
          <p>
            <p className="label">CMND/CCCD:</p>AAA0000002
          </p>
          <p>
            <p className="label">Địa chỉ:</p>string
          </p>
        </div>
        <h1 className="title">Hợp đồng lao động</h1>
        <h2 className="title">1.Công việc phòng ban và thời hạn hợp đồng</h2>
        <div className="content">
          <p>
            <p className="label">Phòng ban công tác: </p>Sale
          </p>
          <p>
            <p className="label">Loại hợp đồng: </p>Hợp đồng xác định hạn
          </p>
          <p>
            <p className="label">Từ ngày: </p>
            05-08-2023&emsp;-&emsp;&emsp;&emsp;
            <p style={{ width: "6rem" }} className="label">
              Đến ngày:{" "}
            </p>
            30-11-2023
          </p>
        </div>
        <h2 className="title">2. Lương phụ cấp và các khoản lương khác</h2>
        <div className="content">
          <p>
            <p className="label">Lương căn bản:</p>90.000.000
            <p style={{ marginLeft: "4rem" }} className="label">
              Lương tính thuế:
            </p>
            80.000.000
          </p>
          <p>
            <p className="label">Các phụ cấp (mỗi tháng):</p>
          </p>
          <p>
            <p className="label">Hình thức trả lương:</p>Chuyển khoản
            <div className="content">
              <p>
                <p className="subLabel">Số TK ngân hàng:</p>string
              </p>
              <p>
                <p className="subLabel">Chủ tài khoản:</p>string
              </p>
              <p>
                <p className="subLabel">Ngân hàng:</p>string
              </p>
            </div>
          </p>
        </div>
        <h2 className="title">3. Thời gian làm việc và lưu trú</h2>
        <div className="content">
          <p>
            <p className="label">Số ngày làm việc một tuần:</p>5
          </p>
          <p>
            <p className="label">Số người phụ thuộc:</p>1
          </p>
          <p>
            <p className="label">Ghi chú:</p>abc
          </p>
        </div>
      </div>
    </div>
  );
};
