<?php
    $query = array(
        'createUsers' => 'CREATE TABLE IF NOT EXISTS `msg` (user_id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, `phone` VARCHAR(20) NOT NULL, email VARCHAR(255) NOT NULL, msg VARCHAR(1000) NOT NULL)'
    );

    return ($query);