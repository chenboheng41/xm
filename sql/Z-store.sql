#设置编码
SET NAMES UTF8;
#创建数据库
DROP DATABASE IF EXISTS z;
CREATE DATABASE z CHARSET=UTF8;
USE z;
#创建数据表 储存首页数据
CREATE TABLE z_home_page(
zid SMALLINT PRIMARY KEY AUTO_INCREMENT, #商品编号 SMALLINT 小整型范围-32768~32768 PRIMARY KEY 主键约束从小到大 AUTO_INCREMENT 自动增长
zname VARCHAR(128), #商品名 VARCHAR 变长字符串最大定义128个字符
price DECIMAL(8,2),#商品价格 DECIMAL 定点小数有效数位8位 小数点后两位
img VARCHAR(200) #图片
);
INSERT INTO z_home_page VALUES
(NULL,"华为 畅想9Plus",1579,"./image/tuan_neirong1.jpg"),
(NULL,"三星 Galaxy A6s",1499,"./image/tuan_neirong2.jpg"),
(NULL,"甲骨龙 酷睿i5 8400升85...",3699,"./image/tuan_neirong3.jpg"),
(NULL,"美商海盗船",2399,"./image/tuan_neirong4.jpg"),
(NULL,"联想(Lenovo)小新 ",5299,"./image/tuan_neirong5.gif"),
(NULL,"联想小新潮7000 超轻薄",4999,"./image/tuan_neirong6.gif"),
(NULL,"华为mate10 4+64G",3119,"./image/tuan_daodian1.jpg"),
(NULL,"华为mate10 4+64G",2999,"./image/tuan_daodian2.jpg"),
(NULL,"华为mate10 4+64G",2333,"./image/tuan_daodian3.png"),
(NULL,"0",0,"./image/tongcheng1.jpg"),
(NULL,"0",0,"./image/tongcheng2.jpg"),
(NULL,"0",0,"./image/tongcheng3.jpg"),
(NULL,"【送壳膜指环架】魅族 魅蓝",1019.00,"./image/ChMkJ1pmniWIVPAbAAAumF1OHK0AAkSfgEmGj4AAC6w168.jpg"),
(NULL,"华为nova2s 4GB+64GB 移...",2690.00,"./image/ChMkJ1pmnlOIGma0AAAuMeC8IQAAAkSfgI7uM8AAC5J918.jpg"),
(NULL,"荣耀9青春版 4GB+64GB 移...",3690.00,"./image/ChMkJ1pmnoeISxOGAAAr93vLdt0AAkSfgMqo6cAACwP850.jpg"),
(NULL,"【送壳膜】苹果 iPhone 8",6690.00,"./image/ChMkJ1pmnqmIDDHzAAAkRnYWVyQAAkSfgOQ5JUAACRe562.jpg"),
(NULL,"华为mate10 4+64G",2333,"./image/tuan_daodian3.png"),
(NULL,"0",0,"./image/ChMkJ1oEHWOIci2KAADUpdCR5mcAAh-6wJYXZIAANS9314.png"),
(NULL,"0",0,"./image/ChMkJ1pBxRiIEANdAAA_OYT521wAAjf2wBjh_IAAD9R492.jpg"),
(NULL,"0",0,"./image/ChMkJlpBxLyIKdyBAAA6etUzRHgAAjf2gJcGu4AADqS561.jpg"),
(NULL,"【送壳膜指环架】魅族 魅蓝",1999.00,"./image/ChMkJlpmneaIbKssAAAmMpPf-YUAAkSfQJzZPAAACZK980.jpg"),
(NULL,"华为nova2s 4GB+64GB ",3999.00,"./image/ChMkJlr5RcmIY48mAAFT3EgbjQ4AAoYSQMpQUwAAVP0359.jpg"),
(NULL,"荣耀9青春版 4GB+64GB ",1680.00,"./image/ChMkJlmBe1SIPtVNAABHfAvnJogAAfV9AC9eeQAAEeU166.jpg"),
(NULL,"【送壳膜】苹果 iPhone 8",6690.00,"./image/ChMkJ1pmnqmIDDHzAAAkRnYWVyQAAkSfgOQ5JUAACRe562.jpg"),
(NULL,"华为mate10 4+64G",3980,"./image/tuan_daodian3.png");
/*品牌精选*/
CREATE TABLE z_home_sift(
    zid SMALLINT PRIMARY KEY AUTO_INCREMENT,
    zname VARCHAR(128),
    price DECIMAL(8,2),
    img VARCHAR(200)
); 
INSERT INTO z_home_page VALUES
(NULL,"王俊凯 戴尔DELL游侠G3",9999,"image/ChMkJlsiHdGICadAAAECBNUPQlcAApCRQK_ihYAAQIc632.jpg"),
(NULL,"王俊凯 戴尔DELL游侠G3",7499,"image/ChMkJlsiF-KICAtpAAEVj7cfWEcAApCPANnA4QAARWn470.jpg"),
(NULL,"王俊凯 戴尔DELL游侠G3",9999,"image/ChMkJlsiHdGICadAAAECBNUPQlcAApCRQK_ihYAAQIc632.jpg"),
(NULL,"王俊凯 戴尔DELL游侠G3",8999,"image/ChMkJlsiF-KICAtpAAEVj7cfWEcAApCPANnA4QAARWn470.jpg");
-- 用户表
CREATE TABLE z_login(
    id INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(25),
   upwd VARCHAR(32)
);
INSERT INTO xz_login VALUES
(null,"1343825062",md5("123456")),
(null,"15737273235",md5("123456")),
(null,"15736780172",md5("123456")),
(null,"13438250",md5("123456")),
(null,"1343825",md5("123456"));
-- 详情页
CREATE TABLE z_details(
    id INT PRIMARY KEY AUTO_INCREMENT, 
    title VARCHAR(128), /*标题*/
    subtitle VARCHAR(128),/*副标题*/
    price VARCHAR(128),
    memory VARCHAR(32),
    colour VARCHAR(32),
    disk VARCHAR(32),
    sm VARCHAR(128),/**/
    md VARCHAR(128),/**/
    lg VARCHAR(128)/**/
);
INSERT INTO z_details VALUES
(NULL,"【顺丰包邮】华为 P20 Pro 全面屏徕卡三摄游戏手机 8G+128GB","麒麟970芯片/DxO评分过百/夜神之眼/真AI",4999,"4G","亮黑","64G","ChMkJlomRmaIEqK8AAE3DuDVvdAAAi2MwKUocMAATcm595(3).jpg","lg.jpg.jpg","lg.jpg"),
(NULL,"【顺丰包邮】华为 P20 Pro 全面屏徕卡三摄游戏手机 8G+128GB","麒麟970芯片/DxO评分过百/夜神之眼/真AI",4999,"4G","亮黑","64G","ChMkJ1pEwJ-IHPJzAAD5pXWfqOwAAjlAAF9fiIAAPm9016.jpg","ChMkJ1pEwJ-IHPJzAAD5pXWfqOwAAjlAAF9fiIAAPm9016.jpg","ChMkJ1pEwJ-IHPJzAAD5pXWfqOwAAjlAAF9fiIAAPm9016.jpg"),
(NULL,"【顺丰包邮】华为 P20 Pro 全面屏徕卡三摄游戏手机 8G+128GB","麒麟970芯片/DxO评分过百/夜神之眼/真AI",4999,"4G","亮黑","64G","ChMkJ1omRwuIFB7yAAFiAt9fLX4AAi2NAMIZbIAAWIa908.jpg","ChMkJ1omRwuIFB7yAAFiAt9fLX4AAi2NAMIZbIAAWIa908.jpg","ChMkJ1omRwuIFB7yAAFiAt9fLX4AAi2NAMIZbIAAWIa908.jpg"),
(NULL,"【顺丰包邮】华为 P20 Pro 全面屏徕卡三摄游戏手机 8G+128GB","麒麟970芯片/DxO评分过百/夜神之眼/真AI",4999,"4G","亮黑","64G","ChMkJlpEwJWIPr3eAAB54GlfPtUAAjlAADrmvEAAHn4532.jpg","ChMkJlpEwJWIPr3eAAB54GlfPtUAAjlAADrmvEAAHn4532.jpg","ChMkJlpEwJWIPr3eAAB54GlfPtUAAjlAADrmvEAAHn4532.jpg"),
(NULL,"【顺丰包邮】华为 P20 Pro 全面屏徕卡三摄游戏手机 8G+128GB","麒麟970芯片/DxO评分过百/夜神之眼/真AI",4999,"4G","亮黑","64G","ChMkJlomRmuIdTVnAAFa8ZXTNYkAAi2MwLe5BEAAVsJ064.jpg","ChMkJlomRmuIdTVnAAFa8ZXTNYkAAi2MwLe5BEAAVsJ064.jpg","ChMkJlomRmuIdTVnAAFa8ZXTNYkAAi2MwLe5BEAAVsJ064.jpg");
CREATE TABLE z_cart(
    id INT PRIMARY KEY AUTO_INCREMENT,#购物车id
    uid INT, #用户id
    pid INT, #商品id
    price VARCHAR(24), #价格
    pname VARCHAR(64), #商品名
    count INT #数量
);
INSERT INTO z_cart VALUES
(NULL,1,1,100,"茶",1),
(NULL,2,2,100,"酒",1),
(NULL,1,2,100,"茶",1),
(NULL,2,1,100,"烟",1),
(NULL,1,2,100,"酒",1),
(NULL,2,1,100,"烟",1),
(NULL,1,2,100,"茶",1);