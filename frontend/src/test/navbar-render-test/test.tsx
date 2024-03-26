import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Navbar from '../../components/navbar'; 

describe('Navbar Component', () => {
  test('renders correctly', () => {
    render(<Navbar />);
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  test('contains the Clientes item', () => {
    render(<Navbar />);
    const dashboardElement = screen.getByText('Clientes');
    expect(dashboardElement).toBeInTheDocument();
  });

  test('contains the Pesquisa item', () => {
    render(<Navbar />);
    const logoElement = screen.getByAltText('Pesquisa');
    expect(logoElement).toBeInTheDocument();
  });
});
