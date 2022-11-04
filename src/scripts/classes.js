export default class Book{
 
    //Need to be fixed and improved

    constructor (title,author,coverId,key,details){
        this.title=title
        this.author=author
        this.coverId=coverId
        this.key=key
        this.details=details
    }

    retrieveCover(){
        let coverUrl = process.env.COVER_BASE_URL+this.coverId+"-L.jpg"
        return coverUrl
    }

}