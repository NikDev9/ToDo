import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TaskList from './TaskList';  
import { MemoryRouter } from 'react-router-dom';

describe('TaskList Component', () => {
  const mockLocation = {
    pathname: '/mylist',
    state: { user_id: '123' },
    search: '',
    hash: '',
    key: '5nvxpbdafa',
  };

  beforeEach(() => {
    // Mock the fetch function to simulate fetching tasks
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([]), // Simulate an empty array of tasks
      })
    );
  });

  afterEach(() => {
    // Clean up the mock to ensure tests are completely isolated
    global.fetch.mockClear();
  });

  test('renders TaskList component and toggles add task input', async () => {
    render(
      <MemoryRouter initialEntries={[mockLocation]}>
        <TaskList />
      </MemoryRouter>
    );

    // Check if the "Add task" button is rendered
    const addButton = screen.getByRole('button', { name: /add task/i });
    expect(addButton).toBeInTheDocument();

    // Click the "Add task" button to toggle the input field
    fireEvent.click(addButton);

    // Check if the input field is now visible
    expect(screen.getByPlaceholderText(/enter task/i)).toBeInTheDocument();

    // Enter a new task
    fireEvent.change(screen.getByPlaceholderText(/enter task/i), { target: { value: 'New Task' } });

    // Click the "Add" button to save the task
    const saveButton = screen.getByRole('button', { name: /add/i });
    fireEvent.click(saveButton);

    // Wait for the state updates to complete
    await waitFor(() => {
      // Check if the input field is now hidden
      expect(screen.queryByPlaceholderText(/enter task/i)).not.toBeInTheDocument();
    });
  });
});