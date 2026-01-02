import React from 'react'
import Section1 from './Components/Section1/Section1'


const App = () => {
  let users = [
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'light blue',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'green',
      tag:'UnderServed'
    },
    {
      img:'https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'blue',
      tag:'Underbank'
    },
    {
      img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'pink',
      tag:'Underbank'
    },
    {
      img:'https://images.unsplash.com/photo-1571365689578-618663443bd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'blue',
      tag:'Underbank'
    }

  ]
  return (
    <div>
    <Section1 users={users} />
    
    </div>
  )
}

export default App