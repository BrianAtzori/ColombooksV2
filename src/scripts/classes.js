export default class Book{
 
    //Need to be fixed and improved

    constructor (title,author,coverId,key){

        this.title=title

        this.author= author === undefined ? "Author not available" : author

        this.coverId=coverId

        this.key=key

    }

    //Method used for retrieving the url to inject in the src attribute of the image of the cover

    retrieveCover(){

        let coverUrl=""

        let retrievedCover = process.env.COVER_BASE_URL+this.coverId+"-L.jpg"

        coverUrl = retrievedCover === undefined ? "https://dummyimage.com/80x100/22a15d/fcfcfc.png&text=+NOT+FOUND" : retrievedCover

        //console.log(coverUrl)
        
        return coverUrl
    }

}