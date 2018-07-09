import {Injectable} from '@angular/core';
import {Meta, MetaDefinition, Title} from '@angular/platform-browser';
import {WebsiteInformation} from '../constants/website-information.constant';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {


  constructor(private title_service: Title, private meta_service: Meta) {
    this.setTitle(this.websiteInformation.TITLE_CAPITALIZE);
    this.setMeta();
  }

  public websiteInformation: WebsiteInformation = new WebsiteInformation();

  setTitle(titleService) {
    this.title_service.setTitle(titleService);
  }

  setMeta() {
    const meta_defination: MetaDefinition[] = [
      {httpEquiv: 'cache-control', content: 'no-cache'},
      {httpEquiv: 'expires', content: '0'},
      {httpEquiv: 'pragma', content: 'no-cache'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'og:title', content: this.websiteInformation.TITLE_CAPITALIZE},
      {name: 'description', content: this.websiteInformation.TITLE_CAPITALIZE + ' bir oyun sitesidir. '},
      {name: 'og:description', content: this.websiteInformation.TITLE_CAPITALIZE + ' bir oyun sitesidir.'},
      {name: 'og:image', content: '/assets/img/blacklogo.jpg'},
    ];

    this.meta_service.addTags(meta_defination);
  }
}
