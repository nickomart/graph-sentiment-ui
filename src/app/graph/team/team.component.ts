import { Component, OnInit } from '@angular/core';
import NeoVis,  { NEOVIS_DEFAULT_CONFIG, INeovisConfig, NeovisEvent } from 'neovis.js';

const GREEN = '#2c6d2e';
const RED = '#f44b42';

@Component({
  selector: 'app-nickom-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  config: INeovisConfig;
  legend: string;

  constructor() {
    this.config = {
      container_id: 'viz',
      // change this cred to match your local settings
      server_url: 'bolt://localhost:7687',
      server_user: 'neo4j',
      server_password: 'admin',
      labels: {
        Person: {
            caption: 'name'
        },
        Entity: {
          caption: 'name',
          shape: 'square'
      },
      },
      relationships: {
        SENTIMENT_TO: {
            thickness: 'quantifiedScore',
            caption: false,
            color: '#2c6d2e',
            colorFn: (rel: any) => rel.properties.quantifiedScore > 0 ? GREEN : RED,
        },
        BELONG_TO: {
          thickness: 'null',
          caption: true,
          color: '#000000',
      }
      },
      arrows: true,
      console_debug: true,
      initial_cypher: 'Match a=()-[r:SENTIMENT_TO]->(),b=()-[r2:BELONG_TO]->() Return a,b',
      customEdgesScalingFn: (min: number, max: number, total: number, value: number) => {
        const absVal = Math.abs(value);
        return (absVal < 0) ? 0 : (absVal > 1 ? 1 : absVal);
      },
      cacheProperties: true
    };
  }

  ngOnInit(): void {
    const viz = new NeoVis(this.config);
    viz.registerOnEvent(NeovisEvent.ClickNodeEvent, (e) => {
      this.legend  = JSON.stringify(e);
    });
    viz.registerOnEvent(NeovisEvent.ClickEdgeEvent, (e) => {
      this.legend  = JSON.stringify(e);
    });
    viz.render();
  }
}
