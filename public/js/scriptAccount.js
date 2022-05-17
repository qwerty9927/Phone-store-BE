$(document).ready(function(){
  search_fetch("", "TAIKHOAN", 1) // Khởi tạo trang đầu
})

let checkAccount = 1;

function submitAdd(){
    if(!/[a-zvxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđA-Z][a-zvxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđA-Z0-9-_ ]{1,24}/.test($('.form_data input[name = "fullName"]').val())){
      $('.form_data input[name = "fullName"] + div span').text("Họ tên không thuộc khoảng 4 - 24 hay không lợp lệ")
      $('.form_data input[name = "fullName"]').focus()
      return false
    } else {
      $('.form_data input[name = "fullName"] + div span').text("")
    }
    if(!/[a-zA-Z0-9][a-zA-Z0-9-_ ]{1,24}/.test($('.form_data input[name = "username"]').val())){
      $('.form_data input[name = "username"] + div span').text("Username không thuộc khoảng 1 - 24 hay không lợp lệ")
      $('.form_data input[name = "username"]').focus()
      return false
    } else {
      $('.form_data input[name = "username"] + div span').text("")
      if(checkAccount == 0){
        $('.form_data input[name = "username"] + div span').text("Tài khoản đã tồn tại")
        $('.form_data input[name = "username"]').focus()
        return false
      }
    }
    if(!/[a-zA-Z0-9][a-zA-Z0-9-_ ]{7,24}/.test($('.form_data input[name = "password"]').val())){
      $('.form_data input[name = "password"] + div span').text("Password cần lớn hơn 8")
      $('.form_data input[name = "password"]').focus()
      return false
    } else {
      $('.form_data input[name = "password"] + div span').text("")
    }
    if($('.form_data input[name = "password"]').val() != $('.form_data input[name = "re_password"]').val()){
      $('.form_data input[name = "re_password"] + div span').text("Re Password khong trung")
      $('.form_data input[name = "re_password"]').focus()
      return false
    } else {
      $('.form_data input[name = "re_password"] + div span').text("")
    }
    if($('#role').val() == "0"){
      $('#role + div span').text("Cần lựa chọn")
      $('#role + div span').focus()
      return false
    } else {
      $('#role + div span').text("")
    }
    
    $.ajax({
      method: "POST",
      url: `http://localhost/mvc_app/Ajax/createData`,
      data: {
        access: "TAIKHOAN",
        info: {
          MATK: $('.form_data input[name = "code"]').val(),
          TENTK: $('.form_data input[name = "fullName"]').val(),
          Username: $('.form_data input[name = "username"]').val(),
          Password: $('.form_data input[name = "password"]').val(),
          MAQUYEN: $('#role').val(),
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
  if(!/[a-zvxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđA-Z][a-zvxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđA-Z0-9-_ ]{1,24}/.test($('.form_data input[name = "fullName"]').val())){
    $('.form_data input[name = "fullName"] + div span').text("Họ tên không thuộc khoảng 4 - 24 hay không lợp lệ")
    $('.form_data input[name = "fullName"]').focus()
    return false
  } else {
    $('.form_data input[name = "fullName"] + div span').text("")
  }
  if(!/[a-zA-Z0-9][a-zA-Z0-9-_ ]{1,24}/.test($('.form_data input[name = "username"]').val())){
    $('.form_data input[name = "username"] + div span').text("Username không thuộc khoảng 4 - 24 hay không lợp lệ")
    $('.form_data input[name = "username"]').focus()
    return false
  } else {
    $('.form_data input[name = "username"] + div span').text("")
    checkUser($('.form_data input[name = "username"]').val())
  }
  if(!/[a-zA-Z0-9][a-zA-Z0-9-_ ]{7,24}/.test($('.form_data input[name = "password"]').val())){
    $('.form_data input[name = "password"] + div span').text("Password cần lớn hơn 8")
    $('.form_data input[name = "password"]').focus()
    return false
  } else {
    $('.form_data input[name = "password"] + div span').text("")
  }
  if($('.form_data input[name = "password"]').val() != $('.form_data input[name = "re_password"]').val()){
    $('.form_data input[name = "re_password"] + div span').text("Re Password khong trung")
    $('.form_data input[name = "re_password"]').focus()
    return false
  } else {
    $('.form_data input[name = "re_password"] + div span').text("")
  }
  if($('#role').val() == "0"){
    $('#role + div span').text("Cần lựa chọn")
    $('#role + div span').focus()
    return false
  } else {
    $('#role + div span').text("")
  }
      
  let value = $('.form_data input[name = "code"]').val()
  $.ajax({
    method: "POST",
    url: `http://localhost/mvc_app/Ajax/updateData/${value}`,
    data: {
      access: "TAIKHOAN",
      startPoint: (parseInt(localStorage.getItem('page')) - 1) * 10,
      column: "MATK",
      info: {
        MATK: $('.form_data input[name = "code"]').val(),
        TENTK: $('.form_data input[name = "fullName"]').val(),
        Username: $('.form_data input[name = "username"]').val(),
        Password: $('.form_data input[name = "password"]').val(),
        MAQUYEN: $('#role').val(),
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
        column: "MATK",
        access: "TAIKHOAN",
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

function input_add_acc(subject, column){
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

  $.ajax({
    method: 'POST',
    url: `http://localhost/mvc_app/Ajax/selectAll`,
    data: {
      access: "QUYEN"
    }
  }).done(function (response){
    let result = JSON.parse(response)
    let string = "<option value='0'>--Option--</option>"
    result.forEach((item) => {
      string += `<option value="${item.MAQUYEN}">${item.TENQUYEN}</option>`
    })
    $("#role").html(string)
  })
}

function input_edit_acc(access){
  let _this = access
  let id = $(_this).closest('tr').children('td')[4].textContent
  console.log(id)
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
    if(index != 4){
      $(this).val($(_this).closest('tr').children('td')[index].textContent)
    } else {
      $(this).val("")
    }
  })

  //call Data cho dropdown Ma quyền (#role)
  $.ajax({
    method: 'POST',
    url: `http://localhost/mvc_app/Ajax/selectAll`,
    data: {
      access: "QUYEN"
    }
  }).done(function (response){
    let result = JSON.parse(response)
    let string = ""
    result.forEach((item) => {
      string += `<option value="${item.MAQUYEN}">${item.TENQUYEN}</option>`
    })
    $("#role").html(string)
    $(`#role option[value = ${id}]`).prop('selected', true)
  })
}

function checkUser(value){
  $.ajax({
    method: "POST",
    url: `http://localhost/mvc_app/Ajax/selectWithName/${value}`,
    data: {
      access: "TAIKHOAN",
      column: "Username"
    }
  }).done(function (response){
    let result = JSON.parse(response)
    console.log(response)
    if(result.length > 0){
      $('.form_data input[name = "username"] + div span').text("Tài khoản đã tồn tại")
      $('.form_data input[name = "username"]').focus()
      checkAccount = 0
    } else {
      $('.form_data input[name = "username"] + div span').text("")
      checkAccount = 1
    }
  })
}