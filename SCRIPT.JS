const binaryNumber = document.getElementById('binary')
const btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    console.log("convert");
    const binary = document.getElementById('binary');
    btn.addEventListener('click', function(){
        const inputbtn = document.getElementById('input-btn').value;
        if (inputbtn === ''){
            alert("Plese Enter a valid Number")
        }
        else if(inputbtn < 0){
            alert("Please type a positive number")

        }
        const result = Number(inputbtn).toString(2);
        binaryNumber.innerText = result;
    })
})
