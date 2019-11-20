module.exports = {
	getAllProductByCatName: `SELECT 
		P.product_id, P.product_name, P.imgurl, P.cat_name, P.price, P.description, 
		D.weight, D.width, D.height, D.publish_date, D.pages, D.author , D.ISBN, D.publisher, D.genre, D.book_type
		FROM product P 
		JOIN detail D 
		ON P.detail_id = D.detail_id 
		WHERE P.cat_name = ?`,
	//------------------------------------//
	getAllProductByGenre: `SELECT 
		P.product_id, P.product_name, P.imgurl, P.cat_name, P.price, P.description, 
		D.weight, D.width, D.height, D.publish_date, D.pages, D.author , D.ISBN, D.publisher, D.genre, D.book_type
		FROM product P 
		JOIN detail D 
		ON P.detail_id = D.detail_id 
		WHERE D.genre = ?`,
	//------------------------------------//
	getAllProductByAuthor: `SELECT 
		P.product_id, P.product_name, P.imgurl, P.cat_name, P.price, P.description, 
		D.weight, D.width, D.height, D.publish_date, D.pages, D.author , D.ISBN, D.publisher, D.genre, D.book_type
		FROM product P 
		JOIN detail D 
		ON P.detail_id = D.detail_id 
		WHERE D.author = ?`,
	//------------------------------------//
	getAllBookByType: `SELECT 
		P.product_id, P.product_name, P.imgurl, P.cat_name, P.price, P.description, 
		D.weight, D.width, D.height, D.publish_date, D.pages, D.author , D.ISBN, D.publisher, D.genre, D.book_type
		FROM product P 
		JOIN detail D 
		ON P.detail_id = D.detail_id 
		WHERE D.book_type = ?`,
	//------------------------------------//
	deleteProduct: `DELETE product, 
		detail FROM detail 
		JOIN product ON product.detail_id= detail.detail_id
		WHERE product.product_id = ?`,
	//------------------------------------//
	getUserWhislist: `SELECT U.user_id, U.name, P.* FROM user U 
		JOIN wishlist W ON U.user_id = W.user_id 
		JOIN product P ON W.product_id = P.product_id WHERE U.user_id = ?`,
	//------------------------------------//
	getUserCartOrder: `SELECT U.user_id , U.name ,P.product_id, P.product_name, P.imgurl , D.author, O.price, O.quantity 
		FROM user U JOIN ord O ON U.user_id=O.user_id 
		JOIN product P ON O.product_id=P.product_id 
		JOIN detail D ON P.detail_id=D.detail_id WHERE U.user_id = ?`,
	//------------------------------------//
	grandTotalOrder: `SELECT O.ord_id, O.user_id,
		(SELECT SUM(O.price * O.quantity) AS Total) AS Grand  
		FROM product P JOIN ord O ON P.product_id=O.product_id WHERE O.user_id=?`,
};
