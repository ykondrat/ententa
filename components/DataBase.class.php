<?php
    class DataBase {
        public static function getConnection() {
            $params_path = ROOT.'/configuration/dataBaseConnection.php';
            $params = include($params_path);

            $dsn = "mysql:host={$params['host']};dbname={$params['dbname']}";
            try {
                $pdo = new PDO($dsn, $params['user'], $params['password']);
            } catch (PDOException $e) {
                echo "Connection error :". $e->getMessage();
                exit();
            }

            return ($pdo);
        }

        public static function createDataBase() {
            $params_path = ROOT.'/configuration/dataBaseConnection.php';
            $params = include($params_path);

            $dsn = "mysql:host={$params['host']};dbname=";
            try {
                $pdo = new PDO($dsn, $params['user'], $params['password']);
            } catch (PDOException $e) {
                echo "Connection error :" . $e->getMessage();
                exit();
            }

            $query = "CREATE DATABASE IF NOT EXISTS {$params['dbname']}";

            try {
                $pdo->query($query);
            } catch (PDOException $e) {
                echo "Error: Can't CREATE DataBase - " . $e->getMessage();
                exit();
            }
        }

        public static function createTables() {
            $pdo = self::getConnection();
            $query_path = ROOT.'/configuration/queries.php';
            $queries = include($query_path);

            try {
                $query = $pdo->prepare($queries['createUsers']);
                $query->execute();
            } catch (PDOException $e) {
                echo "Error: CAN'T CREATE TABLE - user" . $e->getMessage();
                exit();
            }

        }
    }
