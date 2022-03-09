const BASE_URL="http://localhost:7001/bookstore/api/v1/books";

export default class BookstoreService {
    constructor() {
    }
    findAllBooks=async ()=>{
        return fetch(BASE_URL.concat("/all"),{
            headers:{
                "Accept":"application/json"
            }
        }).then(response=>response.json());
    }
    findBookByIsbn=async (isbn)=>{
        return fetch(`${BASE_URL}/${isbn}`,{
            method:"GET",
            headers:{
                "Accept":"application/json"
            }
        }).then(response=>response.json())
    }
    addBook=async (book)=>{
        return fetch(BASE_URL,{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(book)
        }).then(response=>response.json())
    }
    deleteBook=async (isbn)=>{
        return fetch(`${BASE_URL}/${isbn}`,{
            method:"DELETE",
            headers:{
                "Accept":"application/json"
            }
        }).then(response=>response.json())
    }
    updateBook(isbn,book){
        return fetch(`${BASE_URL}/${isbn}`,{
            method:"PUT",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(book)
        }).then(response=>response.json())
    }




}