let projects = [];


function addProject() {

    let projectName = document.getElementById('nama').value
    let startDate = document.getElementById('StartDate').value
    let endDate = document.getElementById('EndDate').value
    let Desc    = document.getElementById('Message').value
    let inputSkill = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(item => item.value); 

    
    let images = document.getElementById('input-blog-image')
    images = URL.createObjectURL(images.files[0]) ; 


    // deklarasikan sebuah object, dalam hal ini di inialisasikan sebagai project
    let project = { 

        projectName:projectName, 
        startDate:startDate,
        endDate:endDate,
        Desc:Desc,
        inputSkill:inputSkill,
        images, 
        postedAt : new Date(),
        Author:"Abdur Rahman"
    }


    // ambil object projects lalu push untuk mendapatkan nilai terbaru berdasar dari form input
    projects.push(project) ;
    renderProject ()

    // console.log(project);
}


function renderProject () {


    let projectContainer = document.getElementById('projects')

    projectContainer.innerHTML = `<div class="list-project">
    <div class="header">
    <a href="project-detail.html"><img src="assets/a.jpg" alt="" width="100%"></a>
    <p> <b> Dumbways Mobile App - 2022</b></p>
    <small>durasi :  3 bulan</small>
    </div>
    <div class="content">
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,orem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,orem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,</p>
    <p class="content-awesome">
        <i class="fab fa-google-play"></i>
        <i class="fab fa-android"></i>
        <i class="fab fa-java"></i>
    </p>
    </div>
    <div class="footer">
    <div class="edit">
        <a href="#">edit</a>
    </div>
    <div class="delete">
        <a href="#">delete</a>
    </div>
    </div>
    
</div>

<div class="list-project">
    <div class="header">
    <a href="project-detail.html"><img src="assets/a.jpg" alt="" width="100%"></a>
    <p> <b> Dumbways Mobile App - 2022</b></p>
    <small>durasi :  3 bulan</small>
    </div>
    <div class="content">
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,orem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,orem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,</p>
    <p class="content-awesome">
        <i class="fab fa-google-play"></i>
        <i class="fab fa-android"></i>
        <i class="fab fa-java"></i>
    </p>
    </div>
    <div class="footer">
    <div class="edit">
        <a href="#">edit</a>
    </div>
    <div class="delete">
        <a href="#">delete</a>
    </div>
    </div>
    
</div>

<div class="list-project">
    <div class="header">
    <a href="project-detail.html"><img src="assets/a.jpg" alt="" width="100%"></a>
    <p> <b> Dumbways Mobile App - 2022</b></p>
    <small>durasi :  3 bulan</small>
    </div>
    <div class="content">
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,orem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,orem ipsum dolor, sit amet consectetur adipisicing elit. Quidem sint et quibusdam nihil,</p>
    <p class="content-awesome">
        <i class="fab fa-google-play"></i>
        <i class="fab fa-android"></i>
        <i class="fab fa-java"></i>
    </p>
    </div>
    <div class="footer">
    <div class="edit">
        <a href="#">edit</a>
    </div>
    <div class="delete">
        <a href="#">delete</a>
    </div>
    </div>
    
</div>`

    for(let i=0; i<projects.length; i++ ) {
        projectContainer.innerHTML += `
        <div class="list-project">
        <div class="header">
        <a href="project-detail.html"><img src="${projects[i].images}" alt="" width="100%"></a> 
        <p> <b> ${projects[i].projectName} </b></p>
        <small>durasi :  ${durationMonth(projects[i].startDate, projects[i].endDate)} Bulan</small>
        </div>
        <div class="content">
        <p>${projects[i].Desc}</p>
        <p class="content-awesome">
            <i class="${projects[i].inputSkill[0]}"></i>
            <i class="${projects[i].inputSkill[1]}"></i>
            <i class="${projects[i].inputSkill[2]}"></i>
            <i class="${projects[i].inputSkill[3]}"></i>
        </p>
        
        </div>
        <div class="footer">
        <div class="edit">
            <a href="#">edit</a>
        </div>
        <div class="delete">
            <a href="#">delete</a>
        </div>
        </div>
        
    </div>`
    }
    
}

function getFullTime(time) { 
    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()
  
    let hours = time.getHours()
    let minutes = time.getMinutes()
    
    if(minutes < 10){
      minutes = '0' + minutes 
    }
    
    return `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
}

function getDistanceTime(time){
    // waktu saat ini - waktu postingan
    const distance = new Date() - new Date(time)
  
    // convert to day
    const miliseconds = 1000
    const secondsInMinute = 60
    const minutesInHour = 60
    const secondsInHour = secondsInMinute * minutesInHour
    const hoursInDay = 23
    const month = 30

    let monthDistance = distance /( miliseconds * secondsInHour * hoursInDay / month)
   
     let dayDistance = distance / (miliseconds * secondsInHour * hoursInDay)
     dayDistance = 60
     if (dayDistance < 30){
       if (dayDistance >= 1){
         return Math.floor(dayDistance) + ' day ago'
        // menghitung 1 day ago
      } else {
          // convert to hour
          let hourDistance = Math.floor(distance / (miliseconds * secondsInHour))
          if (hourDistance > 0 ) {
              return hourDistance + ' hour ago'
            } else {
                // convert to minute
                const minuteDistance = Math.floor(distance / (miliseconds * secondsInMinute))
                return minuteDistance + ' minute ago'
              }
            }
      } else {
        return Math.floor(dayDistance / month) + ' month ago'
      } 
      
            
    console.log(monthDistance);
}


function durationProjects() { 
    // event.preventDefault() ; //untuk penghentian reload yg berhubungan dengan onsubmit 
      
    const start_date = new Date(project.startDate) ; 
    const end_date = new Date(project.endDate) ; 
  
    const total_months = (end_date.getFullYear() - start_date.getFullYear())*12 + (end_date.getMonth() - start_date.getMonth()) 
}


function durationMonth(start, end) { 
    const startDate = new Date(start) ;
    const endDate = new Date(end) ;
    const total_months = (endDate.getFullYear() - startDate.getFullYear())*12 + (endDate.getMonth() - startDate.getMonth()) 

    return total_months ; 

  }