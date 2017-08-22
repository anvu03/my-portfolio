import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">An Vu</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Projects
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Mortgage Calculator</a>
                <a class="dropdown-item" href="#">Project 2</a>
                <a class="dropdown-item" href="#">Project 3</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.linkedin.com/in/anquocvu/" target="_blank" style="color: white; padding: 8px 0 0 0;">
                <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"
                   style="color: white; padding: 0; margin: 0;"> </i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/anvu03" target="_blank" style="color: white;  padding: 8px 0 0 0;">
                <i class="fa fa-github fa-2x" aria-hidden="true" style="color: white; padding: 0; margin: 0;"></i>
              </a>
            </li>
          </ul>
        </div>

      </div>

    </nav>
  `,
  styles: [``]
})

export class NavbarComponent {
}
