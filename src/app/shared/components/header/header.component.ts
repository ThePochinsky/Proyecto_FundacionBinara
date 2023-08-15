import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isMenuOpen: boolean = false;

  ngOnInit() { }

  selectedLink: string = ''; // Enlace seleccionado
  backgroundImages: { [key: string]: string } = {
    '': 'url("https://tirant.com/wp-content/uploads/2023/06/dia-mundial-del-medio-ambiente-face.png")',
    'Nosotros': 'url("https://di-sitebuilder-assets.s3.amazonaws.com/GMimages/gmMLP/chevrolet/Corvette/2023/Content-1.jpg")',
    'Proyectos': 'url("../assets/images/proyectos-background.jpg")',
    'Anuncios': 'url("../assets/images/anuncios-background.jpg")',
    'Blog': 'url("../assets/images/blog-background.jpg")',
    'Contactanos': 'url("../assets/images/contactanos-background.jpg")',
    'Involúcrate': 'url("../assets/images/involucrate-background.jpg")'
  };

  changeBackground(link: string): void {
    this.selectedLink = link;
  }

  /*  toggleMenu() {
     this.isMenuOpen = !this.isMenuOpen;
   } */

  toggleMenu() {
    
    const navigation = document.querySelector('.menu-links');
    const burgerMenu = document.querySelector(".menu-icon");

    const src = burgerMenu?.getAttribute('src');

    const isBurger = src === 'burger-menu.svg';
    const iconName = isBurger ?
      'close.svg' :
      'burger-menu.svg';
    burgerMenu?.setAttribute(
      'src', iconName
    );

    if (!isBurger) {
      navigation?.classList.add("navigation--mobile--fadeout");
      setTimeout(() => {
        navigation?.classList.toggle(
          'navigation--mobile'
        );
      }, 300)
    } else {
      navigation?.classList.remove("navigation--mobile--fadeout");
      navigation?.classList.toggle(
        'navigation--mobile');
    }
  };

}
