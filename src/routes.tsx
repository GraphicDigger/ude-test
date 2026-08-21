import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScreenHome from './pages/Screen-home/Screen';
import ScreenAbout from './pages/Screen-about/Screen';
import ScreenTypographyTest from './pages/Screen-typography-test/Screen';
import ScreenLinkExamples from './pages/Screen-link-examples/Screen';
import ScreenBlocks from './pages/Screen-blocks/Screen';
import ScreenRepeatTest from './pages/Screen-repeat-test/Screen';
import ScreenRecord from './pages/Screen-record/Screen';
import ScreenActions from './pages/Screen-actions/Screen';
import ScreenVariables from './pages/Screen-variables/Screen';

/**
 * Адреса экранов приложения.
 *
 * Файл ведёт редактор: экран добавляется, переименовывается и удаляется вместе
 * со своим адресом. Править вручную можно — адрес в этом файле и есть истина,
 * редактор её читает.
 */
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScreenBlocks />} />
        <Route path="/home/:recordKey?" element={<ScreenHome />} />
        <Route path="/about/:recordKey?" element={<ScreenAbout />} />
        <Route path="/typography-test/:recordKey?" element={<ScreenTypographyTest />} />
        <Route path="/link-examples/:recordKey?" element={<ScreenLinkExamples />} />
        <Route path="/blocks/:recordKey?" element={<ScreenBlocks />} />
        <Route path="/repeat-test/:recordKey?" element={<ScreenRepeatTest />} />
        <Route path="/record/:recordKey?" element={<ScreenRecord />} />
        <Route path="/actions/:recordKey?" element={<ScreenActions />} />
        <Route path="/variables/:recordKey?" element={<ScreenVariables />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
}
