export default class Book{
 
    //Need to be fixed and improved

    constructor (title,author,coverId,key){
        this.title=title
        this.author=author
        this.coverId=coverId
        this.key=key
    }

    retrieveCover(){
        let coverUrl = process.env.COVER_BASE_URL+this.coverId+"-L.jpg"
        return coverUrl
    }

}