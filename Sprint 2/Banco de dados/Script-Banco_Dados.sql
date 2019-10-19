create table status_poste(
	id_status_poste int primary key identity(1,1),
    descricao_status_poste varchar (50)
);

create table nivel_usuario(
	id_nivel_usuario int primary key identity(1,1),
    descricao_nivel_usuario varchar (50)
);

create table poste(
	id_poste int primary key identity(1,1),
    luminosidade varchar (50),
    estado varchar (50),
    cidade varchar (50),
    bairro varchar (50),
    rua varchar (100),
    cep char (9),
    fk_status_poste int foreign key references status_poste (id_status_poste)
);

create table admin(
	id_admin int primary key identity(1,1),
    nome_admin varchar (100),
	sobrenome_admin varchar (100),
    email_admin varchar (100),
    senha_admin varchar (100),
    fk_nivel_usuario int foreign key references nivel_usuario (id_nivel_usuario)
);

create table usuario(
	id_usuario int primary key identity(1,1),
    nome_usuario varchar (100),
	sobrenome_usuario varchar (100),
    email_usuario varchar (100),
    senha_usuario varchar (100),
    fk_nivel_usuario int foreign key references nivel_usuario (id_nivel_usuario)
);


create table funcionario(
	id_funcionario int primary key identity (1,1),
    nome_funcionario varchar (100),
	sobrenome_funcionario varchar (100),
    email_funcionario varchar (100),
    senha_funcionario varchar (100),
    estado varchar (50),
    cidade varchar (50),
    bairro varchar (50),
    cep char (9),
    fk_nivel_usuario int foreign key references nivel_usuario (id_nivel_usuario)
);
 
create table admin_poste(
	id_admin_poste int primary key identity (1,1),
	fk_admin int foreign key references admin (id_admin),
	fk_poste int foreign key references poste (id_poste)
); 

create table funcionario_poste(
	id_funcionario_poste int primary key identity (1,1),
	fk_funcionario int foreign key references funcionario (id_funcionario),
	fk_poste int foreign key references poste (id_poste)
);
