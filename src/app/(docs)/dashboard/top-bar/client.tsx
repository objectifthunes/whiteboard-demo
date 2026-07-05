'use client'

import { TopBar, TopBarLink } from '@objectifthunes/whiteboard'

export function Demo() {
  return (
    <div className="demo-dash-clamp" style={{ border: '1px solid var(--wb-border)', borderRadius: 12, overflow: 'hidden' }}>
      <TopBar
        crumb="acme / tracks / edit"
        actions={
          <>
            <TopBarLink>docs</TopBarLink>
            <TopBarLink>log out</TopBarLink>
          </>
        }
      />
    </div>
  )
}
