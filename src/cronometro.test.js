import { render, screen } from '@testing-library/react';
import { Cronometro } from './cronometro';

test('valida se cronometro é renderizado', () => {
  render(<Cronometro />);
  const btnPlay = screen.getByText(/Iniciar/i);
  expect(btnPlay).toBeInTheDocument();
  const btnPausar = screen.getByText(/Pausar/i);
  expect(btnPausar).toBeInTheDocument();
  const btnStop = screen.getByText(/parar/i);
  expect(btnStop).toBeInTheDocument();
});

test('realiza a ação de inicio, pausar e parar cronometro', async () => {
  render(<Cronometro />);
  const btnPlay = screen.getByText(/Iniciar/i);
  btnPlay.click()
  setTimeout( ()=> {
    expect(screen.getByTestId('timer')).toHaveTextContent('00:01')
  }, 1000)
  const btnPausar = screen.getByText(/Pausar/i);
  btnPausar.click()
  setTimeout( ()=> {
    expect(screen.getByTestId('timer')).toHaveTextContent('00:01')
  }, 1000)
  const btnStop = screen.getByText(/parar/i);
  btnStop.click()
  await expect(screen.getByTestId('timer')).toHaveTextContent('00:00')

});
