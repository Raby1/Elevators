export class Elevater{
    constructor(id,img,src){
        this.id = id//מספר ייחודי לכל מעלית 
        this.img = img//אלמנט IMG
        this.src = src//מקור תמונת המעלית
        this.createElevater()//מתודה לייצור המעלית HTMLן-CSS
        this.location = img.getBoundingClientRect().y//מיקום המעלית 
        // this.callElevater()  
    }
    createElevater(){
        const elvaterDiv = document.createElement('div');
        elvaterDiv.classList.add('elevater');

        const imgDiv = document.createElement('div');
        elvaterDiv.appendChild(imgDiv)

        const imgElement = document.createElement('img')
        imgDiv.appendChild(imgElement)
        imgElement.src = this.src
        elvaterDiv.appendChild(imgDiv)
        document.getElementById('elevater').style.display = 'flex'
        document.getElementById('elevater').appendChild(elvaterDiv)

        this.elvaterDiv = elvaterDiv            
        this.imgElement = imgElement
     
    
    }
     
    moveToFloor(requestedFloor) {
        // מציאת הקומה הנוכחית
        console.log(requestedFloor);
        const currentFloor = this.location;
        console.log(currentFloor);
        
        // חישוב המרחק בין הקומות
        const floorDistance = Math.abs(requestedFloor - currentFloor);
        console.log(floorDistance);
        // this.imgElement.style.position = 'absolute'
        this.imgElement.style.top = floorDistance
      
        // חישוב זמן הנסיעה (חצי שניה לקומה)
        const travelTime = floorDistance * 0.5;
      
        // תנועת המעלית לקומה המבוקשת
        setTimeout(() => {
          this.location = requestedFloor;
        }, travelTime * 1000);
      } 
        
    }
    




