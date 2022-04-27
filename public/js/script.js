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
    }
  })
}

// function input_add(subject, column){
//   $('.form_data').fadeToggle('slow')
//   $('.form_data').css('display', 'flex')
//   $('.btn_action_add').css('display', 'block')
//   $('.btn_action_edit').css('display', 'none')
//   $('.form_data input:not(input[name = "code"])').val("")
//   $.ajax({
//     method: "POST",
//     url: 'http://localhost/mvc_app/Ajax/nextCode',
//     data: {
//       access: subject,
//       column: column
//     }
//   }).done(function (response){
//     let result = JSON.parse(response)
//     $('.form_data input[name = "code"]').val(result)
//   })
// }

// function input_edit(access){
//   let _this = access
//   $('.form_data').fadeIn("slow")
//   $('.form_data').css('display', 'flex')
//   $('.btn_add').css('display', 'none')
//   $('.btn_action_edit').css('display', 'block')
//   $('.btn_action_add').css('display', 'none')
//   $('.btn_close_edit').css('display', 'block')
//   $('.btn_close_edit').click(function (){
//     $('.form_data').fadeOut("slow")
//     $('.btn_close_edit').css('display', 'none')
//     $('.btn_add').css('display', 'block')
//   })
  
//   $('.form_data input').each( function(index) {
//     $(this).val($(_this).closest('tr').children('td')[index].textContent)
//   })
// }

function handleResponseKH(arr){
  let string = arr.map( item => {
    return `
      <tr>
        <td>${item.Makh}</td>
        <td id='name'>${item.Ten}</td>
        <td>${item.DiaChi}</td>
        <td>${item.SDT}</td>
        <td>${item.Email}</td>
        <td class='btn_edit' data=${item.Makh} onclick="input_edit_kh(this)">
          <i class="fa-solid fa-pen-to-square"></i>
        </td>
        <td class='btn_delete' data=${item.Makh} onclick="deleteData(this)">
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
      <tr>
        <td>${item.Manv}</td>
        <td id='name'>${item.Ten}</td>
        <td>${item.DiaChi}</td>
        <td>${item.SDT}</td>
        <td>${item.Email}</td>
        <td class='btn_edit' data=${item.Manv} onclick="input_edit_nv(this)">
          <i class="fa-solid fa-pen-to-square"></i>
        </td>
        <td class='btn_delete' data=${item.Manv} onclick="deleteData(this)">
          <i class="fa-solid fa-trash-can"></i>
        </td>
      </tr>
    `
  })
  $('.innerArea').html(string)
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


