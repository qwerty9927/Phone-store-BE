$(document).ready(function(){
  search_fetch("", "DONHANG", 1) // Khởi tạo trang đầu
  $( "#deliveryTime" ).datepicker({dateFormat: 'yy-mm-dd'})
  $( "#timeOfOrder" ).datepicker({dateFormat: 'yy-mm-dd'})
  $('#startDateFilter').datepicker({dateFormat: 'yy-mm-dd'})
  $('#endDateFilter').datepicker({dateFormat: 'yy-mm-dd'})
})


function submitAdd(){
  if($('.form_data input[name = "codeStaff"]').val() == ""){
    $('.form_data input[name = "codeStaff"] + div span').text("Mã không lợp lệ")
    return false
  } else {
    $('.form_data input[name = "codeStaff"] + div span').text("")
  }
  
  if($('.form_data input[name = "codeCustomer"]').val() == ""){
    $('.form_data input[name = "codeCustomer"] + div span').text("Mã không lợp lệ")
    return false
  } else {
    $('.form_data input[name = "codeCustomer"] + div span').text("")
  }

  if(!/[a-zA-ZÀ-ý][a-zA-Z0-9-_ ]{1,24}/.test($('.form_data input[name = "fullName"]').val())){
    $('.form_data input[name = "fullName"] + div span').text("Họ tên không thuộc khoảng 4 - 24 hay không lợp lệ")
    $('.form_data input[name = "fullName"]').focus()
    return false
  } else {
    $('.form_data input[name = "fullName"] + div span').text("")
  }

  if(!/[a-zA-Z][a-zA-Z0-9-_/]{1,24}/.test($('.form_data input[name = "address"]').val())){
    $('.form_data input[name = "address"] + div span').text("Địa chỉ không lợp lệ")
    $('.form_data input[name = "address"]').focus()
    return false
  } else {
    $('.form_data input[name = "address"] + div span').text("")
  }
  
  if($('#timeOfOrder').val() === ""){
    $('.form_data input[name = "timeOfOrder"] + div span').text("Cần chọn thời gian")
    $('.form_data input[name = "timeOfOrder"]').focus()
    return false
  } else {
    $('.form_data input[name = "timeOfOrder"] + div span').text("")
  }

  if($('#deliveryTime').val() === ""){
    $('.form_data input[name = "deliveryTime"] + div span').text("Cần chọn thời gian")
    $('.form_data input[name = "deliveryTime"]').focus()
    return false
  } else {
    $('.form_data input[name = "deliveryTime"] + div span').text("")
  }
  
  if(!checkTime($('#timeOfOrder').val(), $('#deliveryTime').val())){
    return false 
  }

  if(!/^[1-9][0-9]*$/.test($('.form_data input[name = "total"]').val())){
    $('.form_data input[name = "total"] + div span').text("Số không lợp lệ")
    $('.form_data input[name = "total"]').focus()
    return false
  } else {
    $('.form_data input[name = "total"] + div span').text("")
  }

  $.ajax({
    method: "POST",
    url: `http://localhost/mvc_app/Ajax/createData`,
    data: {
      access: "DONHANG",
      info: {
        idHD: $('.form_data input[name = "code"]').val(),
        TenNguoiNhan: $('.form_data input[name = "fullName"]').val(),
        DiaDiemGiaoHang: $('.form_data input[name = "address"]').val(),
        ThoiDiemDatHang: $('.form_data input[name = "timeOfOrder"]').val(),
        ThoiDiemGiaoHang: $('.form_data input[name = "deliveryTime"]').val(),
        TongTien: $('.form_data input[name = "total"]').val(),
        XuLy: 0,
        TrangThai: 1,
        Manv: $('.form_data input[name = "codeStaff"]').val(),
        Makh: $('.form_data input[name = "codeCustomer"]').val()
      }
    }
  }).done(function (response){
      let result = JSON.parse(response)
      console.log(result)
      if(result){
        $('.form_data').fadeOut('slow')
        alert("Tạo thành công")
        location.reload()
      } else {
        alert("Tạo thất bại")
      }
  })
}

function submitUpdate(){
  if(!/[a-zA-ZÀ-ý][a-zA-Z0-9-_ ]{1,24}/.test($('.form_data input[name = "fullName"]').val())){
    $('.form_data input[name = "fullName"] + div span').text("Họ tên không thuộc khoảng 4 - 24 hay không lợp lệ")
    $('.form_data input[name = "fullName"]').focus()
    return false
  } else {
    $('.form_data input[name = "fullName"] + div span').text("")
  }
  if(!/[a-zA-Z][a-zA-Z0-9-_/]{4,24}/.test($('.form_data input[name = "address"]').val())){
    $('.form_data input[name = "address"] + div span').text("Địa chỉ không lợp lệ")
    $('.form_data input[name = "address"]').focus()
    return false
  } else {
    $('.form_data input[name = "address"] + div span').text("")
  }

  if($('#timeOfOrder').val() === ""){
    $('.form_data input[name = "timeOfOrder"] + div span').text("Cần chọn thời gian")
    $('.form_data input[name = "timeOfOrder"]').focus()
    return false
  } else {
    $('.form_data input[name = "timeOfOrder"] + div span').text("")
  }

  if($('#deliveryTime').val() === ""){
    $('.form_data input[name = "deliveryTime"] + div span').text("Cần chọn thời gian")
    $('.form_data input[name = "deliveryTime"]').focus()
    return false
  } else {
    $('.form_data input[name = "deliveryTime"] + div span').text("")
  }

  if(!/^[1-9][0-9]*$/.test($('.form_data input[name = "total"]').val())){
    $('.form_data input[name = "total"] + div span').text("Số không lợp lệ")
    $('.form_data input[name = "total"]').focus()
    return false
  } else {
    $('.form_data input[name = "total"] + div span').text("")
  }
  
  let value = $('.form_data input[name = "code"]').val()
  $.ajax({
    method: "POST",
    url: `http://localhost/mvc_app/Ajax/updateData/${value}`,
    data: {
      access: "DONHANG",
      column: "idHD",
      info: {
        TenNguoiNhan: $('.form_data input[name = "fullName"]').val(),
        DiaDiemGiaoHang: $('.form_data input[name = "address"]').val(),
        ThoiDiemDatHang: $('.form_data input[name = "timeOfOrder"]').val(),
        ThoiDiemGiaoHang: $('.form_data input[name = "deliveryTime"]').val(),
        TongTien: $('.form_data input[name = "total"]').val(),
        XuLy: 0,
        TrangThai: 1,
        Manv: $('.form_data input[name = "codeStaff"]').val(),
        Makh: $('.form_data input[name = "codeCustomer"]').val()
      }
    }
  }).done(function (response){
      let result = JSON.parse(response)
      console.log(result)
      if(result){
        $('.form_data').fadeOut('slow')
        $('.btn_add').css('display', 'block')
        $('.btn_close_edit').css('display', 'none')
        alert("Sửa thành công")
        location.reload()
      } else {
        alert("Sửa thất bại")
      }
  })
}

function deleteData(access){
  if(confirm("Bạn có muốn xóa!")){
    let value = access.getAttribute('data');
    $.ajax({
      method: "POST",
      url: `http://localhost/mvc_app/Ajax/deleteData/${value}`,
      data: {
        column: "idHD",
        access: "DONHANG",
        info: {
          TrangThai: 0
        }
      }
    }).done(function (response){
      let result = JSON.parse(response)
      console.log(result)
      if(result){
        alert("Xóa thành công")
        location.reload()
      } else {
        alert("Xóa thất bại")
      }
    })
  }
}

function input_add_dh(subject, column){
  $('.customer_data').fadeToggle('slow')
  $('.customer_data').addClass('row')
  $('.customer_data').css('display', 'flex')

  $('.btn_action_add').css('display', 'block')
  $('.btn_action_edit').css('display', 'none')
  $('.form_data input:not(input[name = "code"])').val("")
  let date = new Date
  let string = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`
  $( "#timeOfOrder").val(string)
  $("#timeOfOrder").prop('disabled', true)
  $.ajax({
    method: "POST",
    url: 'http://localhost/mvc_app/Ajax/nextCode',
    data: {
      access: subject,
      column: column
    }
  }).done(function (response){
    let result = JSON.parse(response)
    $('.form_data input[name = "code"]').val(result)
  })
}

function input_edit_dh(access){
  let _this = access
  $('.customer_data').fadeIn("slow")
  $('.customer_data').css('display', 'flex')
  $('.block_add').css('display', 'none')

  $("#timeOfOrder").prop('disabled', false)
  $('.btn_action_edit').css('display', 'block')
  $('.btn_action_add').css('display', 'none')
  $('.btn_close_edit').css('display', 'block')
  $('.btn_close_edit').click(function (){
    $('.customer_data').fadeOut("slow")
    $('.btn_close_edit').css('display', 'none')
    $('.block_add').css('display', 'block')
  })
  
  $('.form_data input').each( function(index) {
    $(this).val($(_this).closest('tr').children('td')[index].textContent)
  })
}

function confirm(obj, value){
  $(obj).html('<i class="fa-solid fa-check" style="color: green"></i>')
  $.ajax({
    method: "POST",
    url: `http://localhost/mvc_app/Ajax/updateData/${value}`,
    data: {
      access: "DONHANG",
      column: "idHD",
      info: {
        XuLy: 1
      }
    }
  }).done(function (response){
    console.log(response)
  })
  obj.onclick = false
}

function checkTime(startTime, endTime){
  let arrTimeStart = startTime.split('-')
  let arrTimeEnd = endTime.split('-')
  if(arrTimeStart[0] > arrTimeEnd[0]){
    $('.form_data input[name = "timeOfOrder"] + div span').text("Thời gian không hợp lệ")
    $('.form_data input[name = "deliveryTime"] + div span').text("Thời gian không hợp lệ")
    return false
  } else {
    if(arrTimeStart[1] > arrTimeEnd[1]){
      $('.form_data input[name = "timeOfOrder"] + div span').text("Thời gian không hợp lệ")
      $('.form_data input[name = "deliveryTime"] + div span').text("Thời gian không hợp lệ")
      return false
    } else {
      if(arrTimeStart[2] > arrTimeEnd[2]){
        $('.form_data input[name = "timeOfOrder"] + div span').text("Thời gian không hợp lệ")
        $('.form_data input[name = "deliveryTime"] + div span').text("Thời gian không hợp lệ")
        return false
      }
    }
  }
  return true
}

function filter(){
  if($('#startDateFilter').val() === ""){
    $('#startDateFilter').focus()
    return false
  } else {
    $('#startDateFilter + div span').text("")
  }

  if($('#endDateFilter').val() === ""){
    $('#endDateFilter').focus()
    return false
  } else {
    $('#endDateFilter + div span').text("")
  }

  if(!checkTime($('#startDateFilter').val(), $('#endDateFilter').val())){
    alert("Thời gian tìm kiếm không hợp lệ")
    return false
  }

  $.ajax({
    method: "POST",
    url: `http://localhost/mvc_app/Ajax/selectAll`,
    data: {
      access: "DONHANG"
    }
  }).done(function (response){
    let result = JSON.parse(response)
    console.log(result)
    let arr = result.filter( item => {
      if(Date.parse($('#startDateFilter').val()) <= Date.parse(item['ThoiDiemDatHang']) 
        && Date.parse(item['ThoiDiemDatHang']) <= Date.parse($('#endDateFilter').val())){
          return item
      }
    })
    console.log(arr)
    handleResponseDH(arr)
  })
}

function sortList(obj, access, column){
  $(obj).toggleClass('active')
  if($(obj).hasClass('active')){
    $.ajax({
      method: "POST",
      url: `http://localhost/mvc_app/Ajax/sort`,
      data: {
        access: access,
        column: column,
        type: "ASC"
      }
    }).done(function (response){
      let result = JSON.parse(response)
      handleResponseDH(result)
    })
  } else {
    $.ajax({
      method: "POST",
      url: `http://localhost/mvc_app/Ajax/sort`,
      data: {
        access: access,
        column: column,
        type: "DESC"
      }
    }).done(function (response){
      let result = JSON.parse(response)
      handleResponseDH(result)
    })
  }
}