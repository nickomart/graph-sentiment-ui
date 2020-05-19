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
      },
      relationships: {
        SENTIMENT_TO: {
            thickness: 'quantifiedScore',
            caption: false,
            color: '#2c6d2e',
            colorFn: (rel: any) => rel.properties.quantifiedScore > 0 ? GREEN : RED,
        }
      },
      arrows: true,
      console_debug: true,
      initial_cypher: 'MATCH p=()-[r:SENTIMENT_TO]->() RETURN p LIMIT 25',
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
