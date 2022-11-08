export default class Book{
 
    //Need to be fixed and improved

    constructor (title,author,coverId,key){

        this.title=title

        this.author=author

        this.coverId=coverId

        this.key=key

    }

    //Method used for retrieving the url to inject in the src attribute of the image of the cover

    retrieveCover(){

        let coverUrl = process.env.COVER_BASE_URL+this.coverId+"-L.jpg"

        //console.log(coverUrl)
        
        return coverUrl
    }

}