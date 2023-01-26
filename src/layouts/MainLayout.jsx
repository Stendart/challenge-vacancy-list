import './MainLayout.css'

export const MainLayout = ({children}) => {

  return (
    <main className="layout">
      { children }
    </main>
  )
}