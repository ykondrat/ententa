<?php

    class ModelMain {
        public static function start() {
            require_once ROOT . '/views/viewMain.php';
        }

        public static function add($data) {
            $pdo = DataBase::getConnection();
            $arr = [];
            $query = $pdo->prepare("INSERT INTO `msg` (email, msg, name, phone) VALUES (?, ?, ?, ?)");
            $query->execute([$data['email'], $data['msg'], $data['name'], $data['phone']]);

            $headers = "Content-Type: text/html; charset=utf-8"."\r\n";
            $subject = "ENTENTA";
            $r1 = "<html><head><style></style><head>";
            $r2 = "<body><h1>ENTENTA</h1>";
            $r3 = "<article><p>Hello, {$data['name']}!</p><p>Thanks for your feed-back</p><p>We will connect in the nearest time.</p>";
            $r4 = "<a href='http://localhost:8080/ententa' class='button'>Back to ENTENTA</a></article>";
            $r5 = "<p>Best regards, ENTENTA</p></body></html>";
            $message = $r1.$r2.$r3.$r4.$r5;
            mail($data['email'], $subject, $message, $headers);

            // $arr = 
            echo "OK";
        }
    }
