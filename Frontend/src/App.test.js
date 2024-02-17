import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';  

describe('App Component', () => {
  test('renders Login component on default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test('renders Signup component on /signup route', () => {
    render(
      <MemoryRouter initialEntries={['/signup']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/signup/i)).toBeInTheDocument();
  });

  test('renders TaskList component on /mylist route', () => {
    render(
      <MemoryRouter initialEntries={['/mylist']}>
        <App />
      </MemoryRouter>
    );
    const taskListElement = screen.queryByText(/tasklist/i);
    expect(taskListElement).toBeNull();
  });

  test('renders AllUsers component on /users route', () => {
    render(
      <MemoryRouter initialEntries={['/users']}>
        <App />
      </MemoryRouter>
    );
    const taskListElement = screen.queryByText(/allusers/i);
    expect(taskListElement).toBeNull();
    });
});