import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { SatisfactionSurveyTable } from '@/components/searchTables/satisfactionSurveyTable';

describe('Navbar Component', () => {
    test('renders correctly', () => {
      render(<SatisfactionSurveyTable />);
      const navbarElement = screen.getByRole('navigation');
      expect(navbarElement).toBeInTheDocument();
    });
});