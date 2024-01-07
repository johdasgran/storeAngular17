import { Component, ElementRef, Input, ViewChild, signal } from '@angular/core';

import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.scss'
})
export class WaveAudioComponent {

  @Input() audioUrl!: string;
  @ViewChild("wave") container!: ElementRef;
  private ws!: WaveSurfer;
  isPlaying = signal(false);

  ngAfterViewInit() {
    this.ws =  WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement,
      waveColor: '#ddd',
      progressColor: '#328ff0',
      barWidth: 4,
      barGap: 3,
      height: 90,
      barRadius: 4,
    })
    this.ws.on('play', ()=> this.isPlaying.set(true))
    this.ws.on('pause', ()=> this.isPlaying.set(false))
  }


  toggleAudio() {
    this.ws.playPause();
  }

}
