import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

function withProvider({ children, initialRoutes }) {
  return (
    <MemoryRouter initialEntries={initialRoutes}>
      {children}
    </MemoryRouter>
)
};

function renderWithBrowser(component, options) {
  const initialRoutes = (options && options.initialRoutes)
    ? options.initialRoutes
    : ['/'];
  return render(component, { wrapper: (args) =>
    withProvider({
      ...args,
      initialRoutes
    }), ...options
  });
};

export default renderWithBrowser;