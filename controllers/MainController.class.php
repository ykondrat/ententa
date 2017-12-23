<?php
    include_once ROOT . '/models/ModelMain.class.php';

    class MainController {
        public function actionStart() {
            ModelMain::start();

            return (true);
        }

        public function actionAdd() {
            ModelMain::add($_POST);

            return (true);
        }

    }
