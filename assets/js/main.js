
// Number array with value and css class
const array = [{value:1,className:'color1'},{value:2,className:'color2'},{value:3,className:'color3'},{value:4,className:'color4'},
{value:5,className:'color5'},{value:6,className:'color6'},{value:7,className:'color7'},{value:8,className:'color8'},{value:9,className:'color9'}]

// Function for : Shuffling the Number array
function shuffle() {
    let ctr = array.length;
    let temp;
    let index;

    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = array[ctr];
        array[ctr] = array[index];
        array[index] = temp;
    }
   renderUI(array);
}

// Function for : Sorting the Number array
function sort() {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i]['value'] < array[j]['value']) {
                let x = array[i]['value'];
                let y = array[i]['className'];
                array[i]['value'] = array[j]['value'];
                array[j]['value'] = x;
                array[i]['className'] = array[j]['className'];
                array[j]['className'] = y;
            }
        }
    }
   renderUI(array);
}

// Function for Render the UI : After Shuffling and Sorting
function renderUI(array){
	 let list = '';
	 for (let i = 0; i < array.length; i++) {
         list += '<div class="grid-item '+array[i]['className']+'">'+array[i]['value']+'</div>'; 
    } 
    document.getElementById("numberDiv").innerHTML = list;
}

renderUI(array);

