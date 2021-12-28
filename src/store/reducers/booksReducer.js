const initialState = {
    books: []
}
export function booksReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_BOOKS':
            return { ...state, books: action.books }
        case 'SET_BOOK':
            return { ...state, books: state.books.find(book => book._id === action.bookId) }
        //  || return { ...state, books: state.books.find(book => book.title === action.bookTitle) } //depends on data
        case 'ADD_BOOK':
            return {
                ...state,
                books: [action.book, ...state.books]
            }
        case 'REMOVE_BOOK':
            return { ...state, books: state.books.filter(book => book._id !== action.bookId) }
        //  ||  return { ...state, books: state.books.filter(book => book.title !== action.bookTitle) }  //depends on data
        case 'SAVE_BOOK':
            const editedBooks = state.books.map(book => {
                if (book._id === action.book._id) return action.book
                return book
            })
            return { ...state, books: editedBooks }
        default:
            return state
    }
}