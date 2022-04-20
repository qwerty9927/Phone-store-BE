$(document).ready(function(){
  search_fetch("", "KHACHHANG", 1) // Khởi tạo trang đầu
  submitAdd()
  submitUpdate()
})

function submitAdd(){
  let checkName = 1
  let checkAddress = 1
  let checkPhone = 1
  $('.btn_action_add').click(function (){
    if(!/[a-zA-ZÀ-ý][a-zA-Z0-9-_ ]{4,24}/.test($('.add_data input[name = "fullName"]').val())){
      $('.add_data input[name = "fullName"] + div span').text("Họ tên không thuộc khoảng 4 - 24 hay không lợp lệ")
      checkName = 0
    } else {
      $('.add_data input[name = "fullName"] + div span').text("")
      checkName = 1
    }
    if(!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test($('.add_data input[name = "phoneNumber"]').val())){
      $('.add_data input[name = "phoneNumber"] + div span').text("Số điện thoại không lợp lệ")
      checkPhone = 0
    } else {
      $('.add_data input[name = "phoneNumber"] + div span').text("")
      checkPhone = 1
    }
    if(!/[a-zA-Z][a-zA-Z0-9-_/]{4,24}/.test($('.add_data input[name = "address"]').val())){
      $('.add_data input[name = "address"] + div span').text("Địa chỉ không lợp lệ")
      checkAddress = 0
    } else {
      $('.add_data input[name = "address"] + div span').text("")
      checkAddress = 1
    }
    if(checkName === 1 && checkAddress === 1 && checkPhone === 1){
      $.ajax({
        method: "POST",
        url: `http://localhost/mvc_app/Ajax/createData`,
        data: {
          access: "KHACHHANG",
          startPoint: (parseInt(localStorage.getItem('page')) - 1) * 10,
          info: {
            Makh: $('.add_data input[name = "codeCustomer"]').val(),
            Ten: $('.add_data input[name = "fullName"]').val(),
            DiaChi: $('.add_data input[name = "address"]').val(),
            SDT: $('.add_data input[name = "phoneNumber"]').val(),
            Email: $('.add_data input[name = "email"]').val(),
            MATK: 3
          }
        }
      }).done(function (response){
          let result = JSON.parse(response)
          console.log(result)
          if(result){
            let result = JSON.parse(response)
            let count = parseInt($('.quantity span').text()) + 1
            $('.quantity span').text(count)
            let pages = Math.ceil(count/10)
            let string = ""
            if(pages != 1){
              for(let i = 1;i <= pages;i++){
                  string += `<li data=${i} onclick="search_fetch('', 'KHACHHANG', ${i})">${i}</li>` // phân trang 
              }
            }
            $('.page ul').html(string)
            handleResponse(result)



            $('.add_data').fadeOut('slow')
            alert("Tạo thành công")
            // location.reload()
          } else {
            alert("Tạo thất bại")
          }
      })
    }
  })
}

function submitUpdate(){
  let checkName = 1
  let checkAddress = 1
  let checkPhone = 1
  $('.btn_action_edit').click(function (){
    if(!/[a-zA-ZÀ-ý][a-zA-Z0-9-_ ]{4,24}/.test($('.add_data input[name = "fullName"]').val())){
      $('.add_data input[name = "fullName"] + div span').text("Họ tên không thuộc khoảng 4 - 24 hay không lợp lệ")
      checkName = 0
    } else {
      $('.add_data input[name = "fullName"] + div span').text("")
      checkName = 1
    }
    if(!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test($('.add_data input[name = "phoneNumber"]').val())){
      $('.add_data input[name = "phoneNumber"] + div span').text("Số điện thoại không lợp lệ")
      checkPhone = 0
    } else {
      $('.add_data input[name = "phoneNumber"] + div span').text("")
      checkPhone = 1
    }
    if(!/[a-zA-Z][a-zA-Z0-9-_/]{4,24}/.test($('.add_data input[name = "address"]').val())){
      $('.add_data input[name = "address"] + div span').text("Địa chỉ không lợp lệ")
      checkAddress = 0
    } else {
      $('.add_data input[name = "address"] + div span').text("")
      checkAddress = 1
    }
    if(checkName === 1 && checkAddress === 1 && checkPhone === 1 ){
      let value = $('.add_data input[name = "codeCustomer"]').val()
      $.ajax({
        method: "POST",
        url: `http://localhost/mvc_app/Ajax/updateData/${value}`,
        data: {
          access: "KHACHHANG",
          startPoint: (parseInt(localStorage.getItem('page')) - 1) * 10,
          column: "Makh",
          info: {
            Ten: $('.add_data input[name = "fullName"]').val(),
            DiaChi: $('.add_data input[name = "address"]').val(),
            SDT: $('.add_data input[name = "phoneNumber"]').val(),
            Email: $('.add_data input[name = "email"]').val()
          }
        }
      }).done(function (response){
          let result = JSON.parse(response)
          console.log(result)
          if(result){
            // let result = JSON.parse(response)
            // let count = parseInt($('.quantity span').text())
            // let pages = Math.ceil(count/10)
            // let string = ""
            // for(let i = 2;i <= pages + 1;i++){
            //     string += `<li data=${i - 1} onclick="search_fetch('', '${subject}', ${i - 1})">${i - 1}</li>` // phân trang 
            // }
            // $('.page ul').html(string)
            // handleResponse(result)


            $('.add_data').fadeOut('slow')
            $('.btn_add').css('display', 'block')
            $('.btn_close_edit').css('display', 'none')
            alert("Sửa thành công")
            location.reload()
          } else {
            alert("Sửa thất bại")
          }
      })
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
        startPoint: (parseInt(localStorage.getItem('page')) - 1) * 10
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
