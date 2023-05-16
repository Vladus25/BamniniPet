import { Component } from '@angular/core';
import { SpringConnService } from './services/spring-conn.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BamniniPet';

  bambini: any;
  pets: any;
  media:any;
  selectedBambino!: number;
  selectedPet!: number;

  constructor(private connection: SpringConnService) { }

  ngOnInit(): void {
    this.connection.getAllBambini().subscribe(data => {
      this.bambini = data;
    });

    this.connection.getAllPet().subscribe(data => {
      this.pets = data;
    });
  }

  calcolaMedia(){
    this.connection.getMedia().subscribe(data => {
      this.media = data;
    });
  }

  associaBambinoPet() {
    if (this.selectedBambino && this.selectedPet) {
      this.connection.addBambinoToPet(this.selectedPet, this.selectedBambino).subscribe(() => {
        console.log('Associazione effettuata con successo');
      }, (error) => {
        console.log(error);
      });
    } else {
      console.log('Seleziona un bambino e un pet');
    }
  }
}
