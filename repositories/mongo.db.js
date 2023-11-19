import mongodb from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

function getClient() {
    const uri = process.env.MBDATABASE_URL;

    return new mongodb.MongoClient(uri);
}

export { getClient };


// {
//     "bookId": 1,
//     "description": "Descricao do livro",
//     "pages": 250,
//     "company": "Nome da editora",
//     "rating": [
//         {
//             "name": "Nome do cliente",
//             "grade": 5,
//             "comment": "Descricao da avaliacao" 
//         }
//     ]
// }