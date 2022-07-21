//get suitable subjects for the selected stream 
function getCourse(){
    var select = document.getElementById('course');
    var option= document.forms[0].course.value;
    var checkCM=document.getElementById("mycheckboxCM");
    var checkBio= document.getElementById("mycheckboxBio")
    var checkPhy= document.getElementById("mycheckboxPhy")
    var checkSOR= document.getElementById("mycheckboxSOR")

	console.log(select)
    console.log(option)
    document.getElementById('value').value=option;

    switch(option){
        case "CM":
           checkCM.style.display="block";
           break;
        case "Biological Science stream":
           checkBio.style.display="block";
           break;
        case "Physical Science stream":
           checkPhy.style.display="block";
           break;
        case "SOR":
           checkSOR.style.display="block";
           break;
        default:

    }
}

//check fill all details

const submitbtn=document.getElementById('submit');
const name1 =document.getElementById('name');
const gender1 =document.getElementById('gender');
const birth1 =document.getElementById('birthday');
const nic1 =document.getElementById('nic');
const address1 =document.getElementById('address');
const telephone1 =document.getElementById('telephone');
const zscore1 =document.getElementById('zscore');
const course1 =document.getElementById('course');



function setSubmitBtn(){
   const name1Value=name1.value.trim();
   const gender1Value=gender1.value.trim();
   const birth1Value=birth1.value.trim();
   const nic1Value=nic1.value.trim();
   const address1Value= address1.value.trim();
   const telephone1Value= telephone1.value.trim();
   const zscore1Value= zscore1.value.trim();
   const courseValue= course1.value.trim();


   if(name1Value.length>0 
      && gender1Value != "none" 
      &&  nic1Value.length>0 
      && address1Value.length>0  
      && telephone1Value.length>0 
      && zscore1Value.length>0
      && courseValue != "none"
      ){
      
      submitbtn.removeAttribute('disabled')
      

   }
   else{
      
      submitbtn.setAttribute('disabled')
      
   }

   
}
name1.addEventListener('change',setSubmitBtn);
gender1.addEventListener('change',setSubmitBtn);
birth1.addEventListener('change',setSubmitBtn);
nic1.addEventListener('change',setSubmitBtn);
address1.addEventListener('change',setSubmitBtn);
telephone1.addEventListener('change',setSubmitBtn);
zscore1.addEventListener('change',setSubmitBtn);
course1.addEventListener('change',setSubmitBtn);

//count the number of checked
var checks = document.querySelectorAll('.check');
var limit=5;
for (var i=0;i <checks.length; i++){
   checks[i].onclick=selectiveCheck;
   function selectiveCheck(event){
      var checkedChecks=document.querySelectorAll('.check:checked');
      if(checkedChecks.length>=limit+1){
         return false;
      }
   }
}




//thank

var thank1= document.getElementById("Thank");

// var formsection1=document.getElementById("form-section");

function thank(){

   // formsection1.style.display="none";
   location.href='Thank';
   // alert("thank");
}

const selectCourse=document.getElementById('course')

function show(){
   var as = document.forms[0].course.value;
   var strUser = selectCourse.options[selectCourse.selectedIndex].value;
   if(strUser!="none"){
      selectCourse.style.backgroundColor="rgb(154, 207, 133)";
      selectCourse.style.borderColor="rgb(11, 66, 11) solid 3px";
   }
 }
 selectCourse.onchange=show;
 show();

const selectgender=document.getElementById('gender')

function show1(){
   var as = document.forms[0].course.value;
   var strUser = selectgender.options[selectgender.selectedIndex].value;
   if(strUser!="none"){
      selectgender.style.backgroundColor="rgb(154, 207, 133)";
      selectgender.style.borderColor="rgb(11, 66, 11) solid 3px";
   }
 }
 selectgender.onchange=show1;
 show1();