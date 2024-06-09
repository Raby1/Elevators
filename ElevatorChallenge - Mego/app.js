import { Floor } from "./floorsClass.js";
import { Elevater } from "./elevaterClass.js";


const createFloorList = () => {
    for (let i = 24; i >= 0; i--) {
        const newFloor = new Floor(i, 'floor', document.createElement('button'), document.createElement('div'),elevaterList);
        listFloors.push(newFloor);
    }
}


const createElevaterList = () =>{
    for(let i = 0;i<3;i++){
        let nawElevater = new Elevater(i,document.createElement('img'),'elv.png');
        elevaterList.push(nawElevater)
    }
} 

const elevaterList = []    
let listFloors = [];
createElevaterList()
createFloorList(); 
 
    elevaterList.forEach