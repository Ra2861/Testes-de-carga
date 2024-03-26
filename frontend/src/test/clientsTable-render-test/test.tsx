import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { ClientsTable } from '@/components/searchTables/clientsTable'; 

describe('Navbar Component', () => {
    test('renders correctly', () => {
      render(<ClientsTable />);
      const navbarElement = screen.getByRole('navigation');
      expect(navbarElement).toBeInTheDocument();
    });
});