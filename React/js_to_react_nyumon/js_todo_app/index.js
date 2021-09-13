// import "styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById('add-text').value = "";

  createIncompleteList(inputText);
 


  
  // console.log(div);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target)
}

const createIncompleteList =  (text) => {
   // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener('click', () => {
    // 


    document.getElementById("incomplete-list").removeChild(completeButton.parentNode);
    const completeTarget = completeButton.parentNode;

    const text = completeTarget.firstElementChild.innerHTML;

    // div以下を初期化
    completeTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻る"
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    })

    completeTarget.appendChild(li);
    completeTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(completeTarget);

    // console.log(text);

  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener('click', () => {
   
    // console.log(deleteTaget);
    deleteFromIncompleteList(deleteButton.parentNode);
  });


  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

// const complete = document.getElementById('complete');

// complete.addEventListener('click', () => {
//   const li = document.getElementById('li');
//   const complete_li = document.createElement
//   li.innerText

//   document.getElementById("complete-list").appendChild(div);
// })