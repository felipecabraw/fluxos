import { Route, Routes } from 'react-router-dom';

import { ChecklistPage } from '../features/checklists/pages/ChecklistPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<ChecklistPage />} />
    </Routes>
  );
}
