<?php
  class LayoutModel extends DB{
    private $result = "";
    function __construct(){
      parent::__construct();
    }

    function getCategory(){
      $sql = "SELECT DM.MADM, DM.TENDM FROM Q_DM AS QD, DANHMUC AS DM WHERE QD.MADM = DM.MADM AND QD.MAQUYEN = '{$_SESSION['role']}'";
      $this->result = $this->select($sql);
      return $this->result;
    }

    function getStringUrl(){
      return array("./QLKH", "./QLNV", "./QLSP", "./QLDH", "./QLHD", "./QLDT", "./QLACCOUNT");
    }

    function getStringIcon(){
      return array("fa-solid fa-users-line", "ion ion-person", "fa-solid fa-boxes-stacked", "ion ion-bag",
        "ion-document-text", "ion ion-stats-bars", "ion-card"
      );
    }

    function getUsername(){
      return $_SESSION['username'];
    }
  }
?>