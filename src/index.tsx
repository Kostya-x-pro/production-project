import { BrowserRouter } from 'react-router-dom';
import { render } from "react-dom"; 
import { ThemeProvider } from 'app/providers/ThemeProvider';

import App from "./app/App";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
