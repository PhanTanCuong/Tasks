const inputBox= document.getElementById("input-box");
const  listContainer=document.getElementById("list-container");

// addTask() function: adding to do tasks
function addTask(){
     // Trim the value to remove whitespace from both ends
     let trimmedValue = inputBox.value.trim();
    // == Chỉ trả về đúng nếu cả hai operands bằng nhau trong khi 
    // === chỉ trả về true nếu cả hai giá trị và kiểu dữ liệu đều giống nhau cho hai biến.
    if(trimmedValue ===''){
        alert("You must write somthing");   
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML='<img src="images/checked.png">';
        li.appendChild(span);
    }
    // Clear the input box after adding the task
    inputBox.value = '';
}

listContainer.addEventListener("click",function(e){  //e=element
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked");
            saveData()

        }else if(e.target.tagName === "IMG") {
            e.target.closest("li").remove();
            saveData()
        }
},false);


// functions relate to Local Storage

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");

}

showTask();
