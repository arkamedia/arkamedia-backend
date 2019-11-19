module.exports = {
	getAllProductByCatName: `SELECT 
    P.product_id, P.product_name, P.imgurl, P.cat_name, P.price, P.description, 
    D.weight, D.width, D.height, D.publish_date, D.pages, D.author , D.ISBN, D.publisher, D.genre 
    FROM product P 
    JOIN detail D 
    ON P.detail_id = D.detail_id 
    WHERE P.cat_name = ?`,
	getAllProductByGenre: `SELECT 
    P.product_id, P.product_name, P.imgurl, P.cat_name, P.price, P.description, 
    D.weight, D.width, D.height, D.publish_date, D.pages, D.author , D.ISBN, D.publisher, D.genre 
    FROM product P 
    JOIN detail D 
    ON P.detail_id = D.detail_id 
    WHERE D.genre = ?`,
};
