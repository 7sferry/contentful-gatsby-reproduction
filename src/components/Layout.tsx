import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './layout.css'

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <div className="body-content">
        <main className="main-layout">
          <div className="index-main">
            <div className="sidebar border-right px-4 py-2">
            </div>
            {children}
            <div className="right-sidebar">
            </div>
          </div>
        </main>
        <footer className="text-center">
          <div className="mobile-footer">
          </div>
          <div className="mobile-footer">
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
