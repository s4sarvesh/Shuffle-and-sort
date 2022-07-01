## Description

This Code provides possibility to Shuffle and sort the values, which you can do it from UI.

## How to use

To Shuffle the values:

- `shuffle function`

```
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
```

To Sort the values:

- `sort function`

```
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
```

### Example

```
<div class="main-container">
            <div class="row-container" id="numberDiv"></div>
            <div class="button-container">
                <button onclick="shuffle();" class="btn">SHUFFLE</button>
                </br>
                <button onclick="sort();" class="btn">SORT</button>
            </div>
        </div>
```

#### result

![alt text](./usage-example-result.png)
