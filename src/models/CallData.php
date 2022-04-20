<?php
  class CallData extends DB{
    function __construct(){
      parent::__construct();
    }  
    
    function search(){
      $sql = "";
      if($_POST['access'] == 'KHACHHANG'){
        $sql = "SELECT * FROM KHACHHANG WHERE 
          Makh LIKE '{$_POST['searchParameter']}%' OR
          Ten LIKE '{$_POST['searchParameter']}%' OR
          SDT LIKE '{$_POST['searchParameter']}%' OR
          Email LIKE '{$_POST['searchParameter']}%' LIMIT {$_POST['startPoint']}, 10"
        ;
        $sqlCount = "SELECT COUNT(*) as quantity FROM KHACHHANG WHERE 
          Makh LIKE '{$_POST['searchParameter']}%' OR
          Ten LIKE '{$_POST['searchParameter']}%' OR
          SDT LIKE '{$_POST['searchParameter']}%' OR
          Email LIKE '{$_POST['searchParameter']}%'"
        ;
        $count = $this->select($sqlCount);
        $value =  $this->select($sql);
        $arrTemp = array(
          "count" => $count[0]['quantity'],
          "value" => $value,
        );
        return $arrTemp;
      } else if($_POST['access'] == 'NHANVIEN'){
        $sql = " SELECT * FROM NHANVIEN WHERE
          Manv LIKE '{$_POST['searchParameter']}%' OR
          Ten LIKE '{$_POST['searchParameter']}%' OR
          SDT LIKE '{$_POST['searchParameter']}%'"
        ;
      }
    }
  
    function nextCode(){
      $column = $_POST['column'];
      $sql = "SELECT * FROM {$_POST['access']} ORDER BY $column DESC LIMIT 1";
      return $this->select($sql)[0]["$column"] + 1;
    }
  }
?>
