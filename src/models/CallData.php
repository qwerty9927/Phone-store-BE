<?php
  class CallData extends DB{
    function __construct(){
      parent::__construct();
    }  
    
    function selectWithCondition($params){
      $sql = 
        "SELECT * 
        FROM {$_POST['access']} 
        WHERE {$_POST['column']} = $params[0]";
      return $this->select($sql)[0];
    }

    function selectAll($params){
      $sql = 
        "SELECT * 
        FROM {$_POST['access']}"; 
      return $this->select($sql);
    }

    function search(){
      $sql = "";
      if($_POST['access'] == 'KHACHHANG'){
        $sql = "SELECT * FROM KHACHHANG WHERE 
          TrangThai = 1 AND
          (
            Makh LIKE '{$_POST['searchParameter']}%' OR
            Ten LIKE '{$_POST['searchParameter']}%' OR
            SDT LIKE '{$_POST['searchParameter']}%' OR
            Email LIKE '{$_POST['searchParameter']}%'
          ) LIMIT {$_POST['startPoint']}, 10"
        ;
        $sqlCount = "SELECT COUNT(*) as quantity FROM KHACHHANG WHERE 
          TrangThai = 1 AND
          (
            Makh LIKE '{$_POST['searchParameter']}%' OR
            Ten LIKE '{$_POST['searchParameter']}%' OR
            SDT LIKE '{$_POST['searchParameter']}%' OR
            Email LIKE '{$_POST['searchParameter']}%'
          )"
        ;
        $count = $this->select($sqlCount);
        $value =  $this->select($sql);
        $arrTemp = array(
          "count" => $count[0]['quantity'],
          "value" => $value,
        );
        return $arrTemp;
      } else if($_POST['access'] == 'NHANVIEN'){
        $sql = "SELECT * FROM NHANVIEN WHERE 
          TrangThai = 1 AND 
          (
            Manv LIKE '{$_POST['searchParameter']}%' OR
            Ten LIKE '{$_POST['searchParameter']}%' OR
            SDT LIKE '{$_POST['searchParameter']}%' OR
            Email LIKE '{$_POST['searchParameter']}%'
          ) LIMIT {$_POST['startPoint']}, 10"
        ;
        $sqlCount = "SELECT COUNT(*) as quantity FROM NHANVIEN WHERE 
          TrangThai = 1 AND 
          (
            Manv LIKE '{$_POST['searchParameter']}%' OR
            Ten LIKE '{$_POST['searchParameter']}%' OR
            SDT LIKE '{$_POST['searchParameter']}%' OR
            Email LIKE '{$_POST['searchParameter']}%'
          )"
        ;
        $count = $this->select($sqlCount);
        $value =  $this->select($sql);
        $arrTemp = array(
          "count" => $count[0]['quantity'],
          "value" => $value,
        );
        return $arrTemp;
      } else if($_POST['access'] == 'SANPHAM'){
        $sql = "SELECT * FROM SANPHAM WHERE 
          TrangThai = 1 AND
          (
            idCD LIKE '{$_POST['searchParameter']}%' OR
            TenCD LIKE '{$_POST['searchParameter']}%'
          ) LIMIT {$_POST['startPoint']}, 10"
        ;
        $sqlCount = "SELECT COUNT(*) as quantity FROM SANPHAM WHERE 
          TrangThai = 1 AND
          (
            idCD LIKE '{$_POST['searchParameter']}%' OR
            TenCD LIKE '{$_POST['searchParameter']}%'
          )"
        ;
        $count = $this->select($sqlCount);
        $value =  $this->select($sql);
        $arrTemp = array(
          "count" => $count[0]['quantity'],
          "value" => $value,
        );
        return $arrTemp;
      }
    }
  
    function nextCode(){
      $column = $_POST['column'];
      $sql = "SELECT * FROM {$_POST['access']} ORDER BY $column DESC LIMIT 1";
      return $this->select($sql)[0]["$column"] + 1;
    }
  }
?>
