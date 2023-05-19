const Page = require('./page');

class AboutPage extends Page {
  get toggleBtn() {
    return $('#toggle');
  }
  get title() {
    return $('#title');
  }
  get input() {
    return $('#search');
  }

  open () {
    return super.open('/about');
  }
}

module.exports = new AboutPage();
