<!-- <div class="board">
  <div class="left-board">
    <label class="title">Nhập IMEI</label>
    <div class="form-input">
      <label class="space-tb">IMEI</label>
      <input type="text" id="IMEI" required>
      <span></span>
    </div>
    <div class="bot-board">
      <input type="submit" value="Nhập">
    </div>
    <div class="btn-close" onclick="close()">
      <i class="fas fa-times"></i>
    </div>
  </div>
</div> -->
<div class="product table">
  <div class="header_info">
    <div class="quantity">
      <span></span>
      <p>Số lượng sản phẩm</p>
    </div>
    <div class="search_box">
      <input type="text" placeholder="Search..." id="search_box" onkeyup="search_fetch(this.value,'SANPHAM', 1)">
      <div class="icon_search">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    <div class="block_add">
      <button class="btn_add_product btn" onclick="input_add_sp('SANPHAM', 'idCD')">
        <i class="fa-solid fa-plus"></i>
        <span>Thêm sản phẩm</span>
      </button>
    </div>
    <button class="btn_close_edit btn">
      <i class="fa-solid fa-xmark"></i>
      <span>Close Edit</span>
    </button>
  </div>
  <div class="form_data">
    <div class="product_data form_product_page row">
      <div class="product_data_col_1 col">
        <div>
          <input type="file" id="file_upload" accept=".jpg, .png" name="displayImage" hidden onchange="imagePreview(this)">
          <label for="file_upload" class="label_upload">Choose image</label>
        </div>
      </div>
      <div class="product_data_col_2 col">
        <div>
          <img id="image_preview" src="" alt="">
        </div>
      </div>
      <div class="product_data_col_3 col">
        <div>
          <label for="">Mã sản phẩm</label>
          <input type="text" name="code" disabled="true" value="">
        </div>
        <div>
          <label for="">Tên sản phẩm</label>
          <input type="text" name="name">
          <div>
            <span></span>
          </div>
        </div>
        <div>
          <label for="">Mô tả</label>
          <input type="text" name="detail">
          <div>
            <span></span>
          </div>
        </div>
        <div>
          <label for="">Tên thương hiệu</label>
          <input type="text" name="brand">
          <div>
            <span></span>
          </div>
        </div>
        <div>
          <label for="">CPU</label>
          <input type="text" name="cpu">
          <div>
            <span></span>
          </div>
        </div>
        <div>
          <label for="">RAM</label>
          <input type="text" name="ram">
          <div>
            <span></span>
          </div>
        </div>
      </div>
      <div class="product_data_col_4 col">
        <div>
          <label for="">ROM</label>
          <input type="text" name="rom">
          <div>
            <span></span>
          </div>
        </div>
        <div>
          <label for="">Số lượng</label>
          <input type="text" name="quantity">
          <div>
            <span></span>
          </div>
        </div>
        <div>
          <label for="">Giá</label>
          <input type="text" name="cost" value="0">
          <div>
            <span></span>
          </div>
        </div>
        <div>
          <label for="">Nhà cung cấp</label>
          <select name="" id="select_provider" class="selection">
            
          </select>
          <div>
            <span></span>
          </div>
        </div>
      </div>
      <div class="product_data_col_5 col">
        <button class="btn_action_add btn" onclick="submitAdd()">Thêm</button>
        <button class="btn_action_edit btn" onclick="submitUpdate()">Sửa</button>
      </div>
    </div>
  </div>
  <div class="main_info">
    <table>
      <tr>
        <th>Ảnh</th>
        <th>Mã sản phẩm</th>
        <th>Tên sản phẩm</th>
        <th>Chi tiết</th>
        <th>Số lượng</th>
        <th>Giá</th>
        <th>Sửa</th>
        <th>Xóa</th>
      </tr>
      <tbody class="innerArea">
        
      </tbody>
    </table>
    <!-- <img src="./public/img/phone/apple-iphone-13-pro-max.jpg" style="width: 100px" alt=""> -->
    <div class="page">
      <ul>
        
      </ul>
    </div>
  </div>
</div>
<script src="./js/scriptProduct.js"></script>
