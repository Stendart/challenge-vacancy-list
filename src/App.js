import { MainLayout } from './layouts/MainLayout';
import { VacancyList } from './components/VacancyList/VacancyList';
import { TagsList } from './components/TagList/TagsList';
import './App.css';


function App() {
  // const vacancy = useSelector(store => store.vacancy);
  // console.log('vacancy', vacancy);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MainLayout>
        <TagsList />
        <VacancyList />
      </MainLayout>
    </div>
  );
}

export default App;
