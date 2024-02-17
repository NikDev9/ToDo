import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Signup from './Signup';  
import { BrowserRouter } from 'react-router-dom';

describe('Signup Component', () => {
  beforeEach(() => {
    // Mock the fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ user_id: '123' }),
      })
    );
  });

  afterEach(() => {
    // Clean up the mock to ensure tests are completely isolated
    global.fetch.mockClear();
  });

  test('renders signup form and submits with entered values', async () => {
    render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>
    );

    // Check if the form elements are rendered
    expect(screen.getByPlaceholderText(/enter email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();

    // Fill out the form
    fireEvent.change(screen.getByPlaceholderText(/enter email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/enter name/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByPlaceholderText(/password/i), { target: { value: 'password123' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Wait for the fetch call to be made
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(localStorage.getItem('user_id')).toBe('123');
      // Add more expectations based on your application's behavior
    });
  });
});