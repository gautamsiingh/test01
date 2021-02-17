//get the input field
var item = document.getElementById("itemField");

//function to update item count
function updateCount() {
    var itemCount = document.getElementById("count");
    var liItems = document.getElementsByTagName("ul")[0].getElementsByTagName("li").length; 
    itemCount.innerText = liItems;
}
updateCount();

//focus on input field after load
window.onload = function() {
    item.focus();
}

//function to add items in ul
function addItem() {
    if (item.value != "") {
        var newLi = document.createElement("li");
        var liText = document.createTextNode(item.value);
        newLi.appendChild(liText);
        var newSpan = document.createElement("span");
        var spanText = document.createTextNode("X");
        newSpan.appendChild(spanText);
        newSpan.setAttribute("class", "del");
        newSpan.setAttribute("onclick", "delItem(this)");
        newLi.appendChild(newSpan);
        var parentUl = document.getElementsByTagName("ul")[0];
        parentUl.appendChild(newLi);

        item.value = "";
        document.getElementById("message").innerText = "";
        item.focus();
    } else {
        document.getElementById("message").innerText = "*Field is empty";
        item.focus();
    }
    updateCount();
}

//function to delete items
function delItem(x) {
    var parentUl = document.getElementsByTagName("ul")[0];
    parentUl.removeChild(x.parentNode);
    updateCount();
}

//trigger add item button on pressing enter key
item.onkeyup = function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addButton").click();
    }
}

//array of verse objects
var verses = [
    { 
        title: "Genesis", 
        verse: "In the beginning God created the heaven and the earth 1:2 And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters."
    },
    { 
        title: "Genesis 2", 
        verse: "Thus the heavens and the earth were completed in all their vast array. By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work."
    },
    { 
        title: "Joshua", 
        verse: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."
    }
]

var index = 0;
var searchText = document.getElementById("searchText");
var searchMsg = document.getElementById("searchMsg");
function searchFunc() {
    if(searchText.value != "") {
        for(var i = 0; i < verses.length; i++) {
            var str = verses[i].title;
            if(str.includes(searchText.value)) {
                searchMsg.innerText = "Match Found in Title of Verse " + (i+1);
                index = i;
                showVerse(index);
                break;
            } else {
                searchMsg.innerText = "*Match not found";
            }
        }
    } else {
        searchMsg.innerText = "*Search Field is empty";
        searchText.focus();
    }
}

//trigger search button on pressing enter key
searchText.onkeyup = function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchButton").click();
    }
}

//function to navigate through verses 
//using keyboard arrow buttons
// document.onkeyup = function(event) {
//     if(event.keyCode === 37) {
//         event.preventDefault();
//         document.getElementById("prev").click();
//     }
//     if(event.keyCode === 39) {
//         event.preventDefault();
//         document.getElementById("next").click();
//     }
// }


//getting verse title and text fields
var verseTitleInput = document.getElementById("verseTitleField"); 
var verseTextInput = document.getElementById("verseTextField");

//function to add verse
function addVerse() {
    if(verseTitleInput.value != "" && verseTextInput.value != "") {
        verses[verses.length] = 
            {
                title: verseTitleInput.value,
                verse: verseTextInput.value
            };
            
            document.getElementById("verseMsg").innerText = "";
            verseTitleInput.value = "";
            verseTextInput.value = "";
            verseTitleInput.focus();
            updateVerseCount();
    } else {
        document.getElementById("verseMsg").innerText = "*Verse Fields can't be empty!";
        verseTitleInput.focus();
    }
}

//function to update verse count
updateVerseCount();
function updateVerseCount() {
    document.getElementById("verseCount").innerText = verses.length;
}

//function to change index value of verse
function changeVerse(action) {
    if(action == "prev") {
        if(index == 0) {
            index = verses.length;
        }
        index--;
        showVerse(index);
    } else if (action == "next") {
        if(index == verses.length - 1) {
            index = -1;
        }
        index++;
        showVerse(index);
    }
}

showVerse(index);
//function to show verse
function showVerse(i) {
    document.getElementById("title").innerText = verses[i].title;
    document.getElementById("verseText").innerText = verses[i].verse;
}

//trigger add Verse button on pressing enter key
verseTitleInput.onkeyup = function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addVerseButton").click();
    }
}
verseTextInput.onkeyup = function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("addVerseButton").click();
    }
}