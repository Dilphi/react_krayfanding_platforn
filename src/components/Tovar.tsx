import { useState } from 'react';

// Интерфейс для описания проекта
interface Project {
  id: number;           // Уникальный идентификатор проекта
  name: string;         // Название проекта
  description: string;  // Описание проекта
  goal: number;         // Целевая сумма сбора
  collected: number;    // Сколько собрано средств
  rewards: string;      // Система вознаграждений
}

function Tovar() {
  // Состояние для хранения проектов
  const [projects, setProjects] = useState<Project[]>([]);
  // Состояние для хранения данных нового проекта
  const [newProject, setNewProject] = useState<Omit<Project, 'id' | 'collected'>>({
    name: '',
    description: '',
    goal: 0,
    rewards: '',
  });

  // Состояние для хранения данных о донатах
  const [donations, setDonations] = useState<Record<number, number>>({});

  // Функция для добавления нового проекта
  const handleAddProject = () => {
    // Проверка на заполнение всех полей
    if (!newProject.name || !newProject.description || !newProject.goal) {
      alert('Пожалуйста, заполните все поля проекта.');
      return;
    }

    // Генерация нового id и добавление проекта
    const newId = projects.length + 1;
    setProjects([...projects, { ...newProject, id: newId, collected: 0 }]);
    // Сброс полей нового проекта
    setNewProject({ name: '', description: '', goal: 0, rewards: '' });
  };

  // Функция для обработки доната
  const handleDonate = (id: number) => {
    const amount = donations[id] || 0;
    // Проверка на корректность суммы доната
    if (amount <= 0) {
      alert('Введите корректную сумму доната.');
      return;
    }

    // Обновление суммы собранных средств для проекта
    setProjects((prevProjects) =>
      prevProjects.map((project) => {
        if (project.id === id) {
          const updatedCollected = project.collected + amount;
          // Проверка на достижение цели
          if (updatedCollected >= project.goal) {
            alert(`Проект достиг своей цели! Награда: ${project.rewards}`);
          }
          return { ...project, collected: updatedCollected };
        }
        return project;
      })
    );
    // Сброс суммы доната после внесения
    setDonations((prevDonations) => ({ ...prevDonations, [id]: 0 }));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Краудфандинговая платформа</h1>

      <div style={{ marginBottom: '20px' }}>
        <h2>Добавить проект</h2>
        <input
          type="text"
          placeholder="Название проекта"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <textarea
          placeholder="Описание проекта"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <input
          type="number"
          placeholder="Цель (сумма)"
          value={newProject.goal || ''}
          onChange={(e) => setNewProject({ ...newProject, goal: Number(e.target.value) })}
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <input
          type="text"
          placeholder="Система вознаграждений"
          value={newProject.rewards}
          onChange={(e) => setNewProject({ ...newProject, rewards: e.target.value })}
          style={{ display: 'block', marginBottom: '10px', width: '100%' }}
        />
        <button onClick={handleAddProject}>Добавить проект</button>
      </div>

      <div>
        <h2>Проекты</h2>
        {projects.map((project) => (
          <div
            key={project.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
            }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              Цель: {project.goal} тенге. | Собрано: {project.collected} тенге.
            </p>
            <p>Вознаграждения: {project.rewards}</p>

            <input
              type="number"
              placeholder="Сумма доната"
              value={donations[project.id] || ''}
              onChange={(e) => setDonations({ ...donations, [project.id]: Number(e.target.value) })}
              style={{ marginRight: '10px' }}
            />
            <button onClick={() => handleDonate(project.id)}>Спонсировать</button>
          </div>
        ))}
        {projects.length === 0 && <p>Проектов пока нет.</p>}
      </div>
    </div>
  );
}

export default Tovar;
