import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ChecklistPage } from './ChecklistPage';

describe('ChecklistPage', () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.spyOn(window, 'confirm').mockReturnValue(true);
  });

  it('renders the institutional page and updates progress when a task is checked', async () => {
    const user = userEvent.setup();

    render(<ChecklistPage />);

    expect(screen.getAllByText('SEAP FLUXOGRAMAS')).toHaveLength(2);
    expect(screen.getByText('Checklist Dinâmico - Processo de Pregão')).toBeInTheDocument();
    expect(screen.getByText('0 de 21 etapas concluídas')).toBeInTheDocument();

    await user.click(screen.getByLabelText(/CPL: Elaborar Minutas Iniciais/i));

    expect(screen.getByText('1 de 21 etapas concluídas')).toBeInTheDocument();
  });
});
