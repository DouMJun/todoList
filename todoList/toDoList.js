
if (localStorage.todoList == undefined) {
    var todoList = []
}else{
    var todoList = JSON.parse(localStorage.todoList)
}
  
let submit = document.getElementById('submit');
let input = document.getElementById('text');
let doing = document.getElementById('doing');
let done = document.getElementById('done');
let mid = document.getElementById('mid');

 

submit.addEventListener('click',function(){
    add();
});
input.addEventListener('keydown',function(event){
    if(event.key == "Enter"){
        add();
    }
});
/*
function add(){
    if(input.value !== ''){

        let newDiv = document.createElement('div');
        newDiv.className = 'temp';
        newDiv.innerHTML = '<input type="checkbox" name="state" value="doing" onclick="stateChange()"><p>'+input.value 
            +'</p>';
        doing.appendChild(newDiv);

        
        let newItem = {
            value : input.value,
            state : 'doing'
        };
        todoList.push(newItem);
        
        input.value ='';
        console.log('succeed');
    }
}
function stateChange(){
    let list = document.getElementsByClassName('temp');
    for(let num in list){
        if(list[num].children[0].value == 'doing'&&list[num].children[0].checked){
            list[num].children[0].value = 'done';
            let parent = list[num].parentElement;
            let remove = parent.removeChild(list[num]);
            done.appendChild(remove);
        }else if(list[num].children[0].value == 'done'&& !list[num].children[0].checked){
            list[num].children[0].value = 'doing';
            let parent = list[num].parentElement;
            let remove = parent.removeChild(list[num]);
            doing.appendChild(remove);
        }
    }
}
*/
function del(obj){
    let index = obj.getAttribute('data-index');
    todoList.splice(index,1);
    render(todoList);
}

function add(){
    if(input.value !== ''){
        let newItem = {
            value : input.value,
            state : 'doing'
        };
        input.value = "";
        todoList.push(newItem);
    }
    render(todoList);
}

function change(obj){
    let index = obj.getAttribute('data-index');
    if(todoList[index].state == 'doing'){
        todoList[index].state = 'done';
    }else{
        todoList[index].state = 'doing';
    }
    render(todoList);
}

function render(todoList){
    localStorage.todoList = JSON.stringify(todoList);
    doing.innerHTML = '<div class="title"><p>正在进行</p></div>';
    done.innerHTML = '<div class="title"><p>已经完成</p></div>';
    todoList.forEach( (item,index) => {
        let newItem = document.createElement('div');
        newItem.className = 'temp';
        if(item.state == 'doing'){
            newItem.innerHTML = '<input type="checkbox" value="doing"  id="'+index+'" onclick="change(this)" data-index="'+index+'"><label for="'+index+'"></label><p class="content">'+item.value 
                                +'</p><button class="del" type="button" data-index="'+index+'" onclick="del(this)">x</button>';
            doing.appendChild(newItem);
        }else{
            newItem.innerHTML = '<input type="checkbox" value="done"  id="'+index+'" onclick="change(this)" data-index="'+index+'"checked><label for="'+index+'"></label><p class="content">'+item.value 
                                +'</p><button class="del" type="button" data-index="'+index+'" onclick="del(this)">x</button>';
            done.appendChild(newItem);
        }
    });
}
render(todoList);