 // inialiasikan email tujuan yang akan dikirimi pesan
 const emailReceiver = 'rhomairama@mail.com'

 // deklarasikan formsubmit
 function submitForm () {
     let name = document.getElementById('nama').value
     let email = document.getElementById('email').value
     let phone = document.getElementById('phone').value
     let subject = document.getElementById('subject').value
     let massage = document.getElementById('Message').value
 
 // validasi
 
 if(name == '') {
     alert('Nama kamu harus diisi')
 }
 if(email == '') {
     alert('Email kamu harus diisi')
 }
 if(phone == '') {
     alert('Nomer Handphone kamu harus diisi')
 }
 if(subject == '') {
     alert('Subject kamu harus diisi')
 }
 if(massage == '') {
     alert('Pesan kamu harus diisi')
 }
 
 console.log(name)
 console.log(email)
 console.log(phone)
 console.log(subject)
 console.log(massage)
 
 // gunakan tag anchor untuk membuka aplikasi mail
 let a = document.createElement('a')
     a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name ${name}, ${massage}`
     a.click()
 
     let dataObject = { name, email, phone, subject, massage }
 
     console.log(dataObject)
 }
 
 