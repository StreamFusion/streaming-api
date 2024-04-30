CREATE TABLE IF NOT EXISTS `users`
(
    `id`                bigint(20)   NOT NULL AUTO_INCREMENT,
    `name`              varchar(255) NOT NULL,
    `role_id`           bigint(20)   NOT NULL,
    `phone_number`      varchar(255),
    `email`             varchar(255) NOT NULL,
    `email_verified_at` timestamp,
    `password`          varchar(255) NOT NULL,
    `deleted_at`        timestamp,
    `remember_token`    varchar(100),
    `created_at`        datetime,
    `updated_at`        datetime,
    PRIMARY KEY (`id`)
) DEFAULT CHARSET = utf8;

SELECT * FROM users;