<div class="customer table">
  <div class="header_info">
    <div class="quantity">
      <span></span>
      <p>Số lượng đơn hàng</p>
    </div>
    <div class="search_box">
      <input type="text" placeholder="Search..." id="search_box" onkeyup="search_fetch(this.value,'DONHANG', 1)">
      <div class="icon_search">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    <div class="block_add">
      <button class="btn_add_product btn" onclick="input_add_dh('DONHANG', 'idHD')">
        <i class="fa-solid fa-plus"></i>
        <span>Thêm đơn hàng</span>
      </button>
    </div>
    <button class="btn_close_edit btn">
      <i class="fa-solid fa-xmark"></i>
      <span>Close Edit</span>
    </button>
  </div>

  <div class="form_data">
    <div class="customer_data form_customer_page row">
      <div class="customer_data_col_1 col">
        <div>
          <label for="">Mã đơn hàng</label>
          <input type="text" name="code" disabled="true" value="">
        </div>
        <div>
          <label for="">Mã nhân viên</label>
          <input type="text" name="codeStaff" placeholder="Nhân viên" onclick="chooseObj('NHANVIEN')">
          <div>
            <span></span>
          </div>
        </div>
        <div>
          <label for="">Mã khách hàng</label>
          <input type="text" name="codeCustomer" placeholder="Khách hàng" onclick="chooseObj('KHACHHANG')">
          <div>
            <span></span>
          </div>
        </div>
        <div>
          <label for="">Người nhận</label>
          <input type="text" name="fullName">
          <div>
            <span></span>
          </div>
        </div>
      </div>
      <div class="customer_data_col_2 col">
        <div>
          <label for="">Địa điểm giao</label>
          <input type="text" name="address">
          <div>
            <span></span>
          </div>
        </div>
        <div>
          <label for="">Thời điểm đặt</label>
          <input type="text" id="timeOfOrder" placeholder="Date" name="timeOfOrder">
          <div>
            <span></span>
          </div>
        </div>
        <div>
          <label for="">Thời điểm nhận</label>
          <input type="text" id="deliveryTime" placeholder="Date" name="deliveryTime">
          <div>
            <span></span>
          </div>
        </div>
        <div>
          <label for="">Tổng tiền</label>
          <input type="text" name="total">
          <div>
            <span></span>
          </div>
        </div>
      </div>
      <div class="customer_data_col_3 col">
        <button class="btn_action_add btn" onclick="submitAdd()">Thêm</button>
        <button class="btn_action_edit btn" onclick="submitUpdate()">Sửa</button>
      </div>
    </div>
  </div>
  <div class="filter">
    <div>
      <input type="text" id="startDateFilter" placeholder="Ngày bắt đầu">
      <div>
        <span></span>
      </div>
    </div>
    <div>
      <input type="text" id="endDateFilter" placeholder="Ngày kết thúc">
      <div>
        <span></span>
      </div>
    </div>
    <button class="btn_add_product btn" onclick="filter()">Tìm kiếm</button>
  </div>
  <div class="main_info">
    <table>
      <tr>
        <th>Mã đơn hàng</th>
        <th>Mã nhân viên</th>
        <th>Mã khách hàng</th>
        <th>Tên người nhận</th>
        <th>Địa điểm nhận</th>
        <th>Thời điểm đặt</th>
        <th>Thời điểm nhận</th>
        <th>Tông tiền</th>
        <th class="activeSort" onclick="sortList(this, 'DONHANG', 'XuLy')"><span style="margin-right: 5px">Xử lý</span><i class="fa-solid fa-arrows-up-down"></i></th>
        <th>Chi tiết</th>
        <th>Sửa</th>
        <th>Xóa</th>
      </tr>
      <tbody class="innerArea">
        
      </tbody>
    </table>
    <div class="page">
      <ul>
        
      </ul>
    </div>
  </div>
</div>
<script src="./js/scriptBill.js"></script>
