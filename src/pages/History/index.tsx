import { HistoryContainer, HistoryTable, Status } from './styles';

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryTable>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td><Status statusColor='green'>Concluído</Status></td>
            </tr>
             <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td><Status statusColor='green'>Concluído</Status></td>
            </tr>
             <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td><Status statusColor='yellow'>Em andamento</Status></td>
            </tr>
             <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há 2 meses</td>
              <td><Status statusColor='red'>Interrompido</Status></td>
            </tr>
          </tbody>
        </table>
      </HistoryTable>
    </HistoryContainer>
  );
}