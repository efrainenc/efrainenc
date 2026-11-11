import React from 'react'

/* `$ command` line + big numbered heading. Elements carry data-reveal hooks. */
const SectionTitle=({ n, cmd, children })=>{
  return(
    <div className='sectionTitle'>
      <p className='sectionCmd' data-reveal>
        <span>$</span> {cmd}
      </p>
      <h2 className='sectionHeading'>
        <span className='sectionMask'>
          <span className='sectionLine' data-title-line>
            <i className='sectionNum'>{n}</i> {children}
          </span>
        </span>
      </h2>
    </div>
  )
}

export default SectionTitle