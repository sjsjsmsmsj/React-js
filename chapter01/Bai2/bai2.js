class Novel {
    constructor(Title, Author) {
        this.Title = Title; 
        this.Author = Author;
    }
    getAuthor() {
        return this.Author;
    }
}

let myNovel = new Novel("Toi thay hoa vang tren co xanh", "Lam gia thinh")
console.log(myNovel.getAuthor())