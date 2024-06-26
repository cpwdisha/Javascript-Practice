let book = ["Fault in our stars", 694, 99, ["Dan Brown", 35]];

const [name, pages, price, [author_name, author_age]] = book;

console.log(name);

function youtube(){
    return ["Namaste JS", "26 videos"];
}

let [playlist, no_of_videos] = youtube();
console.log(playlist);