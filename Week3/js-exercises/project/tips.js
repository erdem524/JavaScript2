function calculateTip(){
     const bill = document.getElementById('bill').value;
     const service = document.getElementById("service").value;
     const numPple = document.getElementById("totalpeople").value;
    
    if(bill === '' || service === 0){
         window.alert('Please enter the value');
         return;
    }
    
    if(numPple === '' || numPple <=1){
          window.alert('please enter correct number')
         document.getElementById('each').style.display = 'none';
    }else{
        document.getElementById('each').style.display = 'block';
    }

    let total = ((bill * service) / numPple).toFixed(2); 

    document.getElementById('totaltip').style.display = 'block';
    document.getElementById('tip').innerText = total;
}

document.getElementById('totaltip').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById('calculate').onclick = function(){calculateTip();};
