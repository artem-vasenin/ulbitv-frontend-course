const aboutPage = require('../pages/about.page');

describe('My about page', () => {
    it('should login with valid credentials', async () => {
        await aboutPage.open();
      await expect(aboutPage.title).toBeExisting('About page: ');
        await aboutPage.input.setValue('Rusich');
        await expect(aboutPage.title).toBeExisting('About page: Rusich');
      await aboutPage.toggleBtn.click();
      await expect(aboutPage.title).not.toBeExisting('About page: Rusich');
    })
})


