$(document).ready(function(){
  search_fetch("", "KHACHHANG", 1) // Khởi tạo trang đầu
})

function submitAdd(){
    if(!/[a-zA-ZÀ-ý][a-zA-Z0-9-_ ]{1,24}/.test($('.form_data input[name = "fullName"]').val())){
      $('.form_data input[name = "fullName"] + div span').text("Họ tên không thuộc khoảng 4 - 24 hay không lợp lệ")
      $('.form_data input[name = "fullName"]').focus()
      return false
    } else {
      $('.form_data input[name = "fullName"] + div span').text("")
    }
    if(!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test($('.form_data input[name = "phoneNumber"]').val())){
      $('.form_data input[name = "phoneNumber"] + div span').text("Số điện thoại không lợp lệ")
      $('.form_data input[name = "phoneNumber"]').focus()
      return false
    } else {
      $('.form_data input[name = "phoneNumber"] + div span').text("")
    }
    if(!/[a-zA-Z][a-zA-Z0-9-_/]{4,24}/.test($('.form_data input[name = "address"]').val())){
      $('.form_data input[name = "address"] + div span').text("Địa chỉ không lợp lệ")
      $('.form_data input[name = "address"]').focus()
      return false
    } else {
      $('.form_data input[name = "address"] + div span').text("")
    }
      $.ajax({
        method: "POST",
        url: `http://localhost/mvc_app/Ajax/createData`,
        data: {
          access: "KHACHHANG",
          startPoint: (parseInt(localStorage.getItem('page')) - 1) * 10,
          info: {
            Makh: $('.form_data input[name = "code"]').val(),
            Ten: $('.form_data input[name = "fullName"]').val(),
            DiaChi: $('.form_data input[name = "address"]').val(),
            SDT: $('.form_data input[name = "phoneNumber"]').val(),
            Email: $('.form_data input[name = "email"]').val(),
            MATK: $('.form_data input[name = "account"]').val(),
            TrangThai: 1
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
    if(!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test($('.form_data input[name = "phoneNumber"]').val())){
      $('.form_data input[name = "phoneNumber"] + div span').text("Số điện thoại không lợp lệ")
      $('.form_data input[name = "phoneNumber"]').focus()
      return false
    } else {
      $('.form_data input[name = "phoneNumber"] + div span').text("")
    }
    if(!/[a-zA-Z][a-zA-Z0-9-_/]{4,24}/.test($('.form_data input[name = "address"]').val())){
      $('.form_data input[name = "address"] + div span').text("Địa chỉ không lợp lệ")
      $('.form_data input[name = "address"]').focus()
      return false
    } else {
      $('.form_data input[name = "address"] + div span').text("")
    }
      let value = $('.form_data input[name = "code"]').val()
      $.ajax({
        method: "POST",
        url: `http://localhost/mvc_app/Ajax/updateData/${value}`,
        data: {
          access: "KHACHHANG",
          startPoint: (parseInt(localStorage.getItem('page')) - 1) * 10,
          column: "Makh",
          info: {
            Ten: $('.form_data input[name = "fullName"]').val(),
            DiaChi: $('.form_data input[name = "address"]').val(),
            SDT: $('.form_data input[name = "phoneNumber"]').val(),
            Email: $('.form_data input[name = "email"]').val(),
            MATK: $('.form_data input[name = "account"]').val(),
            TrangThai: 1
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
        column: "Makh",
        access: "KHACHHANG",
        startPoint: (parseInt(localStorage.getItem('page')) - 1) * 10,
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
        alert("Xóa thất bại vì là tham chiếu khóa ngoại")
      }
    })
  }
}

function input_add_kh(subject, column){
  $('.customer_data').fadeToggle('slow')
  $('.customer_data').addClass('row')
  $('.customer_data').css('display', 'flex')

  $('.btn_action_add').css('display', 'block')
  $('.btn_action_edit').css('display', 'none')
  $('.form_data input:not(input[name = "code"])').val("")
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

function input_edit_kh(access){
  let _this = access
  $('.customer_data').fadeIn("slow")
  $('.customer_data').css('display', 'flex')
  $('.block_add').css('display', 'none')


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
