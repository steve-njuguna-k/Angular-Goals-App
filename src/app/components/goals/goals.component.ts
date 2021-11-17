import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/goal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  goals: Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2022,3,14)),
    new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2022,6,9)),
    new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2022,1,12)),
    new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2022,0,18)),
    new Goal(5,'Solve math homework','Damn Math',new Date(2022,2,14)),
    new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2022,3,14)),
    new Goal(7,'Go for jogging','I must lose these 5kg',new Date(2022,7,18)),
    new Goal(8,'Play PS Games','God of War is waiting for me',new Date(2022,10,14)),
    new Goal(9,'Finish up my class assignment','It is due by Monday',new Date(2022,5,18)),
  ];

  toggleDetails(index: any){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete: boolean, index: any){
    if (isComplete) {
      let markComplete = confirm(`Are you sure you want to mark ${this.goals[index].name} as completed?`)

      if (markComplete){
        this.goals.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
