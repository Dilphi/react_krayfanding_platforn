# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# react_krayfanding_platforn

### README файл для проекта

---

# Описание проекта

**Краудфандинговая платформа** - это приложение, разработанное для облегчения процесса создания и поддержки проектов через коллективное финансирование. Оно позволяет пользователям создавать проекты, назначать цели и системы вознаграждений, а также собирать средства от спонсоров. Пользователи могут поддерживать проекты, делая донаты, и следить за прогрессом сбора средств.

# Инструкции по запуску

1. Клонирование репозитория:
   ```bash
   git clone https://github.com/Dilphi/react_krayfanding_platforn.git
   cd react_krayfanding_platforn
   ```

2. Установка зависимостей:
   Перейдите в директорию проекта и выполните:
   ```bash
   npm install
   ```

3. Запуск проекта:
   После установки зависимостей, запустите приложение командой:
   ```bash
   npm run dev
   ```

   Проект должен открыться в вашем браузере на `http://localhost:3000`.

# Информация о функциональности

1. *Добавление проектов*:
   - Пользователи могут создавать новые проекты, заполняя необходимые поля: название, описание, цель сбора средств и система вознаграждений.
   - Новые проекты автоматически получают уникальный идентификатор и начинают с нуля по количеству собранных средств.

2. *Просмотр проектов*:
   - Пользователи могут просматривать существующие проекты с деталями о цели, текущем количестве собранных средств и системах вознаграждений.
   - Для каждого проекта отображаются доступные донаты и текущая сумма собранных средств.

3. *Спонсирование проектов*:
   - Пользователи могут спонсировать проекты, вводя сумму доната и нажимая кнопку "Спонсировать".
   - Проект обновляется с новой суммой собранных средств, и если проект достигает своей цели, пользователю отображается сообщение о достижении цели и системе вознаграждений.

4. *Валидация данных*:
   - Перед добавлением нового проекта или внесением доната проверяются все обязательные поля.
   - Пользователи получают уведомления о необходимости заполнения всех полей или о необходимости ввести корректную сумму доната.

# Примечания

- Для корректной работы приложения потребуется установленный Node.js и npm.
- Убедитесь, что сервер работает на `http://localhost:3000`, чтобы приложение могло корректно взаимодействовать с браузером.

