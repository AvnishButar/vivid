import React from 'react'

type Props = {
    childern: React.ReactNode
}

const Layout = ({ childern }: Props => {
    return (
      < div className = "w-full min-h-screen flex justify-center items-center" >
       {childern}
      </div>
    )
 }
)

export default Layout