let type = 1
function search_fetch(value, subject, page){
  $.ajax({
    method: "POST", 
    url: 'http://localhost/mvc_app/Ajax/search',
    data: {
      access: subject,
      startPoint: (page - 1) * 10,
      searchParameter: value
    }
  }).done(function (response){ 
    let result = JSON.parse(response)
    
    $('.quantity span').text(result.count)
    let pages = Math.ceil(result.count/10)
    let string = ""
    if(pages != 1){
      for(let i = 1;i <= pages;i++){
          string += `<li data=${i} onclick="search_fetch('${value}', '${subject}', ${i})">${i}</li>` // phân trang 
      }
    }
    console.log(string)
    $('.page ul').html(string)
    switch(subject){
      case "KHACHHANG":
        handleResponseKH(result.value)
        break;
      case "NHANVIEN":
        handleResponseNV(result.value)
        break;
      case "SANPHAM":
        handleResponseSP(result.value)
        break;
      case "DONHANG":
        handleResponseDH(result.value)
        break;
      case "TAIKHOAN":
        handleResponseTK(result.value)
        break;
      case "NHACUNGCAP":
        handleResponseNCC(result.value)
        break;
    }
  })
}

function handleResponseKH(arr){
  let string = arr.map( item => {
    return `
      <tr ${type != 1 ? `onclick="getMakh(${item.Makh})"`: ""}>
        <td>${item.Makh}</td>
        <td id='name'>${item.Ten}</td>
        <td>${item.DiaChi}</td>
        <td>${item.SDT}</td>
        <td>${item.Email}</td>
        <td>${item.MATK}</td>
        ${
          type == 1
          ?
          `<td class='btn_edit' data=${item.Makh} onclick="input_edit_kh(this)">
            <i class="fa-solid fa-pen-to-square"></i>
          </td>
          <td class='btn_delete' data=${item.Makh} onclick="deleteData(this)">
            <i class="fa-solid fa-trash-can"></i>
          </td>`
          :
          ""
        }
      </tr>
    `
  })
  if(type == 1){
    $('.innerArea').html(string)
  } else {
    $('.innerTable').html(string)
    type = 1
  }
}

function handleResponseTK(arr){
  let string = arr.map( item => {
    return `
      <tr ${type != 1 ? `onclick="getMakh(${item.Makh})"`: ""}>
        <td>${item.MATK}</td>
        <td id='name'>${item.TENTK}</td>
        <td>${item.Username}</td>
        <td>${item.Password}</td>
        <td>${item.MAQUYEN}</td>
        ${
          type == 1
          ?
          `<td class='btn_edit' data=${item.MATK} onclick="input_edit_acc(this)">
            <i class="fa-solid fa-pen-to-square"></i>
          </td>
          <td class='btn_delete' data=${item.MATK} onclick="deleteData(this)">
            <i class="fa-solid fa-trash-can"></i>
          </td>`
          :
          ""
        }
      </tr>
    `
  })
  if(type == 1){
    $('.innerArea').html(string)
  } else {
    $('.innerTable').html(string)
    type = 1
  }
}

function handleResponseNCC(arr){
  let string = arr.map( item => {
    return `
      <tr>
        <td>${item.MaNCC}</td>
        <td>${item.Ten}</td>
        <td>${item.DiaChi}</td>
        <td>${item.SDT}</td>
        <td class='btn_edit' data=${item.MaNCC} onclick="input_edit_ncc(this)">
          <i class="fa-solid fa-pen-to-square"></i>
        </td>
        <td class='btn_delete' data=${item.MaNCC} onclick="deleteData(this)">
          <i class="fa-solid fa-trash-can"></i>
        </td>
      </tr>
    `
  })
  $('.innerArea').html(string)
}

function handleResponseNV(arr){
  let string = arr.map( item => {
    return `
      <tr ${type != 1 ? `onclick="getManv(${item.Manv})"`: ""}>
        <td>${item.Manv}</td>
        <td id='name'>${item.Ten}</td>
        <td>${item.DiaChi}</td>
        <td>${item.SDT}</td>
        <td>${item.Email}</td>
        <td>${item.MATK}</td>
        ${
          type == 1
          ?
          `<td class='btn_edit' data=${item.Manv} onclick="input_edit_nv(this)">
            <i class="fa-solid fa-pen-to-square"></i>
          </td>
          <td class='btn_delete' data=${item.Manv} onclick="deleteData(this)">
            <i class="fa-solid fa-trash-can"></i>
          </td>`
          :
          ""
        }
        
      </tr>
    `
  })
  if(type == 1){
    $('.innerArea').html(string)
  } else {
    $('.innerTable').html(string)
  }
}

function handleResponseSP(arr){
  let string = arr.map( item => {
    return `
      <tr>
        <td><img src="./public/img/phone/${item.urlHinh}"></td>
        <td>${item.idCD}</td>
        <td id='name'>${item.TenCD}</td>
        <td>${item.MoTa}</td>
        <td>${item.SoLuongCD}</td>
        <td>${item.Gia}</td>
        <td class='btn_edit' data=${item.idCD} onclick="input_edit_sp(this)">
          <i class="fa-solid fa-pen-to-square"></i>
        </td>
        <td class='btn_delete' data=${item.idCD} onclick="deleteData(this)">
          <i class="fa-solid fa-trash-can"></i>
        </td>
      </tr>
    `
  })
  $('.innerArea').html(string)
  
}

function handleResponseDH(arr){
  let string = arr.map( item => {
    return `
      <tr>
        <td>${item.idHD}</td>
        <td>${item.Manv}</td>
        <td>${item.Makh}</td>
        <td id='name'>${item.TenNguoiNhan}</td>
        <td>${item.DiaDiemGiaoHang}</td>
        <td>${item.ThoiDiemDatHang}</td>
        <td>${item.ThoiDiemGiaoHang}</td>
        <td>${item.TongTien}</td>
        ${item.XuLy == 1 
          ? '<td class="handleBill"><i class="fa-solid fa-check" style="color: green"></i></td>' 
          : `<td class="handleBill" onclick="confirm(this, ${item.idHD})">Chờ xử lý</td>`
        }
        <td class="detailBill" onclick="detail(this, ${item.idHD})">
        <p>Chi tiết đơn hàng</p>
          <div class="detailData" data="${item.idHD}">
          detail
          </div>
        </td>
        <td class='btn_edit' data=${item.idHD} onclick="input_edit_dh(this)">
          <i class="fa-solid fa-pen-to-square"></i>
        </td>
        <td class='btn_delete' data=${item.idHD} onclick="deleteData(this)">
          <i class="fa-solid fa-trash-can"></i>
        </td>
      </tr>
    `
  })
  $('.innerArea').html(string)
}

function detail(obj,id){
  $('.detailData').each(function (){
    if(this.getAttribute('data') != id && this.classList.contains('active')){
      this.classList.remove('active')
    }
  })
  obj.childNodes[3].classList.toggle('active')
  if(obj.childNodes[3].classList.contains('active')){
    let result
    $.ajax({
      method: "POST",
      url: `http://localhost/mvc_app/Ajax/selectWithCondition/${id}`,
      data: {
        access: "CHITIETDONHANG",
        column: "idHD"
      }
    }).done(function (response){
      response = JSON.parse(response)
      result = response.map(item => {
        return `
          <p>ID sản phẩm : <span>${item.idCD}</span></p>
          <p>IMEI : <span>${item.IMEI}</span></p>
          <p>Số lượng : <span>${item.SoLuong}</span></p>
          <p>Giá : <span>${item.Gia}</span></p>
        `
      })
      obj.childNodes[3].innerHTML = result.join('')
    })
  }
}

function getMatk(id){
  $('input[name ="account"]').val(id)
  $('.inner_Alert').removeClass('active')
  type = 1
}

function getManv(id){
  $('input[name ="codeStaff"]').val(id)
  $('.inner_Alert').removeClass('active')
  type = 1
}

function getMakh(id){
  $('input[name ="codeCustomer"]').val(id)
  $('.inner_Alert').removeClass('active')
  type = 1
}

function handleResponseSubTK(arr){
  console.log(arr)
  let string = arr.map( item => {
    return `
      <tr onclick="getMatk(${item.MATK})">
        <td>${item.MATK}</td>
        <td id='name'>${item.TENTK}</td>
        <td>${item.Username}</td>
        <td>${item.Password}</td>
        <td>${item.MAQUYEN}</td>
      </tr>
    `
  })
  $('.innerTable').html(string)
}
function chooseObj(access){
  type = 2
  search_fetch('',access, 1)
  let account = `
    <tr>
      <th>Mã tài khoản</th>
      <th>Tên tài khoản</th>
      <th>Username</th>
      <th>Password</th>
      <th>Mã quyền</th>
    </tr>
  `
  let person = `
    <tr>
      <th>Mã nhân viên</th>
      <th>Họ Tên</th>
      <th>Địa chỉ</th>
      <th>Số điện thoại</th>
      <th>Email</th>
      <th>Mã tài khoản</th>
    </tr>
  `
  $('.inner_Alert').toggleClass('active')
  let string = `
        <div class="board">
          <div class="title_account">
            <label>Account</label>
          </div>
          <div class="search_account">
            <label style="font-size: 16px" for="">Tìm kiếm </label>
            <input onkeyup="search_fetch(this.value,'${access}', 1)" style="margin-left: 20px; height: 40px; width: 200px; padding: 10px; border-radius: 5px; outline: none; border: 1px solid #ccc" type="text" name="code" placeholder="Search">
          </div>
          <div id="table-wrapper">
            <div id="table-scroll">
              <table>
                ${access == "TAIKHOAN" ? account : person}
                <tbody class="innerTable">

                </tbody>
              </table>
            </div>
          </div>
          
          <div class="btn-close" onclick="$('.inner_Alert').removeClass('active')">
            <i class="fas fa-times"></i>
          </div>
        </div>
  `
  $('.inner_Alert').html(string)
}
