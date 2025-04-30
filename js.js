
// _______________________________________________________________-


//////////////////////////////////////////////////////////////////////////////////////
// ********************get elements***************************************************
//////////////////////////////////////////////////////////////////////////////////////

let inputUpload=document.getElementById('input_file');
let imageUpload=document.getElementById('upload_icon_image');
let deleteImageBtn=document.getElementById('btn_delete_image');
let titleDrag=document.querySelector('.drag_title');
let changeImage=document.getElementById('btn_upload_second');
let generate_btn=document.getElementById('generate_btn');
let buttons_d_ch=document.querySelector('.buttons_d_ch')
let ticket=document.querySelector('.ticket');
let divToHide=document.querySelector('.divToHide');
let btnback=document.querySelector('.btnback');
let nameOnTicket=document.querySelector('.nameOnTicket');
let usernameOnTicket=document.querySelector('.usernameOnTicket');
let username=document.getElementById('username');
let currentYear=document.querySelector('.currentYear');
let date=new Date();
let year =date.getFullYear();
currentYear.textContent=year;

//////////////////////////////////////////////////////////////////////////////////////
// ********************Upload Image***************************************************
//////////////////////////////////////////////////////////////////////////////////////
inputUpload.onchange=function(){
    imageUpload.src=URL.createObjectURL(inputUpload.files[0]);
    imageUpload.style.width='60px';
    imageUpload.style.height='60px';

    titleDrag.style.display='none'


    deleteImageBtn.style.display='flex'
    btn_upload_second.style.display='block'


    deleteImageBtn.onclick=function(){
        imageUpload.src="./images/icon-upload.svg"
        imageUpload.style.width='35px';
        imageUpload.style.height='35px';
    }
}


//////////////////////////////////////////////////////////////////////////////////////
// ********************Change Image***************************************************
//////////////////////////////////////////////////////////////////////////////////////
function changeImageFunc(){
    imageUpload.src=URL.createObjectURL(inputUpload.files[0]);
    imageUpload.style.width='60px';
    imageUpload.style.height='60px';

    titleDrag.style.display='none'


    deleteImageBtn.style.display='flex'
    btn_upload_second.style.display='block'
    btn_upload_second.style.marginTop='15px';
    deleteImageBtn.style.marginTop='15px';
    


    deleteImageBtn.onclick=function(){
        imageUpload.src="./images/icon-upload.svg"
        imageUpload.style.width='35px';
        imageUpload.style.height='35px';
    }
}

//////////////////////////////////////////////////////////////////////////////////////
// ********************Form validation***************************************************
//////////////////////////////////////////////////////////////////////////////////////

function validateForm(event){
    ////////////////username validate///////////////////
    event.preventDefault();
    let username=document.getElementById('username');
    let username_valdiate=document.getElementById('username_valdiate');


    let email=document.getElementById('email');
    let mail_valdiate=document.getElementById('mail_valdiate');
    
    
    let fullname=document.getElementById('fullname');
    let name_valdiate=document.getElementById('name_valdiate');
    
    
    let avatar_valdiate=document.getElementById('avatar_valdiate');
    
    
    
    if(imageUpload.src.includes('icon-upload.svg')) {
        avatar_valdiate.style.display = "block";
        avatar_valdiate.style.color = '#bd1313ad';
        avatar_valdiate.textContent = "🛈 You must upload an image.";
        return false;
    } else {
        avatar_valdiate.style.display = "none";

    }
    
    if(fullname.value ==''){
        name_valdiate.style.display="block";
        name_valdiate.style.color="#bd1313ad";
        name_valdiate.textContent=' 🛈 Enter ur name correclty';
        return false

    }
    else{
        name_valdiate.style.display="none";
    }

    if(email.value ==''){
        mail_valdiate.style.display="block";
        mail_valdiate.style.color="#bd1313ad";
        mail_valdiate.textContent=' 🛈 Enter ur name correclty';
        return false

    }
    else{
        mail_valdiate.style.display="none";
        
    }


    if(username.value ==''){
        username_valdiate.style.display="block";
        username_valdiate.style.color="#bd1313ad";
        username_valdiate.textContent=' 🛈 Enter ur username correclty';
        return false
    }
    else{
        username_valdiate.style.display="none";
        // return true
    }
    
    console.log("av")
    viewticket()
}


//////////////////////////////////////////////////////////////////////////////////////
// ********************Toggling the output***************************************************
//////////////////////////////////////////////////////////////////////////////////////
function viewticket(){
    let fullname=document.getElementById('fullname');
    let email=document.getElementById('email');
    let name_hided=document.querySelector('.name_hided');
    let mail_hided=document.querySelector('.mail_hided');
    let head2=document.querySelector('.head2');
    let head1=document.querySelector('.head1');
    let subhead1=document.querySelector('.subhead1');
    let subhead2=document.querySelector('.subhead2');
    let ticket_profile_image=document.querySelector('.ticket_profile_image');


    // get date of today
    let date_address=document.querySelector('.date_address');
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let dt=new Date();
    let day=dt.getDate();
    let month=months[dt.getMonth()]
    let year=dt.getFullYear();
    
    date_address.textContent=`${month} ${day}, ${year} / Cairo, Egypt`

    ticket_profile_image.setAttribute('src',imageUpload.src)

    name_hided.textContent=fullname.value;
    mail_hided.textContent=email.value;


    head1.style.display="none"
    head2.style.display="block"
    subhead1.style.display="none"
    subhead2.style.display="block"


    ticket.style.display='block';
    btnback.style.display='block';
    divToHide.style.display='none';


    nameOnTicket.textContent=fullname.value;
    usernameOnTicket.textContent=username.value;

    
    generateCode()
}
function backToForm(){
    ticket.style.display='none';
    btnback.style.display='none';
    divToHide.style.display='block';
}

backToForm()


//////////////////////////////////////////////////////////////////////////////////////
// ********************Generate random code*******************************************
//////////////////////////////////////////////////////////////////////////////////////
function generateCode(){
    let num= Math.floor(10000+Math.random()*90000)
    let code=document.querySelector('.code');
    code.textContent=`#${num}`

}