import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume',
  template: `
    <div class="resume-wrapper">
      <section>
        <h3>Experience</h3>
        <h5><span>April 2017 - Present:</span> Software Developer</h5>
        <h6>Track Soft Inc.</h6>
        <ul style="color: black">
          <li>Develop a single-paged application using Angular 4 framework</li>
          <li>Design and create a complex database that fits business needs</li>
          <li></li>
        </ul>

        <h5>Septemper 2016 - Present: Software Development Intern</h5>
        <h6>University of South Alabama</h6>
        <ul style="color: black;">
          <li>Develop a RESTful API which logs errors generated from Pilot Catastrophe's servers and stores in a
            database
          </li>
          <li>Develop a web interface that uses Bootstrap 3 and jQuery 3. The interface allows users to search and sort
            error logs, and expand error log detail.
          </li>
        </ul>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  `,
  styles: [`
    .resume-wrapper {
      margin-top: 64px;
      max-width: 600px;
    }

    h3 {
      margin-bottom: 16px;
    }
  `]
})
export class ResumeComponent {

}
