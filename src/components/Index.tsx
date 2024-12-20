import { useNavigate } from 'react-router-dom';

function Index() {
  // Используем функцию useNavigate для навигации между страницами
  const navigate = useNavigate();

  // Обработчик нажатия на кнопку "Перейти к проектам"
  const TovarClick = () => {
    // Перенаправление на страницу /tovar-form
    navigate('/tovar-form');
  };
  
  // Обработчик нажатия на кнопку "Что такое Краудфандинг?"
  const AboutClick = () => {
    // Перенаправление на страницу /about-form
    navigate('/about-form');
  };

  return (
    <>
      <div className="container">
        <h1>Добро пожаловать на Краудфандинговую платформу</h1>
        <p className='info-p'>Здесь вы можете создать или поддержать проект.</p>

        <div className="btn-nav">
          {/* Кнопка "Что такое Краудфандинг?" */}
          <button className="about-btn" onClick={AboutClick}>
            Что такое Краудфандинг?
          </button>
          {/* Кнопка "Перейти к проектам" */}
          <button className="tovar-btn" onClick={TovarClick}>
            Перейти к проектам
          </button>
        </div>
      </div>
    </>
  );
}

export default Index;
