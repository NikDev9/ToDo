import { render, screen, fireEvent } from '@testing-library/react';
import AllUsers from './AllUsers';  

describe('AllUsers Component', () => {
  beforeEach(() => {
    // Mock the fetch function to simulate fetching users
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]), // Simulate an empty array of users
      })
    );
  });

  afterEach(() => {
    // Clean up the mock to ensure tests are completely isolated
    global.fetch.mockClear();
  });

  test('renders AllUsers component and toggles add user form', async () => {
    render(<AllUsers />);

    // Check if the "Add user" button is rendered
    const addButton = screen.getByRole('button', { name: /add user/i });
    expect(addButton).toBeInTheDocument();

    // Click the "Add user" button to toggle the form
    fireEvent.click(addButton);

    // Check if the form is now visible
    expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/admin \(1 or 0\)/i)).toBeInTheDocument();

    // Click the "Cancel" button to hide the form
    const cancelButton = screen.getByRole('button', { name: /cancel/i });
    fireEvent.click(cancelButton);

    // Check if the form is now hidden
    expect(screen.queryByPlaceholderText(/email address/i)).not.toBeInTheDocument();
  });
});