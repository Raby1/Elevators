export class Floor {
    constructor(numFloor, css, btn, div,listElevator) {
      this.numFloor = numFloor;
      this.css = css;
      this.btn = btn;
      this.div = div;
      this.createFloorElement();
      this.height = div.getBoundingClientRect().y;
      this.elevater = listElevator
      
           
    }
    
    
    createFloorElement() {
      // יצירת אלמנטים HTML
      const buildingDiv = this.div;
      buildingDiv.classList.add('building');
  
      const floorDiv = document.createElement('div') ;
      floorDiv.classList.add(this.css);
      // console.log(this.css)
      
      const floorButton = this.btn
      floorButton.classList.add('metal', 'linear'); // הוספת מחלקות לכפתור
      floorButton.textContent = this.numFloor;
      floorButton.style.display = 'block'
      floorButton.style.margin = ' 0 auto'
      floorButton.style.marginTop = '8px'
      floorButton.addEventListener('click',this.readElevater.bind(this))
      
      
      
      // הוספת אלמנטים ל-div
      floorDiv.appendChild(floorButton);
      buildingDiv.appendChild(floorDiv);
      
      // הוספת div לבניין
      document.getElementById('building').appendChild(buildingDiv);
      
      
      
      //קריאת המעלית
      // שמירת קשר בין אובייקט Floor לאלמנטים שנוצרו
      this.buildingDiv = buildingDiv;
      this.floorDiv = floorDiv;
      this.floorButton = floorButton;
        
      
    }
    
   readElevater(){
     const flooLoation = this.height
     this.elevater[0].moveToFloor(this.height)


    this.elevater[1].location = flooLoation
    this.elevater[0].location =this.height
    
    
   
    
    

    
    }
    }
  
  

 



