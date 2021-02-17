import config  from '../nessie.config.ts';

export const getAllBooks = async ( ctx : any ) => {
   ctx.response.body = await config.client.query("SELECT * FROM books"); 
}

// export const getBookDetails = ({ params, response }: { params: { id: number }; response: any }) => {
//     response.body = client.query(`SELECT * FROM books WHERE id = ${params.id}`);
// }

// export const createBook = ({ request, response }: { request: any; response: any }) => {
//     const body = request.body()
//     return client.query(
//         `INSERT INTO books (title, author_id, genre_id ) VALUES (${body.title}, ${body.author_id}, ${body.genre_id})`,
//     );
// }

// export const updateBook = () => {

// }
// export const deleteBook = () => {

// }