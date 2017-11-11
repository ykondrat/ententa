<?php
    class mainModel {

        public static function start() {
            require_once (ROOT.'/public/index.php');
        }

		public static function set() {
            echo json_encode(array('qwer'=>'qwer'));
            //exit();
            // $headers = "Content-Type: text/html; charset=utf-8"."\r\n";
            // $subject = "Camagru New Password";
            // $r1 = "<html><head><style>span {font-weight: bold;}</style><head>";
            // $r2 = "<body><h1>Camagru New Password</h1>";
            // $r3 = "<article><p>Hi, srfsffsee aef!</p><p>Your new password on <span>Camagru</span> site</p><p><span>esfsrf</span></p>";
            // $r4 = "<p>Best regards, Camagru Dev</p></body></html>";
            // $message = $r1.$r2.$r3.$r4;
            //
            // mail('kondratyev.yevhen@gmail.com', $subject, $message, $headers);
        }
    }
