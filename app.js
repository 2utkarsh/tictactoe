let boxes=document.querySelectorAll('.box');
let resetbtn=document.querySelector('#reset-btn');
let newbtn=document.querySelector('.new-btn');
let msg=document.querySelector('#msg');
let msgcontain=document.querySelector('.msg-container');
let turn1=true;
let turn2=false;

let arr=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let i=10;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn1){
            box.innerText='X';
            turn1=false;
            turn2=true;
            i-=1;
            

            }
        else{
            box.innerText='O';
            turn2=false;
            turn1=true;
            i-=1
            
        }
        box.disabled=true;
        
        checkwinner();
    });
});

const resetgame=()=>{
    if(confirm('are you sure?')){
    turn1=true;
   enableboxes();
    };
}
const startagain=()=>{
    turn1=true;
   enableboxes();
}
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
        resetbtn.classList.add('hide');
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
        msgcontain.classList.add('hide');
        resetbtn.classList.remove('hide');
    }
}
const showwinner=(winner)=>{
msg.innerText=`Congratulation, Winner is ${winner}`;
msgcontain.classList.remove('hide');
disableboxes();

};


const checkwinner=()=>{
    for(pattern of arr){
        pstval1=boxes[pattern[0]].innerText;
        pstval2=boxes[pattern[1]].innerText;
        pstval3=boxes[pattern[2]].innerText;
        if(pstval1!='' && pstval2!='' && pstval3!=''){
            if((pstval1===pstval2) && (pstval2===pstval3)){
                
                i=10;

                showwinner(pstval1);
                
            }
            else if(i==1){
                i-=1;
                nowinner(i);
            }
            
            

        }
       
        
    }
    
};
const nowinner=(val)=>{
if(i==0){
msg.innerText=`No winner`;
msgcontain.classList.remove('hide');
i=10;
disableboxes();
}
};
newbtn.addEventListener('click',startagain);
resetbtn.addEventListener('click',resetgame);






        


   