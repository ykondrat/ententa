<?php
    session_start();

    define('ROOT', dirname(__FILE__));
    require_once(ROOT.'/components/Router.class.php');
    require_once(ROOT.'/components/DataBase.class.php');
    
    if (!isset($_SESSION['logged_user'])) {
        $_SESSION['logged_user'] = "";
    }

    DataBase::createTable('users');

    $router = new Router();
    $router->runRouter();
