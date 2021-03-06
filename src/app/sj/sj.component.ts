import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sj',
  templateUrl: './sj.component.html',
  styleUrls: ['./sj.component.css']
})
export class SJComponent implements OnInit {
  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  wind;
  clouds;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
      this.weather = this.httpService.getWeather('San Jose')
      .then( weather => {
        console.log(weather)
        this.humidity = weather.main.humidity;
        this.temp = weather.main.temp;
        this.temp = Math.floor(this.temp * (9/5) - 459.67);
        this.maxTemp = weather.main.temp_max;
        this.maxTemp = Math.floor(this.maxTemp * (9/5) - 459.67);
        this.minTemp = weather.main.temp_min;
        this.minTemp = Math.floor(this.minTemp * (9/5) - 459.67);
        this.clouds = weather.weather[0].description;
    });
  }

}
