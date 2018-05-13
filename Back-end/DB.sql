CREATE TABLE [Category] (
	[Id] INT NOT NULL PRIMARY KEY,
	[Name]	VARCHAR(20) NOT NULL
);


CREATE TABLE [Products] (
	[Id]				INT			NOT NULL			PRIMARY KEY,
	[Image]		VARCHAR(max)	NOT NULL,
	[Name]		VARCHAR(20)		NOT NULL,
	[Summary]		VARCHAR(50)		NULL,
	[Price]		DECIMAL			NOT NULL,
	[Rating]	DECIMAL	NULL,
	[CategoryId] INT NOT NULL FOREIGN KEY REFERENCES [dbo].[Category]([Id])
);


INSERT INTO dbo.Category ( Id ,
                           Name )
VALUES ( 1 , -- Id - int
         'Vaisiai'  -- Name - varchar(20)
    ),
	( 2 , -- Id - int
         'Daržovės'  -- Name - varchar(20)
    ),
	( 3 , -- Id - int
         'Saldainiai'  -- Name - varchar(20)
    ),
	( 4 , -- Id - int
         'Sausainiai'  -- Name - varchar(20)
    ),
	( 5 , -- Id - int
         'Kepiniai'  -- Name - varchar(20)
    );

INSERT INTO dbo.Products ( Id ,
                           Image ,
                           Name ,
                           Summary ,
                           Price,
						   Rating,
						   CategoryId)
VALUES ( 1 ,  -- Id - int
         'http://juliandance.org/wp-content/uploads/2016/01/RedApple.jpg' ,  -- Image - int
         'obuolys' , -- Name - varchar(20)
         'Red' , -- Summary - varchar(50)
         2.01, -- Price - decimal
		 2, -- Rating - decimal
		 1
    ),
	( 2 ,  -- Id - int
         'http://juliandance.org/wp-content/uploads/2016/01/RedApple.jpg' ,  -- Image - int
         'obuolys' , -- Name - varchar(20)
         'Zalias' , -- Summary - varchar(50)
         2.54, -- Price - decimal
		 3, -- Rating - decimal
		 1
    ),
	( 3 ,  -- Id - int
         'http://juliandance.org/wp-content/uploads/2016/01/RedApple.jpg' ,  -- Image - int
         'obuolys' , -- Name - varchar(20)
         'Red' , -- Summary - varchar(50)
         2.01, -- Price - decimal
		 4, -- Rating - decimal
		 1
    ),
	( 4 ,  -- Id - int
         'http://juliandance.org/wp-content/uploads/2016/01/RedApple.jpg' ,  -- Image - int
         'obuolys' , -- Name - varchar(20)
         'Geltonas' , -- Summary - varchar(50)
         1.11, -- Price - decimal
		 2, -- Rating - decimal
		 1
    ),
	( 5 ,  -- Id - int
         'http://juliandance.org/wp-content/uploads/2016/01/RedApple.jpg' ,  -- Image - int
         'obuolys' , -- Name - varchar(20)
         'Mėlynas' , -- Summary - varchar(50)
         2.11, -- Price - decimal
		 2.5, -- Rating - decimal
		 1
    ),
	( 6 ,  -- Id - int
         'http://juliandance.org/wp-content/uploads/2016/01/RedApple.jpg' ,  -- Image - int
         'obuolys' , -- Name - varchar(20)
         'Red' , -- Summary - varchar(50)
         2.01, -- Price - decimal
		 0, -- Rating - decimal
		 1
    ),
	( 7 ,  -- Id - int
         'https://vignette.wikia.nocookie.net/plantsvszombies/images/2/24/NoImageAvailable.jpg' ,  -- Image - int
         'Citrina' , -- Name - varchar(20)
         'Yellow' , -- Summary - varchar(50)
         5, -- Price - decimal
		 5, -- Rating - decimal
		 2
    ),
	( 8 ,  -- Id - int
         'https://vignette.wikia.nocookie.net/plantsvszombies/images/2/24/NoImageAvailable.jpg' ,  -- Image - int
         'Apelsinas' , -- Name - varchar(20)
         'Orange' , -- Summary - varchar(50)
         4.20, -- Price - decimal
		 NULL, -- Rating - decimal
		 2
    ),
    ( 9 ,  -- Id - int
         'https://3.bp.blogspot.com/-S1y86KcuDsw/WR44uq_kOpI/AAAAAAABWXY/DA037N1nvO04kBuWRfgucBicfqEAO5kswCLcB/s1600/Yummy+MILKA+OREO+Chocolate+Candy-3.jpg' ,  -- Image - int
         'Milka' , -- Name - varchar(20)
         'Geras šokoladas' , -- Summary - varchar(50)
         2.11, -- Price - decimal
		 4.5, -- Rating - decimal
		 3
    ),
    ( 10 ,  -- Id - int
         'http://biogoods.lt/260-large_default/kriau%C5%A1%C4%97-%C5%A1taro-ankstyvoji.jpg' ,  -- Image - int
         'Kriaušė' , -- Name - varchar(20)
         '' , -- Summary - varchar(50)
         2.01, -- Price - decimal
		 5, -- Rating - decimal
		 1
    ),
    ( 11 ,  -- Id - int
         'https://www.oasis-botanical.ca/wp-content/uploads/2017/02/orange-web.jpg' ,  -- Image - int
         'Apelsinas' , -- Name - varchar(20)
         'Raudonas' , -- Summary - varchar(50)
         2.11, -- Price - decimal
		 0.5, -- Rating - decimal
		 1
    ),
    ( 12 ,  -- Id - int
         'https://www.runnersworld.com/sites/runnersworld.com/files/styles/article_main_custom_user_phone_1x/public/sylvanus-urban-302505.jpg' ,  -- Image - int
         'Guminukai' , -- Name - varchar(20)
         'Niam niam' , -- Summary - varchar(50)
         1.99, -- Price - decimal
		 2, -- Rating - decimal
		 3
    );