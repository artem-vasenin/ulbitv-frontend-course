import {render, screen} from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

import App from "./App";
import {MemoryRouter} from "react-router-dom";

describe('Router test block', () => {
  // test('Проверка переходов по страницам', async () => {
  //   render(
  //     <MemoryRouter>
  //       <App />
  //     </MemoryRouter>
  //   );
  //   const homeLink = screen.getByTestId('home-link');
  //   const aboutLink = screen.getByTestId('about-link');
  //   const usersLink = screen.getByTestId('users-link');
  //   userEvent.click(homeLink);
  //   expect(screen.getByTestId('title')).toContainHTML('Home page')
  //   userEvent.click(aboutLink);
  //   expect(screen.getByTestId('title')).toContainHTML('About page')
  //   userEvent.click(usersLink);
  //   const users = await screen.findAllByTestId('user-item');
  //   expect(users.length).toBe(10);
  // });
  test('Проверка на несуществующий урл', async () => {
    render(
      <MemoryRouter initialEntries={['/fdfdf']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('title')).toContainHTML('404 Not found')
  });
});
