class Book {
    constructor(title, author){
this. title = title
this.author = author
    }
    display(){
        console.log(`no price given for ${this.book} :: ${this.title}`)
    }
}
class MyBook extends Book {
    constructor(title, author,price){
        super(title, author)
        this.price = price
    }
    display(){
        console.log(`Title : ${this.title}`)
        console.log(`Price : ${this.price}`)
        console.log(`Author : ${this.author}`)
    }
}

book = new MyBook("lords","Stephen King", 500)
book.display();