<div class="customer table">
  <div class="header_info">
    <div class="quantity">
      <span></span>
      <p>Số lượng khách hàng</p>
    </div>
    <div class="search_box">
      <input type="text" placeholder="Search..." id="search_box" onkeyup="search_fetch(this.value,'TAIKHOAN', 1)">
      <div class="icon_search">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    <div class="block_add">
      <button class="btn_add_product btn" onclick="input_add_acc('TAIKHOAN', 'MATK')">
        <i class="fa-solid fa-plus"></i>
        <span>Thêm tài khoản</span>
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
          <label for="">Mã tài khoản</label>
          <input type="text" name="code" disabled="true" value="">
        </div>
        <div>
          <label for="">Tên tài khoản</label>
          <input type="text" name="fullName">
          <div>
            <span></span>
          </div>
        </div>
        <div>
          <label for="">Username</label>
          <input type="text" name="username" onchange="checkUser(this.value)">
          <div>
            <span></span>
          </div>
        </div>
      </div>
      <div class="customer_data_col_2 col">
        <div>
          <label for="">Password</label>
          <input type="password" name="password">
          <div>
            <span></span>
          </div>
        </div>
        <div>
          <label for="">Re-Password</label>
          <input type="password" name="re_password">
          <div>
            <span></span>
          </div>
        </div>
        <div>
          <label for="">Mã quyền</label>
          <select name="" id="role" class="selection">
            
          </select>
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
  <div class="main_info">
    <table>
      <tr>
        <th>Mã tài khoản</th>
        <th>Tên tài khoản</th>
        <th>Username</th>
        <th>Password</th>
        <th>Mã quyền</th>
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
<script src="./js/scriptAccount.js"></script>
