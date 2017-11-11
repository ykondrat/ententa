<?php
    include_once ROOT.'/model/mainModel.class.php';

    class mainController {
        public function actionStart() {
            mainModel::start();

            return (true);
        }

        public function actionSet() {
        	mainModel::set();

        	return (true);
        }
    }
