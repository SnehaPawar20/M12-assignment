class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
const albumList = [
    { artist: 'Operation Ivy', title: 'Energy' },
    { artist: 'Blink 182', title: 'Dude Ranch' },
    { artist: 'New Found Glory', title: 'Sticks and Stones' },
]

    const dropdown = document.getElementById("albumSelect")
    console.log("Dropdown:", dropdown);
    albumList.forEach(_album => {
        const album = new Album(_album.artist, _album.title)
        jbox.addAlbum(album)
        console.log("Album:", album);
        const option = document.createElement("option")
        console.log("option:", option);
        option.text = `${album.artist} - ${album.title}`
        dropdown.appendChild(option)
    })

function playAlbum() {
    const dropdown = document.getElementById("albumSelect")
    const selectedAlbumIndex = dropdown.selectedIndex
    if (selectedAlbumIndex !== -1) {
        const selectedAlbum = jbox.albums[selectedAlbumIndex]
        alert(`${selectedAlbum.artist} - ${selectedAlbum.title} is now playing!`)
    }
}
function showFavoriteAlbum() {
    const favoriteAlbum = jbox.favoriteAlbum();
    const favoriteAlbumDiv = document.getElementById("favoriteAlbum");
    favoriteAlbumDiv.textContent = `Your favorite album is: ${favoriteAlbum}`;
}


console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)