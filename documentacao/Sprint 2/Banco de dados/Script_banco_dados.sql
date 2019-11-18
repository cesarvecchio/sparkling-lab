
create table sindico(
	id_sindico int primary key identity(1,1),
	nome varchar(45),
	sobrenome varchar(50),
	cpf char(11),
	email varchar(60),
	senha varchar(45)
);
go

create table status_lampada(
	id_status_lampada int primary key identity(1,1),
	descricao varchar(45),
);
go

create table condominio(
	id_condominio int primary key identity(1,1),
	nome varchar(45),
	imagem text,
	cidade varchar (50),
	bairro varchar (50),
	cep char (8),
	complemento varchar (50),
	numero int,
	logradouro varchar (50),
	fk_sindico int foreign key references sindico(id_sindico)
);
go

create table lampada(
	id_lampada int primary key identity(1,1),
	local varchar(45),
	imagem text,
	fk_condominio int foreign key references condominio(id_condominio),
	fk_status_lampada int foreign key references status_lampada(id_status_lampada)
);
go

create table grafico_lampada(
	id_grafico_lampada int primary key identity(1,1),
	data datetime,
	volts decimal,
	fk_lampada int foreign key references lampada(id_lampada)
);
go


insert into status_lampada (descricao) values ('Ativo'), ('Inativo'), ('Mau Funcionamento')