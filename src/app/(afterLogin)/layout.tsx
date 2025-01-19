import { ReactNode } from "react";
import NavMenu from "./_component/NavMenu";

export default function AfterLoginLayout({ children }: {children : ReactNode}) { 
  return (
    <div>
      <header>
        <nav>
          <ul>
            <NavMenu />
          </ul>
        </nav>
      </header>
      {children}
    </div>
  )
  
}