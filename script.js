const questions=document.querySelectorAll(".question");

let toggleArray=[];
for(let i=0;i<questions.length;i++){
    toggleArray[i]=true;
}

for(let i=0;i<questions.length;i++){
    questions[i].addEventListener("click", function(){
        const ans=this.querySelector(".ans");
        const ques=this.querySelector(".dropdown span");
        console.log(ques);
        if(toggleArray[i]){
            ques.classList.add("bold");
            ans.classList.add("block");
            toggleArray[i]=false;
        }else{
            ques.classList.remove("bold");
            ans.classList.remove("block");
            toggleArray[i]=true;
        }
    });
}