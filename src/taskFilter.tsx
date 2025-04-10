import './App.css'

interface TaskFilterProps {
    onChangeFilter: (filter: 'completed' | 'pending' | 'all') => void;
  }
  
  export const TaskFilter = ({ onChangeFilter }: TaskFilterProps) => {
    const handleFilterChange = (filter: 'completed' | 'pending' | 'all') => {
      onChangeFilter(filter);
    };
  
    return (
      <div className='button-filter'>
        <button className="button" onClick={() => handleFilterChange('completed')}>
          Filtrar completadas
        </button>
        <button className="button" onClick={() => handleFilterChange('pending')}>
          Filtrar pendientes
        </button>
        <button className="button" onClick={() => handleFilterChange('all')}>
          Mostrar todas
        </button>
      </div>
    );
  };