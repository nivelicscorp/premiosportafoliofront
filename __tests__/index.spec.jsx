import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders the home page', () => {
    render(<Home />);
    const pageTitle = screen.getByText(
      'Instantly deploy your Next.js site to a public URL with Vercel.'
    );
    expect(pageTitle).toBeInTheDocument();
  });
});
