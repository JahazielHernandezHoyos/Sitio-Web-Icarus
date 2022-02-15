
create database vitaHosting;

drop database vitaHosting;

-- show databases
use vitaHostings;

create table users (
    id_user int auto_increment primary key,
    name_user varchar(50) not null,
    user_password text not null,
    last_Name varchar(100) not null,
    date_of_birth date not null,
    telephone int(9) not null,
    email varchar(50) not null,
    country varchar(50) not null,
    province varchar(50) not null,
    town varchar(50) not null,
    street varchar(50) not null,
    portal_number int not null,
    postal_code int not null,
    profile_image blob not null
);

create table bank_data(
    card_number int (16),
    cvv int(3),
    expiration_date date,
    id_user int,
    foreign key (id_user) references users(id_user)
);


create table products(
    id_product int auto_increment primary key,
    name_product varchar(100) unique,
    amount int,
    descriptions text
);

create table shopping_list (
    id_list int primary key,
    name_products text,
    amount int,
    name_product text,
    id_product int,
    foreign key (id_product) references products(id_product)
);