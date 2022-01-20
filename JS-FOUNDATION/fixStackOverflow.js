// This recursive function creates a Stack Overflow
// Fix this code -- keep the recursive call


const list = new Array(60000).join('1.1').split('.');

// original function that causes stack overflow 
function removeItemsFromList() {
    var item = list.pop();
 
    if (item) {
        removeItemsFromList();
    }
};
 
removeItemsFromList();


// solution
function removeItemsFromList2(){
    var item = list.pop()
    if (item){
        setTimeout(removeItemsFromList2, 0)
    }
}




